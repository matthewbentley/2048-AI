function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

<<<<<<< HEAD
Tile.prototype.clone = function() {
  newTile = new Tile({ x: this.x, y: this.y }, this.value);
  //newTile.previousPosition = { x: this.previousPosition.x, y: this.previousPosition.y };
  //newTile.mergedFrom = { x: this.previousPosition.x, y: this.previousPosition.y };
  return newTile;
}
=======
Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
>>>>>>> 542208d94ac562ff573d697039a493cafcc7f014
