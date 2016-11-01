var x = [-20, 20];

function setup(){
  createCanvas(320,240);
  // x[0] = 12;
  // x[1] = 342;
  println(x)
}

function draw(){
  background(0)
  x[0]++;
  x[1]++;
  ellipse(x[0], 20, 10);
  ellipse(x[1], 50, 20);
}
