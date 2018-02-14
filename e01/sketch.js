var posx=20;
var dir=1;
var fr=60;
var cambiofr=5;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  frameRate(fr);
  background(220,50,posx);
  rect(posx,200,30,30);
  
  if(posx>width-30||posx<0)
  {
    dir = -dir;
  }
  
  if(posx<width/4)
  {
    posx=posx+15*dir;
  }
  else if(posx>3*width/4)
  {
    posx=posx+2*dir;
  }
  else
  {
     posx=posx+5*dir;
  }
  // la tarea es 70, no 3
  /*
  if(frameCount <3)
  {
    saveCanvas("miFlipbook" + frameCount, 'jpg');
  }
  */
  
}