var PL = function() {
  this._dep = new Tracker.Dependency();
  this._id = null;
  this.sound = null;

  // buzz Object
  this.buzz = buzz;
};

PL.prototype.play = function(url, _id, endedCall) {
  var self = this;

  // playing _id
  this._id = _id;

  if (this.isPaused()) {
    return this.sound.play();
  }

  this.stop();
  this.sound = new buzz.sound(url);

  this.sound.bind("timeupdate", function(e) {
    self._dep.changed();
  });

  this.sound.bind("ended", function(e) {
    if (endedCall) {
      return endedCall(self);
    }

    self._id = null;
    self.sound = null;

    self._dep.changed();
  });

  this.sound.play();
};

PL.prototype.stop = function() {
  if (this.sound) {
    this.sound.stop();
    this.sound = null;
    this._dep.changed();
  }
};

PL.prototype.pause = function() {
  if (this.sound) {
    this.sound.pause();
    this._dep.changed();
  }
};

PL.prototype.isPlayed = function(_id) {
  this._dep.depend();
  if (this.sound) {
    return _id ? _.isEqual(this._id, _id) : true;
  }
  return false;
};

PL.prototype.isPaused = function() {
  this._dep.depend();
  if (this.sound) {
    if (this.sound.isPaused()) {
      return true;
    }
  }
  return false;
};

PL.prototype.getPercent = function() {
  this._dep.depend();
  if (this.sound) {
    return this.sound.getPercent();
  }
};

PL.prototype.getTime = function() {
  this._dep.depend();
  if (this.sound) {
    return buzz.toTimer(this.sound.getTime());
  }
};

PL.prototype.get = function(prop) {
  this._dep.depend();
  return this[prop];
};

PL.prototype.set = function(key, val) {
  this[key] = val;
  this._dep.changed();
};

Player = new PL();

Template.registerHelper('player', function() {
  return Player;
});
