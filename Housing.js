function Housing(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.width = 100;
    this.height = 50;

    Housing.prototype.draw = function() {
        fill(1);
        rect(this.x, this.y, this.width, this.height);
    }
}