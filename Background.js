function Background() {

    Background.prototype.draw = function() {
        fill(255, 200, 0);
        var farLeft = width;
        var farRight = 0;
        for (var i = 0; i < housing.length; i++) {
            var doorX = housing[i].doorX;
            var doorY = housing[i].doorY;
            var doorW = housing[i].doorWidth;
            
            rect(doorX-5, doorY, doorW+10, 90);

            if (doorX < farLeft)
                farLeft = doorX-5;
            if (doorX+doorW > farRight)
                farRight = doorX+doorW+5;
        }

        var y = housing[0].doorY+90;
        rect(farLeft, y, farRight-farLeft, 30); //Connecting path

        rect(width/2-15, y, 30, hatchery.y+hatchery.height/2-y);

        rect(width/2-15, hatchery.y+hatchery.height/2, hatchery.x-(width/2-25), 30);
    }
}