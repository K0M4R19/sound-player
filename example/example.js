if (Meteor.isClient) {
  Template.player.events({
    'click .play': function() {
      Player.play('/example.mp3');
    },

    'click .stop': function() {
      Player.stop();
    },

    'click .pause': function() {
      Player.pause();
    }
  });
}
