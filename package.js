Package.describe({
  name: 'k0m4r19:sound-player',
  version: '0.0.3',
  summary: 'A Javascript HTML5 Audio reactivity library with volume gestion',
  git: 'https://github.com/K0M4R19/sound-player.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

   // Meteor-provided packages
  api.use([
    'templating',
    'underscore',
    'reactive-var',
    'tracker'
  ]);

  api.addFiles([
    // Buzz, a Javascript HTML5 Audio library
    'lib/buzz.js',

    // sound player tracker depend
    'player.js'], 'client');

  api.export(['Player']);
});
