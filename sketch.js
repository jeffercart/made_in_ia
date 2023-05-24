let pagina;

function setup() {
  createCanvas(1000, 800, WEBGL);
  cam1 = createCamera();
  noCursor();
    if (frameCount < 2) {
    fondo.setVolume(0.08);
    fondo.loop();
    }
  pagina=0;
  canvas = document.querySelector('canvas');
  canvas.addEventListener('contextmenu', botonDerecho);
  
}

function draw() {
  background(0);
  firstPerson(cam1);
  push()

  for(let i=-500; i<=500; i+=500){
    for(let a=-250; a<=250; a+=500){
  push();
  noStroke();
  texture(piso);
  translate(a, 200, i);
  rotateX(PI / 2);
  plane(500);
  pop();
  }
  }
  pop();
 
  push();
  translate (0, -300, -1400);
  cubos();
  pop();
  
  push();
  translate (0, -300, 1400);
  rotateY(PI);
  cubos();
  pop();
  
  if (mouseIsPressed== true && mouseButton ==LEFT) {
  push();
  noStroke();
  texture(dispara1);
  translate(-500, -100, 500);
  rotateY(PI/2);
  plane(400);
  pop();

  push();
  noStroke();
  texture(dispara2);
  translate(500, -100, 500);
  rotateY(-PI/2);
  plane(400);
  pop();

  push();
  noStroke();
  texture(dispara3);
  translate(500, -100, -500);
  rotateY(-PI/2);
  plane(400);
  pop();
  
  push();
  noStroke();
  texture(dispara4);
  translate(-500, -100, -500);
  rotateY(PI/2);
  plane(400);
  pop();
  }
}
 
function cubos(){
  push();
  translate(0, 0, 100);
  arteinter(50, 80);
  pop();
 
  push();
  translate(300, 250, -450);
  arteinter(50, 80);
  pop();

  push();
  translate(300, -250, -450);
  arteinter(50, 80);
  pop();

  push();
  translate(-300, -250, -450);
  arteinter(50, 80);
  pop();

  push();
  translate(-300, 250, -450);
  arteinter(50, 80);
  pop();

  push();
  translate(-700, 0, -1250);
  arteinter(50, 80);
  pop();

  push();
  translate(700, 0, -1250);
  arteinter(50, 80);
  pop();
  
  if (frameCount > 600) {
    if      (pagina == 1){
                window.open("https://editor.p5js.org/diazmaximo2a/full/VlcijYGm3", "_top");} //galeria
    else if (pagina == 2){
               window.open("https://editor.p5js.org/diazmaximo2a/full/INBSoXB8O", "_top");} //audio
    else if (pagina == 3) {
               window.open("https://editor.p5js.org/diazmaximo2a/full/sHf8YxOjK", "_top");}//ojos
    }

}

function botonDerecho(event) {
  // Evitar que aparezca el menú contextual del botón derecho del mouse
  event.preventDefault();

  // Acciones a realizar cuando se hace clic con el botón derecho
  pagina = floor(random(4));
}
