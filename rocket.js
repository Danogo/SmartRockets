function Rocket(dna) {
  this.pos = createVector(width / 2, height - 10);
  this.vel = createVector();
  this.acc = createVector();
  this.dna = dna ? dna : new DNA();
  this.fitness = 0;
  this.completed = false; //boolean sprawdzajacy czy rakieta osiagnela cel
  this.crashed = false; //boolean sprawdzajacy czy rakieta uderzyla w przeszkode
  this.col = color(105, 0, 200, 150);
  //dodanie sily do przyspieszenia
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  //wyliczanie fitnessu danej rakiety
  this.calcFitness = function() {
    var d = dist(this.pos.x, this.pos.y, tar.tloc.x, tar.tloc.y);
    this.fitness = map(d, 0, width, 1, 0); //===this.fitness = 1 / d;
    if (this.completed) {
      this.fitness *= 5;
    }
    if (this.pos.y < obs.oy) this.fitness *= 2
    if (this.crashed) {
      this.fitness /= 10;
    }
  }

  //ruch
  this.update = function() {
    var d = dist(this.pos.x, this.pos.y, tar.tloc.x, tar.tloc.y);
    if (d <= 15) {
      this.completed = true;
      this.pos = tar.tloc.copy();
      this.col = color(0, 0, 200, 150);
    }
    if (this.pos.x < (obs.ox + (obs.ow / 2)) && this.pos.x > (obs.ox - (obs.ow / 2)) && this.pos.y < (obs.oy + (obs.oh / 2)) && this.pos.y > (obs.oy - (obs.oh / 2))) {
      this.crashed = true;
      this.col = color(0, 102, 50, 150);
    }
    if (this.pos.x > width || this.pos.x < 0 || this.pos.y < 0 || this.pos.y > height) {
      this.crashed = true;
      this.col = color(255, 150);
    }

    if (!this.completed && !this.crashed) {
      this.applyForce(this.dna.genes[lifespan]); //dodaje geny-wektory do acc
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0); //blokuje przyspieszanie
    }
  }

  //wyswietlanie
  this.show = function() {
    push();
    fill(this.col);
    noStroke();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading() + PI / 2);
    rectMode(CENTER);
    rect(0, 0, 5, 20);
    pop();
  }
}
