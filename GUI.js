function GUI() {

    GUI.prototype.draw = function() {
        textSize(25);
        fill(0);
        text(numChickens, 10, 25);
        text("x " + multiplier, 10, height/2);
    }
}