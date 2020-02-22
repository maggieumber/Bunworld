let cavnas;
let h1;

function setup() {
	h1 = createElement('h1', 'Play');
	canvas = createCanvas(windowWidth, 200);
	canvas.position(0, 400);
	createP("Helo frend!");
	createImg('/img/logo.png', 'bunworld logo');
	createP('Hello');
	createA('/pages/about.html', 'Visit Maggs');
}

function mousePressed() {
	createP("My favorite number is " + random(0, 10));
}

function draw() {
	background(0);
	fill(255, 0, 0);
	rect(100, 100, 50, 50);
}