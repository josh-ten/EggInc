function Chicken() {
    this.x = width/2;
    this.y = height/2;
    this.width = 10;
    this.height = 10;

    Chicken.prototype.update = function() {
        this.y--;
        this.draw();
    }

    Chicken.prototype.draw = function() {
        fill(0);
        rect(this.x, this.y, this.width, this.height);
    }
}