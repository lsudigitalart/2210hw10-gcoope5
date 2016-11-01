var x = [];

function setup(){
  createCanvas(320,240);

  for(i = 0; i < 3000; i++) {
    x[i] = random(0, 50);
  }
  println(x[0], x[1])
}

function draw(){
  background(0);

  for(var i = 0; i < x.length; i++){
    x[i]++
    var y = i * random(1);
    ellipse(x[i], y, 10);
  }
}
