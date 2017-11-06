function Chicken() {
    this.travelPoints = [];
    this.travelPoints.push(createVector(width/2, 300));
    this.travelPoints.push(createVector(width/2, 150));
    
    this.houseChoice = floor(random(0, 2.99));    
    switch (this.houseChoice) {
        case 0: this.travelPoints.push(createVector(100, 100)); break;
        case 1: this.travelPoints.push(createVector(width/2, 100)); break;
        case 2: this.travelPoints.push(createVector(300, 100)); break;
    }

    this.width = 10;
    this.height = 10;

    this.x = hatchery.x + (hatchery.width/2);
    this.y = hatchery.y + (hatchery.height/2);
    this.pos = createVector(this.x, this.y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.maxspeed = 15;


    Chicken.prototype.update = function() {
        if (this.vel.mag() > this.maxspeed)
            this.vel.mult(0.8);
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        //Friction
        this.vel.mult(0.9);
        this.acc.mult(0);

        if (this.travelPoints.length > 0)
            this.attract();
        this.draw();
    }

    Chicken.prototype.draw = function() {
        fill(0);
        rect(this.pos.x, this.pos.y, this.width, this.height);
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