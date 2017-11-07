function Hatchery() {
    this.x = 300;
    this.y = 200;
    this.width = 100;
    this.height = 100;
    this.chickenSize = 6;

    Hatchery.prototype.draw = function() {
        stroke(1);
        fill(10, 140, 240);
        rect(this.x, this.y, this.width, this.height);
        beginShape(); //Roof
        fill(240, 50, 50);
        vertex(this.x-10, this.y);
        vertex(this.x+(this.width/2), this.y-this.height/2);
        vertex(this.x+this.width+10, this.y);
        endShape(CLOSE);
        noStroke();

        translate(this.x+this.width/2, this.y+this.height/2+20);
        scale(this.chickenSize, this.chickenSize);
        //Body
        fill(255);
        beginShape();
        vertex(0, 0); //Chin
        vertex(0-3, 0-5); //Head
        vertex(0-3, 0-7);
        vertex(0, 0-7);
        vertex(0+6, 0);
        endShape();
        //Little chin thing
        fill(255,0,0);
        beginShape();
        vertex(0, 0);
        vertex(0-3, 0-5);
        vertex(0-2, 0);
        endShape();
        //Little head thing
        beginShape();
        vertex(0-3, 0-7);
        vertex(0-1.5, 0-9);
        vertex(0, 0-7);
        endShape();
        //Beak
        fill(250,150,0);
        beginShape();
        vertex(-4, -6);
        vertex(-3, -5);
        vertex(-3, -7);
        endShape();
        scale(1/this.chickenSize, 1/this.chickenSize);
        translate(-this.x-this.width/2, -this.y-this.height/2-20);
    }
}