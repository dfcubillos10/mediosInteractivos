//variables imagenes
var cat;
var box;
var catnip;
var fish;
var mouse;
var fondo;
var dog;

//variables objetos;
var gato;
var caja;
var hierba;
var pez;
var raton;
var perro;
var misPeces = [];

function preload()
{
  cat=loadImage("assets/cat.png");
  box=loadImage("assets/box.png");
  catnip=loadImage("assets/catnip.png");
  fish=loadImage("assets/fish.png");
  mouse=loadImage("assets/mouse.png");
  fondo=loadImage("assets/fondo.png");
  dog=loadImage("assets/dog.png");
  
}

function setup() {
  createCanvas(400, 400);
  background(fondo);
  hierba = new Catnip();
  raton = new Mouse();
  perro = new Dog();
  caja= new Box();
  pez = new Fish();
  gato = new Cat();
  //inicializa los peces
  for (var i = 0; i < 10; i = i + 1) {
    misPeces[i] = new Fish();
  }
}

//main
function draw() {  
  background(fondo);
  raton.dibujarse();
  perro.dibujarse();
  hierba.dibujarse();
  caja.dibujarse();
  pez.dibujarse();
  gato.dibujarse();
  //peces nadando
  for (var i = 0; i < misPeces.length; i = i + 1) {
    misPeces[i].dibujarse();
    misPeces[i].nadar();
  }
  //movimiento del gato
  if (mouseIsPressed == true) {
    gato.x = mouseX-75/2;
    gato.y = mouseY-75/2;
  }
  
  //comportamientos de las especies
  //el raton huye del gato si lo alcanza
  if (dist(gato.x, gato.y, raton.x, raton.y) < raton.tamano) {
    raton.huir();
  }
  //el gato se altera si come catnip
  if (dist(gato.x, gato.y, hierba.x, hierba.y) < hierba.tamano) {
    gato.asustarse();
  }
  //el gato vuelve a su caja si se encuentra con el perro
  if (dist(gato.x-gato.tamano, gato.y, perro.x, perro.y) < pez.tamano) {
    gato.respawn();
  }
  for (var i = 0; i < misPeces.length; i = i + 1) {
    if (dist(gato.x, gato.y, misPeces[i].x, misPeces[i].y) < misPeces[i].tamano) {
    gato.calmarse();
    misPeces[i].morirse();
  }
}
  
  //si esta asustado el gato tiembla, no lo hace de lo contrario
  gato.moverse();
}

//constructores
//ESTATICOS-----------------------------------

function Dog() {
  this.tamano = 150;
  this.x = random(0, width-this.tamano);
  this.y = random(296, height-this.tamano); 
  
	//el perro esta quieto descansando
  this.dibujarse = function() {
    image(dog,this.x,this.y,this.tamano,this.tamano);
    }
}

function Catnip() {
  this.tamano = 50;
  this.x = random(330, width-this.tamano);
  this.y = random(195, 255); 
  
	//el perro esta quieto descansando
  this.dibujarse = function() {
    image(catnip,this.x,this.y,this.tamano,this.tamano);
    }
}

function Box() {
  this.tamano = 50;
  this.x = 0;
  this.y = height-this.tamano; 
  
	//el perro esta quieto descansando
  this.dibujarse = function() {
    image(box,this.x,this.y,this.tamano,this.tamano);
    }
}
//DINAMICOS-----------------------------------
function Mouse() {
  this.tamano = 50;
  this.x = random(0, width-this.tamano);
  this.y = random(296, height-this.tamano); 

  this.dibujarse = function() {
    image(mouse,this.x,this.y,this.tamano,this.tamano);
    }

  //el raton huye 
  this.huir = function() {
    this.x = random(0, width-this.tamano);
    //limite del piso
    this.y = random(296, height-this.tamano); 
  }
}

function Fish() {
  this.tamano = 50;
  this.limiteInfX=115;
  this.limiteSupX=300-this.tamano;
  this.limiteInfY=150;
  this.limiteSupY=165-2.5*this.tamano;
  this.x = random(this.limiteInfX, this.limiteSupX);
  this.y = random(this.limiteInfY, this.limiteSupY); 
  
  this.vivo = 1;

  this.dibujarse = function() {
    if (this.vivo==1)
    	{
    		image(fish,this.x,this.y,this.tamano,this.tamano);
    	}
    }
  this.morirse = function() {
    this.vivo = 0;
  }
  this.nadar = function() {
    this.x = this.x + 1;

    if (this.x > this.limiteSupX) {
      this.x = random(this.limiteInfX, this.limiteSupX);
  		this.y = random(this.limiteInfY, this.limiteSupY); 
    }
  }
}

function Cat() {
  this.tamano = 75;
  //el gato sale de la caja inicialmente
  this.x = 0;
  this.y = height-this.tamano; 
  this.triggered=0;

  this.dibujarse = function() {
    image(cat,this.x,this.y,this.tamano,this.tamano);
    }

  //el gato vuelve al origen
  this.respawn = function() {
    this.x = 0;
  	this.y = height-this.tamano;  
  }
  
  this.moverse = function() {
    //si el gato esta asustado
    if(this.triggered==1)
    {
    	this.x = this.x+random(-1, 1);
    	this.y = this.y+random(-1, 1);
    }
  }
  //el gato se calma
  this.calmarse = function() {
    this.triggered=0;   
  }
  //el gato se asusta
  this.asustarse = function() {
    this.triggered=1;   
  }
}