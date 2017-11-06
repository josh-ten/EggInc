function Chicken() {
    this.width = 10;
    this.height = 10;
    
    this.x = hatchery.x + (hatchery.width/2);
    this.y = hatchery.y + (hatchery.height/2);
    this.pos = createVector(this.x, this.y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    Chicken.prototype.update = function() {
        this.x--;
        this.draw();
    }

    Chicken.prototype.draw = function() {
        fill(0);
        rect(this.x, this.y, this.width, this.height);
    }
}