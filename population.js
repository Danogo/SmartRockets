function Population() {
  this.rockets = [];
  this.popsize = 100;
  this.matingpool = [];

  //tworzenie populacji rakiet w tablicy rockets
  for (var i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Rocket();
  }

  //wyliczanie fitnessu
  this.evaluate = function() {
    this.matingpool = []; //pula, z ktorej wybiera sie rodzicow
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].calcFitness();
      var n = this.rockets[i].fitness * 1000; //fitness danej rakiety okresla ile razy wystapi w puli
      for (var j = 0; j < n; j++) {
        this.matingpool.push(this.rockets[i]);
      }
    }
  }

  //tworzenie nowych rakiet z genami rodzicow
  this.selection = function() {
    var newRockets = [];

    for (var i = 0; i < this.popsize; i++) {
      if (this.rockets[i].completed) newRockets[i] = new Rocket(this.rockets[i].dna);
      else {
        var parentAdna = random(this.matingpool).dna;
        var parentBdna = random(this.matingpool).dna;
        var childna = parentAdna.crossover(parentBdna);
        childna.mutation();
        newRockets[i] = new Rocket(childna);
      }
    }
    this.rockets = newRockets;
  }

  this.run = function() {
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
      if (this.rockets[i].completed == true) hitcount++;
      record = hitcount > record ? hitcount : record;
    }
  }
}
