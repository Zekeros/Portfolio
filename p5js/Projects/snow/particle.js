function Particle() {
  this.x = random(-width/2, width);
  this.y = random(-height*2, 0);
  this.poppable = false;


  col = map(this.x, 0, height, 0, 255);


  this.show = function() {
    point(this.x, this.y);
  }

  this.update = function() {
    this.y++;
    this.x++;
    //map(mouseX, 0, width, -5, 5);
    // if (this.x>0 && this.x<width) {
    //   this.poppable == true;
    // }
  }
}
