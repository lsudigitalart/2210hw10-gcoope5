var fire = [];
var penguins = [];

function setup(){
  createCanvas(1000,1000);
  fiya = loadImage("fire.png");
  snake = loadImage("New Piskel (2).png");
  peng = loadImage("New Piskel copy.png");
  fire[0] = new Flame(width/2,height/2);
  penguins[0] = new Penguin;
  // noCursor();
  // stroke(255);
}
function draw(){
  background(0, 120, 120);
  for(var i = 0; i < fire.length; i++){
    fire[i].display();
    fire[i].move();
  }

  for(var i = 0; i < penguins.length; i++){
    penguins[i].display();
    penguins[i].move();


  }

  image(snake, mouseX, mouseY);
  // snake.displace(Penguin);
  // for(var n = 1; n < pa.length; n++){
  //   line(pa[n].posX, pa[n].posY, pa[n-1].posX, pa[n-1].posY);
  // }
}

function mouseMoved(){
  fire[fire.length] = new Flame(mouseX, mouseY);
  println(Flame);
}

// function mouseReleased(){
//   fire[fire.length] = new Flame(mouseX, mouseY);
//   for(var i = 0; i < fire.length; i++){
//     fire[i].posX = random(width);
//     fire[i].posX = random(height);
//     fire[i].vx = random(-10,10);
//     fire[i].vy = random(-15,15);
//   }

// println(Flame);
// }

function Flame(tempX, tempY){
  this.posX = tempX;
  this.posY = tempY;
  this.diameter = random(50, 50)
  var flameSize = 50;

  this.vx = random(-10, 10);
  this.vy = random(-15, 15);
  var gravity = 1;

  this.move = function() {
    this.posX += this.vx;
    this.posY += this.vy;
    this.vy += gravity;
  //   this.vy += 1.045;
  //   this.vx += 1.01;

  // if(this.posY > height){
  //   this.vy *= -0.5
  //   this.vx *= 0.75
  //   this.posY = height + 1;
  // }
  //
  // if(this.posX < 0){
  //   this.vx *= -1;
  // }
  //
  // if(this.posX < 0 || this.posX > width){
  //   this.vx += -1;
  // }

  }

  this.display = function(){
    image(fiya, this.posX, this.posY, flameSize, flameSize);
  }
}

function Penguin(tempSpeed, tempDiameter){
  this.posX = random(width)
  this.posY = random(height)
  this.diameter = random(50, 50)
  this.speed = random(15);

  this.move = function() {
    this.posY += random(-this.speed);
    if(this.posY < 0) {
      this.posY = height
  }
}

  this.display = function(){
    image(peng, this.posX, this.posY, this.diameter, this.diameter)
  }

}
