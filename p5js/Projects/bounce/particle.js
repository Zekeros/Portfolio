function Particle(x, y) {

  var bounce = 0;
  var randvel = random(-(height/60),-7);

  if (bounce < 0) {
    bounce = 0;
  }

  this.pos = createVector(x,y);
  this.vel = createVector(0,random(randvel));
  this.acc = createVector(0,0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.checkY = function() {
    if (this.pos.y>height) {
      this.acc.add(0, randvel);
      // bounce+=10;
      // console.log(bounce)
    }
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.checkY();
  }

  this.show = function() {
    point(this.pos.x, this.pos.y);
  }
}
