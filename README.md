# Logo click plugin for Discourse

A simple plugin to make the target of a logo click configurable in [Discourse](http://discourse.org).

Development version, beware. Things might break.

## Installation:
- follow [these steps](https://meta.discourse.org/t/install-a-plugin/19157).
- or, ssh into your Docker container. Do a ```cd /var/www/discourse/plugins; git clone https://github.com/JSey/logo-click``` and next, ```RAILS_ENV=production rake assets:precompile&& sv restart unicorn``` (on a production install. On development, you know the drill...)

## Configuration:

![configuration screenshot](https://github.com/JSey/logo-click/blob/master/settings.png?raw=true)

...not much more to say here.

## ToDo
- think of possible enhancements
- convince Discourse staff that this should go into the core
- brace for impact when this hits: https://github.com/discourse/discourse/pull/3799
