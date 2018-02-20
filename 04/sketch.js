var tamCirculo=40;
var altoRect=20;
var anchoRect=60;

var arribaX=80;
var arribaY=280;
var derX=120;
var derY=320;
var abajoX=80;
var abajoY=360;
var izqX=40;
var izqY=320;


var xX=520;
var xY=280;
var yX=560;
var yY=320;
var bX=520;
var bY=360;
var aX=480;
var aY=320;

var startX=220;
var startY=360;
var selectX=320;
var selectY=360;

var figuraX=280;
var figuraY=140;
var altoFigura=20;
var anchoFigura=20;

var selectedColor=0;
var traslacion =5;

function setup() { 
  createCanvas(600, 400);
} 

function draw() { 
  //COMANDOS
  background(220);
  fill(255, 255, 255);
  ellipse(arribaX, arribaY, tamCirculo, tamCirculo);
  ellipse(derX, derY, tamCirculo, tamCirculo);
  ellipse(abajoX, abajoY, tamCirculo, tamCirculo);
  ellipse(izqX, izqY, tamCirculo, tamCirculo);
  
  fill(0, 128, 255);
  ellipse(xX, xY, tamCirculo, tamCirculo);
  fill(255, 255, 0);
  ellipse(yX, yY, tamCirculo, tamCirculo);
  fill(255, 0, 0);
  ellipse(bX, bY, tamCirculo, tamCirculo);
  fill(128, 255, 0);
  ellipse(aX, aY, tamCirculo, tamCirculo);
  
  fill(255, 255, 255);
  rect(startX, startY, anchoRect, altoRect);
  rect(selectX, selectY, anchoRect, altoRect);
  
  fill(0, 0, 0);
  text("↑",arribaX-2.5,arribaY+2.5)
  text("→",derX-2.5,derY+2.5)
  text("↓",abajoX-2.5,abajoY+2.5)
  text("←",izqX-2.5,izqY+2.5)
  
  text("X",xX-2.5,xY+2.5)
  text("Y",yX-2.5,yY+2.5)
  text("B",bX-2.5,bY+2.5)
  text("A",aX-2.5,aY+2.5)
  
  text("Start",startX+15,startY+15)
  text("Select",selectX+15,selectY+15)
  
  line(0, 240, 600, 240);
  
  if (selectedColor == 0) {
			fill(0, 128, 255);
	}
	if (selectedColor == 1) {
			fill(255, 255, 0);
	}
  if (selectedColor == 2) {
			fill(255, 0, 0);
	}
	if (selectedColor == 3) {
			fill(128, 255, 0);
	}
  rect(figuraX,figuraY,altoFigura,anchoFigura)
  
  //FUNCIONALIDAD
  if (mouseIsPressed) {
		// Definimos el área sensible de los botones y para que sirven.
    //botones de movimiento
		if (mouseX > arribaX-tamCirculo/2 && mouseX < arribaX + tamCirculo/2 &&
			mouseY > arribaY-tamCirculo/2 && mouseY < arribaY + tamCirculo/2) {
			figuraY=figuraY-traslacion;
		}
		if (mouseX > derX-tamCirculo/2 && mouseX < derX + tamCirculo/2 &&
			mouseY > derY-tamCirculo/2 && mouseY < derY + tamCirculo/2) {
			figuraX= figuraX+traslacion;
		}    
		if (mouseX > abajoX-tamCirculo/2 && mouseX < abajoX + tamCirculo/2 &&
			mouseY > abajoY-tamCirculo/2 && mouseY < abajoY + tamCirculo/2) {
			figuraY=figuraY+traslacion;
		}
		if (mouseX > izqX-tamCirculo/2 && mouseX < izqX + tamCirculo/2 &&
			mouseY > izqY-tamCirculo/2 && mouseY < izqY + tamCirculo/2) {
			figuraX= figuraX-traslacion;
		}
    //botones de seleccion (color)
    if (mouseX > xX-tamCirculo/2 && mouseX < xX + tamCirculo/2 &&
			mouseY > xY-tamCirculo/2 && mouseY < xY + tamCirculo/2) {
			selectedColor=0;
		}
		if (mouseX > yX-tamCirculo/2 && mouseX < yX + tamCirculo/2 &&
			mouseY > yY-tamCirculo/2 && mouseY < yY + tamCirculo/2) {
			selectedColor=1;
		}    
		if (mouseX > bX-tamCirculo/2 && mouseX < bX + tamCirculo/2 &&
			mouseY > bY-tamCirculo/2 && mouseY < bY + tamCirculo/2) {
			selectedColor=2;
		}
		if (mouseX > aX-tamCirculo/2 && mouseX < aX + tamCirculo/2 &&
			mouseY > aY-tamCirculo/2 && mouseY < aY + tamCirculo/2) {
			selectedColor=3;
		}
     //botones de menu (color)
    if (mouseX > startX && mouseX < startX + anchoRect &&
			mouseY > startY && mouseY < startY+altoRect) {
			rect(figuraX+20,figuraY+20,altoFigura,anchoFigura)
      rect(figuraX-20,figuraY-20,altoFigura,anchoFigura)
      rect(figuraX+20,figuraY-20,altoFigura,anchoFigura)
      rect(figuraX-20,figuraY+20,altoFigura,anchoFigura)
		}
		if (mouseX > selectX && mouseX < selectX + anchoRect &&
			mouseY > selectY && mouseY < selectY+altoRect) {
			rect(figuraX,figuraY-20,altoFigura,anchoFigura)
      rect(figuraX+20,figuraY,altoFigura,anchoFigura)
      rect(figuraX,figuraY+20,altoFigura,anchoFigura)
      rect(figuraX-20,figuraY,altoFigura,anchoFigura)
		}  
  }
}