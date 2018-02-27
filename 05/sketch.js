var ano;
var mes;
var dia;

var hora;
var minuto;
var segundo;

var segundoMapeado;
var minutoMapeado;
var horaMapeada;

var tiempoPsic;
function setup() {
createCanvas(400, 400);
angleMode(DEGREES);

}

function draw() {
background(220);
tiempoPsic=10;
  
ano = year();
mes = month();
dia = day();

hora = hour();
minuto = minute();
segundo = second();
translate(width/4, height/4);
ellipse(0,0,125,125);
text("12",0,-50);
text("3",55,0);
text("6",0,55);
text("9",-55,0);

push();
segundoMapeado = map(segundo,0,59,0,359);
stroke(255, 0, 0);
rotate(segundoMapeado);
//seg
line(0,0,0,-50);
stroke(0, 0, 0);
pop();
//min  
push();
minutoMapeado = map(minuto,0,59,0,359);
rotate(minutoMapeado);
  line(0,0,0,-50);
pop();
//hora
push();
horaMapeada = map(hora,0,59,0,359);
rotate(horaMapeada);
  line(0,0,0,-75/2);
pop();

//reloj 2
translate(width/2, height/2);
ellipse(0,0,125,125);
text("12",0,-50);
text("3",55,0);
text("6",0,55);
text("9",-55,0);

push();
segundoMapeado = map(segundo,0,59,0,359);
stroke(255, 0, 0);
rotate(segundoMapeado*tiempoPsic);
//seg
line(0,0,0,-50);
stroke(0, 0, 0);
pop();
//min  
push();
minutoMapeado = map(minuto+segundoMapeado,0,59,0,359);
rotate(minutoMapeado);
  line(0,0,0,-50);
pop();
//hora
push();
horaMapeada = map(hora+segundoMapeado/2,0,59,0,359);
rotate(horaMapeada);
  line(0,0,0,-75/2);
pop();
}
