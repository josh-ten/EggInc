function Clicker() {
    this.width = 100;
    this.height = 40;
    this.x = (width/2) - (this.width/2);
    this.y = height - this.height - 20;
    this.color = color(255, 0, 0);

    Clicker.prototype.draw = function() {
        stroke(2);
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
        noStroke();
        textSize(25);
        fill(0);
        text("CLICK!", this.x+10, this.y+this.height-12);
        if (!mouseIsPressed)
            this.color = color(255, 0, 0);        
    }

    Clicker.prototype.click = function() {
        spawnChicken();
        this.color = color(255, 100, 0);
    }
}