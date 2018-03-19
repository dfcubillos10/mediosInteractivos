var colorr=255;
var colorg=128;
var colorb=0;

var miSonido;
var amplitud;

function preload(){
  //miSonido=loadSound('Mii channel music but its on fire.mp3');
  miSonido=loadSound('Mii Channel (Remix).mp3');
  
}

function setup() {
  createCanvas(500, 500, WEBGL);
  normalMaterial();
  miSonido.loop();
  
  amplitud = new p5.Amplitude();
}

function draw() {
  background(0, 0, 0);
  stroke(255);
  translate(0, 100, 0);

  push();
  translate(0, 25, 0);
  rotateX(PI/2);
  fill(colorr, colorg, colorb);
  //plane(width, 400);
  pop();

  var nivel = amplitud.getLevel();
  nivel = map(nivel, 0.0, 1.0, 0, 600);
  
  push();
  rotateZ(PI);
  translate(0, 50, 0);
  
  //conos medio
  //arriba
  fill(colorr, colorg, colorb);
  cone(50, -nivel);
  translate(0, 50, 0);
  //abajo
  translate(0, 50, 0);
  fill(colorr, colorg, colorb);
  cone(50, nivel);
  
  //conos izq
  //arriba
  translate(100, -100, 0);
  fill(153, 0, 153);
  cone(50, nivel);
  translate(0, 50, 0);
  //abajo
  translate(0, 50, 0);
  fill(153, 0, 153);
  cone(50, -nivel);
  pop();
  
  //conos der
  //arriba
  translate(100, -150, 0);
  fill(153, 0, 153);
  cone(50, nivel);
  translate(0, 50, 0);
  //abajo
  translate(0, 50, 0);
  fill(153, 0, 153);
  cone(50, -nivel);
}

