import DiscourseURL from 'discourse/lib/url';

export default
{
    name: 'LogoClick',
    initialize()
    {
      if (Discourse.SiteSettings.logo_click_enabled)
      {
        Discourse.HomeLogoComponent.reopen({
          linkUrl: function() {
              return Discourse.getURL(Discourse.SiteSettings.logo_click_target);
          }.property(),
          
          click: function(e) {
            // if they want to open in a new tab, let it so
            if (e.shiftKey || e.metaKey || e.ctrlKey || e.which === 2) { return true; }

            e.preventDefault();

            DiscourseURL.routeTo(Discourse.SiteSettings.logo_click_target);
            return false;
          }
         });
      }
  }
};

