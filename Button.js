function Button(x_, y_, width_, height_, text_, fn_) {
    this.width = width_;
    this.height = height_;
    this.x = x_;
    this.y = y_;
    this.color = color(255, 0, 0);
    this.text = text_;
    this.fn = fn_;

    Button.prototype.draw = function() {
        stroke(2);
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
        noStroke();
        textSize(25);
        fill(0);
        text(this.text, this.x+10, this.y+this.height-12);
        if (!mouseIsPressed)
            this.color = color(255, 0, 0);        
    }

    Button.prototype.executeFn = function() {
        this.color = color(255, 100, 0);
        this.fn();
    }

}