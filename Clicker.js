function Clicker() {
    this.width = 100;
    this.height = 40;
    this.x = (width/2) - (this.width/2);
    this.y = height - this.height - 20;

    Clicker.prototype.draw = function() {
        noStroke();
        fill(255, 0, 0);
        rect(this.x, this.y, this.width, this.height);
        textSize(25);
        fill(0);
        text("CLICK!", this.x+10, this.y+this.height-12);
    }

    Clicker.prototype.click = function() {
        spawnChicken();
    }
}