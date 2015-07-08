Package.describe({
  name: 'fileer:sound-player',
  version: '0.0.1',
  summary: 'A Javascript HTML5 Audio reactivity library.',
  git: 'https://github.com/fileer/sound-player.git',
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
