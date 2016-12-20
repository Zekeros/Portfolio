var ball;
var balls = [];
// var middle = width / 2;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  strokeWeight(10);
  stroke(0,128,0);

  for (var i = 0; i < 1000; i++) {
    createBalls();
  }
}
//
// function mouseClicked() {
//   createBalls();
// }

function draw() {
  background(0);
  showBalls();
  ballCheck();
}

function createBalls() {
    balls[balls.length] = new Particle();
}


function showBalls() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].show();
    balls[i].update();
  }
}

function ballCheck() {
  for (var i = 0; i < balls.length; i++) {
    if (balls[i].y>height || balls[i].x>width) {
      balls.splice(i,1);
      createBalls();
    }
  }
}
