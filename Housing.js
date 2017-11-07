function Housing(x_) {
    this.x = x_;
    this.y = 40;
    this.width = 100;
    this.height = 50;
    this.doorX = this.x+(this.width/2)-10;
    this.doorY = this.y+20;
    this.doorWidth = 20;
    this.doorHeight = 30;

    Housing.prototype.draw = function() {
        stroke(1);
        fill(250, 230, 20);
        rect(this.x, this.y, this.width, this.height); //House
        fill(255);
        rect(this.doorX, this.doorY, this.doorWidth, this.doorHeight) //Door
        fill(240, 50, 50);
        beginShape(); //Roof
        vertex(this.x-10, this.y);
        vertex(this.x+(this.width/2), this.y-this.height);
        vertex(this.x+this.width+10, this.y);
        endShape(CLOSE);
        noStroke();
    }
}