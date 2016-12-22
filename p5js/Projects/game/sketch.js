function setup() {
  createCanvas(400,400)
  plyr = new Player();
}

function draw() {
  background(0)
  plyr.draw();
  plyr.update();
}

function Player() {
  this.w = 10;
  this.jump = createVector(0,-1);
  this.gravity = createVector(0,0.5);
  this.pos = createVector(20,380);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.checkY = function() {
    if (this.pos.y>height-this.w) {
      this.pos.y = height;
    }
  }

  this.update = function() {
    this.acc.add(this.gravity);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.checkY();
  }


  this.draw = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.w);
  }

  this.mouseClicked = function() {
    this.applyForce(this.jump);
    console.log("CLICKED");
  }

}
