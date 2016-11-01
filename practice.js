var x = [];
// var x1 = 10
// var x2 = 50
// var x3 = 100

function setup(){
  createCanvas(320,240);
  background(0);
  for(var i = 0; i < 3000; i++){
    x[i] = random(0, 1000);
  }

println(x);
}

function draw(){

  // x1 += 0.5;
  // x2 += 0.5;
  // x3 += 0.5;

  // ellipse(x1, 50, 50);
  // ellipse(x2, 50, 20);
  // ellipse(x3, 50, 70);

  for (var i = 0; i < x.length; i++) {
    x[i] += 0.5;
    var y = i * 0.4;
    ellipse(x[i], y, 20);

  }

}
