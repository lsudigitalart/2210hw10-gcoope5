// var num = 600;
var x = width/2;
var y = height/2;
var snake

function setup() {
  createCanvas(900, 900);
  snake = new head(R, x, y, size);
  stroke(255);
  var b = false;
  var d = 40;
  var middle = width/2;;
  head = loadImage("New Piskel (2).png");

  for (var i = d; i <= width; i += d) {

    if (i < middle) {
      b = true;
    } else {
      b = false;
    }

    if (b == true) {
      // Vertical line
      line(i, d, i, height-d);
    }

    if (b == false) {
      // Horizontal line
      line(middle, i - middle + d, width-d, i - middle + d);
    }
  }


}
function draw() {
background(0);
translate(width/2, height/2);

snake.move();
snake.display();


  ellipseMode(CENTER);
  noStroke();


  function head(){


    this.move = function(){


    };

    this.display = function() {
      image(head, x, y, )

    };


    }

  }
