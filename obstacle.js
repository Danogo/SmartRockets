function Obstacle(ox, oy) {

  this.ox = ox;
  this.oy = oy;
  this.ow = 200;
  this.oh = 20;

  this.makeO = function() {
    noStroke();
    fill(0, 165, 80);
    rectMode(CENTER);
    rect(this.ox, this.oy, this.ow, this.oh);
  }
}
