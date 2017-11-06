function Housing(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.width = 100;
    this.height = 50;

    Housing.prototype.draw = function() {
        fill(250, 230, 20);
        rect(this.x, this.y, this.width, this.height);
        fill(255);
        rect(this.x+(this.width/2)-10, this.y+20, 20, 30)
        fill(240, 50, 50);
        beginShape();
        vertex(this.x-10, this.y);
        vertex(this.x+(this.width/2), this.y-this.height);
        vertex(this.x+this.width+10, this.y);
        endShape();
    }
}