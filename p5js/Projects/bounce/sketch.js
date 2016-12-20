var balls = [];
var gravity;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  gravity = createVector(0,0.5);
  stroke(0,128,0);
  frameRate(100);
  strokeWeight(4);
  for (var i = 0; i < 100; i++) {
    balls.push(new Firework());
  }
}

function draw() {
  background(0);
  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].show();
  }

}
