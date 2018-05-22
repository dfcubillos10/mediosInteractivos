var velocidadOsos;
var gameOver;
var score;
var pause;

//sonidos
var music;
var sound;

//variables imagenes
var star;
var unicorn;
var bear;

//variables objetos;
var estrella;
var misEstrellas = [];
var unicornio;
var oso;
var misOsos = [];

//variables botones pantalla
var conversionX;
var conversionY;

var arribaX;
var arribaY;
var derX;
var derY;
var abajoX;
var abajoY;
var izqX;
var izqY;


var xX;
var xY;
var yX;
var yY;
var bX;
var bY;
var aX;
var aY;

var startX;
var startY;
var selectX;
var selectY;

var figuraX;
var figuraY;
var altoFigura;
var anchoFigura;

var tamCirculo;
var altoRect;
var anchoRect;

var selectedColor;
var traslacion;

function preload()
{
  star=loadImage("assets/star.png");
  unicorn=loadImage("assets/unicorn.png");
  bear = loadImage("assets/bear.png");
  
  music=loadSound('assets/music.mp3');
  sound=loadSound('assets/sound.mp3');
}

function setup() {
  music.loop();
  //createCanvas(windowWidth, windowHeight);
  createCanvas(2048, 1536);
  
  velocidadOsos=2;
  gameOver=0;
  score=0;
  pause=0;
  //localizacion botones pantalla
 //conversionX = width/600;
 //conversionY = height/400;
  conversionX = 2048/600;
 conversionY = 1538/400;

 arribaX=80*conversionX;
 arribaY=280*conversionY;
 derX=120*conversionX;
 derY=320*conversionY;
 abajoX=80*conversionX;
 abajoY=360*conversionY;
 izqX=40*conversionX;
 izqY=320*conversionY;


 xX=520*conversionX;
 xY=280*conversionY;
 yX=560*conversionX;
 yY=320*conversionY;
 bX=520*conversionX;
 bY=360*conversionY;
 aX=480*conversionX;
 aY=320*conversionY;

 startX=220*conversionX;
 startY=360*conversionX;
 selectX=320*conversionX;
 selectY=360*conversionX;

 figuraX=280*conversionX;
 figuraY=140*conversionY;
 altoFigura=25*conversionY;
 anchoFigura=25*conversionX;

 tamCirculo=40*conversionX;
 altoRect=20*conversionY;
 anchoRect=60*conversionX;

 selectedColor=0;
 traslacion =30;
  
  //creacion de especies
  unicornio = new Unicorn();
  
  //inicializa las estrellas
  for (var i = 0; i < 20; i = i + 1) {
    misEstrellas[i] = new Star();
  }
  //inicializa los osos
  for (var i = 0; i < 4; i = i + 1) {
    misOsos[i] = new Bear();
  }
}

function draw() {
  //si ya se perdió
  if(gameOver)
  {
    textSize(10*conversionY);
    background(148,0,211);
    fill(250);
    text("GAME OVER, YOUR SCORE: "+score,width/2,height/2);
    fill(255, 255, 255);
    rect(startX, startY, anchoRect, altoRect);
    fill(0);
    text("Retry",startX+20*conversionX,startY+15*conversionY)
    
    if(mouseIsPressed)
    {
      if (mouseX > startX && mouseX < startX + anchoRect &&
        mouseY > startY && mouseY < startY+altoRect) {
        figuraX=0;
 				figuraY=140*conversionY;
        velocidadOsos=2;
        score=0;
        gameOver=0;
      }
    } 
  }  
  else
  {
    textSize(10*conversionY);
    //si se esta jugando
    background(25);
    if(pause)
    {
      //no se suma puntaje
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
      text("PAUSE",startX+60*conversionX,selectY-15*conversionY)
      
    }
    else
    {
      fill(0);
    	score=score+1;
    }
    //estrellas andando
    for (var i = 0; i < misEstrellas.length; i = i + 1) {
      misEstrellas[i].dibujarse();
      misEstrellas[i].nadar();
    }
    for (var i = 0; i < misOsos.length; i = i + 1) {
      misOsos[i].dibujarse();
      misOsos[i].nadar();
      //si el unicornio toca un oso pierde
    	if (dist(unicornio.x, unicornio.y, misOsos[i].x, misOsos[i].y) < misOsos[i].tamano)
      {
        sound.play();
      	gameOver=1;
      }    
    }

    unicornio.dibujarse();

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
    text("↑",arribaX-2.5*conversionX,arribaY+2.5*conversionY)
    text("→",derX-2.5*conversionX,derY+2.5*conversionY)
    text("↓",abajoX-2.5*conversionX,abajoY+2.5*conversionY)
    text("←",izqX-2.5*conversionX,izqY+2.5*conversionY)

    text("X",xX-2.5*conversionX,xY+2.5*conversionY)
    text("Y",yX-2.5*conversionX,yY+2.5*conversionY)
    text("B",bX-2.5*conversionX,bY+2.5*conversionY)
    text("A",aX-2.5*conversionX,aY+2.5*conversionY)

    text("Pause",startX+15*conversionX,startY+15*conversionY)
    text("Continue",selectX+5*conversionX,selectY+15*conversionY)

    line(0, 240*conversionY, width, 240*conversionY);

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
    text("SCORE: "+ score,startX+50*conversionX,selectY+50*conversionY)

    //FUNCIONALIDAD
    if (mouseIsPressed) {
      // Definimos el área sensible de los botones y para que sirven.
      //botones de movimiento
      if (mouseX > arribaX-tamCirculo/2 && mouseX < arribaX + tamCirculo/2 &&
        mouseY > arribaY-tamCirculo/2 && mouseY < arribaY + tamCirculo/2) {
        if(figuraY>0)
        {
          figuraY=figuraY-traslacion;
        }
      }
      if (mouseX > derX-tamCirculo/2 && mouseX < derX + tamCirculo/2 &&
        mouseY > derY-tamCirculo/2 && mouseY < derY + tamCirculo/2) {
        if(figuraX<width-1.5*anchoFigura*conversionX)
        {
          figuraX= figuraX+traslacion;
        }
      }    
      if (mouseX > abajoX-tamCirculo/2 && mouseX < abajoX + tamCirculo/2 &&
        mouseY > abajoY-tamCirculo/2 && mouseY < abajoY + tamCirculo/2) {
        if(figuraY<240*conversionY-altoFigura)
        {
          figuraY=figuraY+traslacion;
        }
      }
      if (mouseX > izqX-tamCirculo/2 && mouseX < izqX + tamCirculo/2 &&
        mouseY > izqY-tamCirculo/2 && mouseY < izqY + tamCirculo/2) {
        if(figuraX>0)
        {
          figuraX= figuraX-traslacion;
        }
      }
      //botones de seleccion (color)
      if (mouseX > xX-tamCirculo/2 && mouseX < xX + tamCirculo/2 &&
        mouseY > xY-tamCirculo/2 && mouseY < xY + tamCirculo/2) {
        selectedColor=0;
		sound.play();
		score=score+50;
      }
      if (mouseX > yX-tamCirculo/2 && mouseX < yX + tamCirculo/2 &&
        mouseY > yY-tamCirculo/2 && mouseY < yY + tamCirculo/2) {
        selectedColor=1;
		sound.play();
		score=score+50;
      }    
      if (mouseX > bX-tamCirculo/2 && mouseX < bX + tamCirculo/2 &&
        mouseY > bY-tamCirculo/2 && mouseY < bY + tamCirculo/2) {
        selectedColor=2;
		sound.play();
		score=score+50;
      }
      if (mouseX > aX-tamCirculo/2 && mouseX < aX + tamCirculo/2 &&
        mouseY > aY-tamCirculo/2 && mouseY < aY + tamCirculo/2) {
        selectedColor=3;
		sound.play();
		score=score+50;
      }
       //botones de menu (color)
      if (mouseX > startX && mouseX < startX + anchoRect &&
        mouseY > startY && mouseY < startY+altoRect) {
        pause=1;
        
      }
      if (mouseX > selectX && mouseX < selectX + anchoRect &&
        mouseY > selectY && mouseY < selectY+altoRect) {
        pause=0;
      }  
    }
      unicornio.x = figuraX;
      unicornio.y = figuraY;
  }
}
//constructores
//DINAMICOS-----------------------------------
function Star() {
  this.tamano = 10*conversionX;
  this.limiteInfX=0;
  this.limiteSupX=width-this.tamano;
  this.limiteInfY=0;
  this.limiteSupY=240*conversionY-this.tamano;
  this.x = random(this.limiteInfX, this.limiteSupX);
  this.y = random(this.limiteInfY, this.limiteSupY); 

  this.dibujarse = function() {
    		image(star,this.x,this.y,this.tamano,this.tamano);
    }
  this.nadar = function() {
    this.x = this.x - 1;

    if (this.x < this.limiteInfX) {
      this.x = width;
  		this.y = random(this.limiteInfY, this.limiteSupY); 
    }
  }
}
function Unicorn() {
  this.tamano = altoFigura;
  //el gato sale de la mitad inicialmente
  this.x = 0;
  this.y = height/2-this.tamano; 

  this.dibujarse = function() {
    image(unicorn,this.x,this.y,this.tamano,this.tamano);
    }
}
function Bear() {
  this.tamano = 40*conversionX;
  this.limiteInfX=0;
  this.limiteSupX=width-this.tamano;
  this.limiteInfY=0;
  this.limiteSupY=240*conversionY-this.tamano;
  this.x = width;
  this.y =this.limiteSupY; 

  this.dibujarse = function() {
    		image(bear,this.x,this.y,this.tamano,this.tamano);
    }
  this.nadar = function() {
    if(pause)
    {
      //no se mueven los osos
    }
    else
    {
      this.x = this.x - velocidadOsos;

      if (this.x < this.limiteInfX) {
        velocidadOsos=velocidadOsos+conversionX/4;
        this.x = random(3*width/2,width);
        this.y = random(this.limiteInfY, this.limiteSupY); 
      }
    } 
  }
}
