var imgUnicornio;
function preload() {
  // Datos locales
  //datos = loadJSON("assets/astro.json");
  // Datos externos
  datos = loadJSON("http://api.open-notify.org/astros.json");
  
  imgAstro = loadImage("assets/unicorn.jpg");
}
function setup() {
  createCanvas(400, 400);
  background(255, 255, 255);
  
  var cuantos = datos.number;
  
  for (var i = 0; i < cuantos; i = i + 1){
    //ellipse(random(0, width), random(0, height), 20, 20);
    var _x = random(0, width);
    var _y = random(0, height);
    image(imgAstro, _x, _y, 50, 50);
    fill(0,0,0);
    var nombre = datos.people[i].craft;
    text(nombre, _x, _y);
  }

}

function draw() {
  
}