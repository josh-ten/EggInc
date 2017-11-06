function Clicker() {
    this.width = 100;
    this.height = 40;
    this.x = (width/2) - (this.width/2);
    this.y = height - this.height - 20;

    Clicker.prototype.draw = function() {
        fill(0);
        rect(this.x, this.y, this.width, this.height);
    }

    Clicker.prototype.click = function() {
        console.log("CLICK");
    }
}