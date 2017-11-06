function Hatchery() {
    this.x = 300;
    this.y = 200;
    this.width = 100;
    this.height = 100;

    Hatchery.prototype.draw = function() {
        fill(0);
        rect(this.x, this.y, this.width, this.height);
    }
}