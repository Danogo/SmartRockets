var lifespan = 500;
var lifeP;
var hitP;
var recP;
var popcount;
var hitcount;
var record;
var popul;
var tar;
var obs;


function setup() {
  createCanvas(600, 600);

  lifeP = createP();
  hitP = createP();
  recP = createP();
  popcount = 1;
  hitcount = 0;
  record = 0;

  popul = new Population();
  tar = new Target();
  obs = new Obstacle(width / 2, height / 2.5);

}

function draw() {
  background(170);
  popul.run();

  lifeP.html("Generation: " + popcount);
  lifeP.position(10, 520);
  hitP.html("Hit: " + hitcount);
  hitP.position(10, 540);
  recP.html("Record: " + record);
  recP.position(10, 560);

  lifespan--;
  if (lifespan == 0) {
    popul.evaluate();
    popul.selection();
    lifespan = 500;
    popcount++;
  }
  hitcount = 0;

  obs.makeO();
  tar.makeT();

}
