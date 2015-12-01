import DiscourseURL from 'discourse/lib/url';
import HomeLogoComponent from 'discourse/components/home-logo';
// ToDO import DiscourseLocation from 'discourse/lib/discourse-location';

export default
{
    name: 'LogoClick',
    initialize(container)
    {
      const siteSettings = container.lookup('site-settings:main');
      if (siteSettings.logo_click_enabled)
      {
        HomeLogoComponent.reopen({
          linkUrl: function() {
              return Discourse.getURL(siteSettings.logo_click_target);
          }.property(),
          
          click: function(e) {
            // if they want to open in a new tab, let it so
            if (e.shiftKey || e.metaKey || e.ctrlKey || e.which === 2) { return true; }

            e.preventDefault();

            DiscourseURL.routeTo(siteSettings.logo_click_target);
            return false;
          }
         });
      }
  }
};

