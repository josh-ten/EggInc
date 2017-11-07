function Chicken() {
    this.travelPoints = [];
    this.travelPoints.push(createVector(width/2, 250));
    this.travelPoints.push(createVector(width/2-5, 165));

    this.houseChoice = floor(random(0, 2.99));    
    switch (this.houseChoice) {
        case 0:
            this.travelPoints.push(createVector(100, 150));
            this.travelPoints.push(createVector(100, 70));
            break;
        case 1: 
            this.travelPoints.push(createVector(width/2, 150));
            this.travelPoints.push(createVector(width/2, 70)); 
            break;
        case 2: 
            this.travelPoints.push(createVector(300, 150));
            this.travelPoints.push(createVector(300, 70)); 
            break;
    }

    this.width = 20;
    this.height = 10;

    this.x = hatchery.x + (hatchery.width/2);
    this.y = hatchery.y + (hatchery.height/2);
    this.pos = createVector(this.x, this.y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.maxspeed = 3;

    Chicken.prototype.update = function() {
        // fill(0);
        // rect(this.travelPoints[0].x, this.travelPoints[0].y, 5, 5);
        
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        //Friction
        this.vel.mult(0.9);
        this.acc.mult(0);

        if (this.travelPoints.length > 0)
            this.attract();

        translate(this.pos.x, this.pos.y);
        angleMode(DEGREES);
        var direction = map(this.vel.heading(), -180, 180, 0, 360);
        //Normal
        if (direction < 90 || direction > 270) {
            rotate(direction);
            this.draw();
            rotate(-direction);
        } else {
            //Flip
            scale(-1, 1);
            rotate(180-direction);
            this.draw();
            rotate(180+direction);
            scale(-1, 1);
        }
        translate(-this.pos.x, -this.pos.y);
    }

    Chicken.prototype.draw = function() {
        // fill(255);
        // rect(this.pos.x, this.pos.y, this.width, this.height);
        // fill(255, 150, 10);
        // rect(this.pos.x+2.5, this.pos.y+2.5, 5, 5);

        //Body
        fill(255);
        beginShape();
        vertex(0, 0); //Chin
        vertex(0-3, 0-5); //Head
        vertex(0-3, 0-7);
        vertex(0, 0-7);
        vertex(0+6, 0);
        vertex(0+this.width, 0); //Body
        vertex(0+(3*(this.width/4)), 0+(this.height/2)+3);
        vertex(0+this.width/2, 0+this.height);
        vertex(0+(this.width/4), 0+(this.height/2)+3);        
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
    }

    Chicken.prototype.attract = function() {
        var direction = this.travelPoints[0].copy().sub(this.pos);
        var distance = direction.mag();
        direction.div(distance);
        this.acc = direction.mult(distance/90);

        //Remove the point if the chicken gets within a range
        if (this.travelPoints[0].copy().sub(this.pos).mag() < 10)
            this.travelPoints.splice(0, 1);
    }
}