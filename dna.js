function DNA(genes) {

  if (genes) {
    this.genes = genes;
  } else {
    this.genes = [];
    for (var i = 0; i < lifespan; i++) {
      this.genes[i] = p5.Vector.random2D(); //geny jako losowe wektory
      this.genes[i].setMag(0.2); //ustawienie stalej dlugosci wektora
    }
  }

  //mieszanie genow od dwoch rodzicow
  this.crossover = function(partner) {
    var newgenes = [];
    var mid = floor(random(this.genes.length));
    for (var i = 0; i < this.genes.length; i++) {
      if (i > mid) {
        newgenes[i] = this.genes[i];
      } else {
        newgenes[i] = partner.genes[i]
      }
    }
    return new DNA(newgenes);
  }

  //dodanie elementu losowosci w przekazywaniu genow
  this.mutation = function() {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < 0.01) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(0.2);
      }
    }
  }
}
