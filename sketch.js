function setup() { 
  createCanvas(980, 682);	//Tamaño sketch
	background(243,239,218);	//Color fondo
	
  strokeWeight(4);//Tamaño pincel
  stroke(8,6,9);			//Color pincel	
  //base					
	fill(8,6,9)					//Color relleno
	beginShape();
	vertex(124,420);
  vertex(129,415);
	vertex(290,500);	
	vertex(280,511); endShape(CLOSE);
	//cuadro 1
	fill(130,80,22)					//Color relleno
	beginShape();
	vertex(216,460);
	vertex(233,414);
	vertex(268,447);
	vertex(249,477);
	endShape(CLOSE);
  //cuadro 2
	fill(244,218,228)					//Color relleno
	beginShape();
	vertex(233,414);
	vertex(243,391);
	vertex(283,423);
	vertex(268,447);
	endShape(CLOSE);
  //cuadro 3
	fill(62,100,25)					//Color relleno
	beginShape();
	vertex(243,391);
	vertex(253,370);
	vertex(303,397);
	vertex(283,423);
	endShape(CLOSE);
  //cuadro 4
	fill(224,211,210)					//Color relleno
	beginShape();
	vertex(253,370);
	vertex(263,343);
	vertex(315,376);
	vertex(303,397);
	endShape(CLOSE);
  //cuadro 5
	fill(9,9,9)					//Color relleno
	beginShape();
	vertex(263,343);
	vertex(277,307);
	vertex(329,357);
	vertex(315,376);
	endShape(CLOSE);
  
  //contorno
  noFill();  
  beginShape();
  vertex(216,460);
  vertex(277,307);
  vertex(329,357);
  vertex(249,477);
  endShape(CLOSE);
  
  //Arco
  strokeWeight(2);
  arc(227, 421, 80, 80,0.5+ HALF_PI, 2*PI-HALF_PI+0.5, OPEN);
  
	
	
}