var colorr=90;
var colorg=255;
var colorb=70;
function setup() {
  createCanvas(400, 400, WEBGL);
  normalMaterial();
}

function draw() {
  background(0, 150, 250);
  stroke(255);
	
	if(mouseX<width/2)
	{
		colorr=colorr-1;
		colorg=255;
		colorb=colorb-1;
	}
	if(mouseX>width/2)
	{
		colorr=colorr+1;
		colorg=255;
		colorb=colorb+1;
	}

  //scale(0.5);
  //translate(mouseX-(width/2), mouseY-(height/2), 0);
  translate(0, 100, 0);

  push();
  translate(0, 25, 0);
  rotateX(PI/2);
  fill(colorr, colorg, colorb);
  plane(width, 400);
  pop();

  push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(10, 50);
  translate(0, 50, 0);
  fill(colorr, colorg, colorb);
  cone(50, 100);
  translate(0, 50, 0);
  fill(colorr, colorg, colorb);
  cone(50, 100);
  translate(0, 50, 0);
  fill(colorr, colorg, colorb);
  cone(50, 100);
  pop();
}

