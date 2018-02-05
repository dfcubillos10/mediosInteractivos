function setup() { 
  createCanvas(1000,1000);
  var Color1r=165;
  var Color1g=148;
  var Color1b=130;
  
  var Color2r=90;
  var Color2g=50;
  var Color2b=34;
  
  var Color3r=211;
  var Color3g=191;
  var Color3b=169;
  
  var Color4r=169;
  var Color4g=71;
  var Color4b=50;
  
  var r=Color1r;
  var g=Color1g;
  var b=Color1b;  
  
  background(Color3r,Color3g,Color3b);
  var i=10;
  var j=70;
  
  for(var i=10;i<14;i++)
  {
    for(var j=70;j<82;j++)
    {
      
       if(i%2==0)
      {
        if(j%2==0)
      	{
      	  r=Color2r;
        	g=Color2g;
        	b=Color2b;
      	}
        else
      	{
      	  r=Color1r;
        	g=Color1g;
        	b=Color1b;
      	}
         fill(r,g,b);
      	 rect(i*40,j*10,40,10);  
      }
    else
       {
          if(j%2==0)
      	{
      	  r=Color4r;
        	g=Color4g;
        	b=Color4b;
      	}
        else
      	{
      	  r=Color3r;
        	g=Color3g;
        	b=Color3b;
      	}
          fill(r,g,b);
      		rect(i*40,j*10,40,10);  
      }
      
    }
   	
  }
  fill(36,32,31)
  rect(9*40,820,240,10);
  
  rect(9*40,760,40,5);
  rect(9.5*40,700,5,120);
  
  rect(14*40,760,40,5);
  rect(14.5*40,700,5,120);
  
} 
