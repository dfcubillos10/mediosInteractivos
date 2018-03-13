var fuego;
var agua;
var tierra;
var aire;

var bola;
var bolaFuego;
var bolaAgua;
var bolaTierra;
var bolaAire;

function preload()
{
  //las 4 imagenes de los bordes
	fuego=loadImage("assets/fire.png");
  tierra=loadImage("assets/tierra.jpeg");
  agua=loadImage("assets/agua.jpg");
  aire=loadImage("assets/aire.jpg");
  
  //la imagen que se mueve
  bolaFuego=loadImage("assets/ball.png");
  bolaAgua=loadImage("assets/ball.png");
  bolaTierra=loadImage("assets/ball.png");
  bolaAire=loadImage("assets/ball.png");
  
}

function setup() {
  createCanvas(400, 400);
  //combina bola con fuego
  bolaFuego.mask(fuego);
  bolaAgua.mask(agua);
  bolaTierra.mask(tierra);
  bolaAire.mask(aire);
 
}

function draw() {
  background(255,255,255);
  noTint();
  //fondos
  image(fuego,0,0,200,200);
  image(agua,200,200,200,200);
  image(tierra,200,0,200,200);
  image(aire,0,200,200,200);
  
  //cuadrante1
  if(mouseX<200&&mouseY<200)
  {	
    //tinte de fuego azul
    tint(0,255,255,255);
    image(bolaFuego,mouseX-25,mouseY-25,50,50);
  }
   //cuadrante2
  if(mouseX>200&&mouseY<200)
  {
    //sin tinte pues es una bola normal en la tierra
    image(bolaTierra,mouseX-25,mouseY-25,50,50);
  }
   //cuadrante3
  if(mouseX>200&&mouseY>200)
  {
    //tinte de bola en el agua
    tint(0,51,51,255);
    image(bolaAgua,mouseX-25,mouseY-25,50,50);
  }
   //cuadrante4
  if(mouseX<200&&mouseY>200)
  {	
    //sin tinte pues bola normal en el aire
    image(bolaAire,mouseX-25,mouseY-25,50,50);
  }
  
  
  
  
	
}