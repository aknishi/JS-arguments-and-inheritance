Function.prototype.inherits = function (fromClass) {
  function Surrogate (){};
  Surrogate.prototype = fromClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function (fromClass) {
  this.prototype = Object.create(fromClass.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
