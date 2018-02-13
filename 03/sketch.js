
var p11x = 243/3;
var p11y =391/3;
var p12x = 253/3;
var p12y =370/3;
var p13x = 303/3;
var p13y =397/3;
var p14x = 283/3;
var p14y =423/3;

var p21x = 263/3;
var p21y =343/3;
var p22x = 277/3;
var p22y =307/3;
var p23x = 329/3;
var p23y =357/3;
var p24x = 315/3;
var p24y =376/3;

var p31x = 253/3;
var p31y =370/3;
var p32x = 263/3;
var p32y =343/3;
var p33x = 315/3;
var p33y =376/3;
var p34x = 303/3;
var p34y =397/3;

var p41x = 216/3;
var p41y =460/3;
var p42x = 277/3;
var p42y =307/3;
var p43x = 329/3;
var p43y =357/3;
var p44x = 249/3;
var p44y =477/3;

var p51x = 124/3;
var p51y =420/3;
var p52x = 129/3;
var p52y =415/3;
var p53x = 290/3;
var p53y =500/3;
var p54x = 280/3;
var p54y =511/3;

var p61x = 216/3;
var p61y =460/3;
var p62x = 233/3;
var p62y =414/3;
var p63x = 268/3;
var p63y =447/3;
var p64x = 249/3;
var p64y =477/3;

var p71x = 233/3;
var p71y =414/3;
var p72x = 243/3;
var p72y =391/3;
var p73x = 283/3;
var p73y =423/3;
var p74x = 268/3;
var p74y =447/3;

var cx=227/3;
var cy=421/3;
var fr=1;

var pruebaRotacion=1;

var backgroundr=243;
var backgroundg=239;
var backgroundb=218;

function setup() { 
  createCanvas(980/3, 682/3);
  background(243,239,218)
} 

function draw() { 
  backgroundr=backgroundr-3;
  backgroundg=backgroundg+3;
  backgroundb=backgroundb+3;
  background(backgroundr,backgroundg,backgroundb)
  fr++;
  frameRate(fr);
  //figura 3
  p11x=p11x+3/3;
  p11y=p11y-3/3;
  p12x=p12x+3/3;
  p12y=p12y-3/3;
  p13x=p13x+3/3;
  p13y=p13y-3/3;
  p14x=p14x+3/3;
  p14y=p14y-3/3;
  //figura 5
  p21x=p21x+5/3;
  p21y=p21y-5/3;
  p22x=p22x+5/3;
  p22y=p22y-5/3;
  p23x=p23x+5/3;
  p23y=p23y-5/3;
  p24x=p24x+5/3;
  p24y=p24y-5/3;
  //figura 4
  p31x=p31x+4/3;
  p31y=p31y-4/3;
  p32x=p32x+4/3;
  p32y=p32y-4/3;
  p33x=p33x+4/3;
  p33y=p33y-4/3;
  p34x=p34x+4/3;
  p34y=p34y-4/3;
  
  //contenedor
  
  p41x=p41x-3/3;
  p41y=p41y+3/3;
  p42x=p42x-3/3;
  p42y=p42y+3/3;
  p43x=p43x-3/3;
  p43y=p43y+3/3;
  p44x=p44x-3/3;
  p44y=p44y+3/3;
  
  //base
  
  p51x=p51x-3/3;
  p51y=p51y+3/3;
  p52x=p52x-3/3;
  p52y=p52y+3/3;
  p53x=p53x-3/3;
  p53y=p53y+3/3;
  p54x=p54x-3/3;
  p54y=p54y+3/3;
  
  
	//figura 1
  p61x=p61x+1/3;
  p61y=p61y-1/3;
  p62x=p62x+1/3;
  p62y=p62y-1/3;
  p63x=p63x+1/3;
  p63y=p63y-1/3;
  p64x=p64x+1/3;
  p64y=p64y-1/3;
  
  //figura 2
  p71x=p71x+2/3;
  p71y=p71y-2/3;
  p72x=p72x+2/3;
  p72y=p72y-2/3;
  p73x=p73x+2/3;
  p73y=p73y-2/3;
  p74x=p74x+2/3;
  p74y=p74y-2/3;
  
  
  cx=cx-3/3;
  cy=cy+3/3;
  /*
  cx++;
  cy--;
  */
  pruebaRotacion++;
  
  strokeWeight(4/3);//Tamaño pincel
  stroke(8,6,9);			//Color pincel	
  //base					
	fill(8,6,9)					//Color relleno
	beginShape();
  vertex(p51x,p51y);
	vertex(p52x,p52y);
	vertex(p53x,p53y);
	vertex(p54x,p54y);
	endShape(CLOSE);
	//cuadro 1
	fill(130,80,22)					//Color relleno
	beginShape();
	vertex(p61x,p61y);
	vertex(p62x,p62y);
	vertex(p63x,p63y);
	vertex(p64x,p64y);
	endShape(CLOSE);
  //cuadro 2
	fill(244,218,228)					//Color relleno
	beginShape();
	vertex(p71x,p71y);
	vertex(p72x,p72y);
	vertex(p73x,p73y);
	vertex(p74x,p74y);
	endShape(CLOSE);
  
  //cuadro 3
	fill(62,100,25)					//Color relleno
	beginShape();
	vertex(p11x,p11y);
	vertex(p12x,p12y);
	vertex(p13x,p13y);
	vertex(p14x,p14y);
	endShape(CLOSE);
  //cuadro 4
	fill(224,211,210)					//Color relleno
	beginShape();
	vertex(p21x,p21y);
	vertex(p22x,p22y);
	vertex(p23x,p23y);
	vertex(p24x,p24y);
	endShape(CLOSE);
  //cuadro 5
	fill(9,9,9)					//Color relleno
	beginShape();
	vertex(p31x,p31y);
	vertex(p32x,p32y);
	vertex(p33x,p33y);
	vertex(p34x,p34y);
	endShape(CLOSE);
  
  //contorno
  noFill();  
  beginShape();
  vertex(p41x,p41y);
  vertex(p42x,p42y);
  vertex(p43x,p43y);
  vertex(p44x,p44y);
  endShape(CLOSE);
  
  //Arco
  strokeWeight(2/3);
  arc(cx, cy, 80/3, 80/3,pruebaRotacion+ HALF_PI, 2*PI-HALF_PI+pruebaRotacion, OPEN);
  
  /*
  if(frameCount <71)
  {
    saveCanvas("miFlipbook" + frameCount+".png", 'png');
  }
  */
  /*
  if(fr>=70)
  {fill(9,9,9)	
    beginShape();
  vertex(216/3,460/3);
	vertex(233/3,414/3);
	vertex(268/3,447/3);
	vertex(249/3,477/3);
	endShape(CLOSE);
  }
  */
  
  
}