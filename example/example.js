if (Meteor.isClient) {
  Template.player.events({
    'click .play': function() {
      Player.play('http://www.fileer.com/cfs/files/files/X9wbajyE4c8aPQQpE/g2DjCigBDpZy8MgTDKWXMpFAtLfJB8QLGDQ2QNhmeJuJFwBsrk.mp3');
    },

    'click .stop': function() {
      Player.stop();
    },

    'click .pause': function() {
      Player.pause();
    }
  });
}
