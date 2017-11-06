var clicker;
var hatchery;
var chickens = [];
var numChickens;
var housing = [];

function setup() {
	createCanvas(400, 400);
	numChickens = 0;
	clicker = new Clicker();
	hatchery = new Hatchery();
	housing.push(new Housing(45, 30));
	housing.push(new Housing(150, 30));
	housing.push(new Housing(255, 30));
}

function draw() {
	background(200);
	clicker.draw();
	hatchery.draw();
	for (var i = 0; i < chickens.length; i++) {
		chickens[i].update();
	}
	for (var i = 0; i < housing.length; i++) {
		housing[i].draw();
	}
}

function mousePressed() {
	if (collision(mouseX, mouseY, clicker)) {
		clicker.click();
	}
}

function collision(x, y, obj) {
	return (x > obj.x &&
			x < obj.x + obj.width &&
			y > obj.y &&
			y < obj.y + obj.height);
}

function spawnChicken() {
	var chicken = new Chicken();
	chickens.push(chicken);
	numChickens++;
	console.log(numChickens);
}