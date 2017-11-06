var clicker;

function setup() {
	createCanvas(400, 400);
	clicker = new Clicker();
}

function draw() {
	background(200);
	clicker.draw();
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
