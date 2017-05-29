function Target() {
  this.tloc = createVector(width / 2, 60);
  this.td = 30;

  this.makeT = function() {
    noStroke();
    fill(200, 0, 100, 120);
    ellipse(this.tloc.x, this.tloc.y, this.td, this.td)
  }
}
