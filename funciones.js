  let piso, fondo;
  let img, img1, img2, img3, img4, img5, img6;
  let c1, c2;
  let dispara1, dispara2, dispara3, dispara4;
  let x1 = 1;
  let x2 = 6;
  let x3 = 5;
  let k1 = 260;

function preload() {
  piso = loadImage("img/rizomitas.png");
  img = loadImage('img/IA.png'); 
  img1 = loadImage('img/img1.png');
  img2 = loadImage('img/img5.png');
  img3 = loadImage('img/manos.png');
  img4 = loadImage('img/neurona.png');
  img5 = loadImage('img/img2.png');
  img6 = loadImage('img/img3.png');
  dispara1= loadImage('img/dispara1.png');
  dispara2= loadImage('img/dispara2.png');
  dispara3= loadImage('img/dispara3.png');
  dispara4= loadImage('img/dispara4.png');
  fondo = loadSound("img/fondo.mp3");
}

function arteinter(c1, c2) {
  stroke(0);
  push();
    rotateY(x1 * frameCount * 0.01);
    rotateZ(x1 * frameCount * 0.01);
    texture(img);
    box(c1);
  pop();
  
  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, 0, -k1 * sin(x3 * frameCount * 0.001));
    texture(img1);
    box(c2);
  pop();

  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, 0, k1 * sin(x3 * frameCount * 0.001));
    texture(img2);
    box(c2);
  pop();
  
  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, -k1 * sin(x3 * frameCount * 0.001), 0);
    texture(img3);
    box(c2);
  pop();
 
  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, k1 * sin(x3 * frameCount * 0.001), 0);
    texture(img4);
    box(c2);
  pop();
  
  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(-k1 * sin(x3 * frameCount * 0.001), 0, 0);
    texture(img5);
    box(c2);
  pop();
  
  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(k1 * sin(x3 * frameCount * 0.001), 0, 0);
    texture(img6);
    box(c2);
  pop();
  
}
function firstPerson(cam){
  cam.firstPersonState = cam.firstPersonState || {
    azimuth: -atan2(cam.eyeZ - cam.centerZ, cam.eyeX - cam.centerX),
    zenith: -atan2(cam.eyeY - cam.centerY, dist(cam.eyeX, cam.eyeZ, cam.centerX, cam.centerZ)),
    lookAtDist: dist(cam.eyeX, cam.eyeY, cam.eyeZ, cam.centerX, cam.centerY, cam.centerZ),
    mousePrevX: mouseX,
    mousePrevY: mouseY
  }
  
  // Look around controls
  cam.firstPersonState.azimuth -= (mouseX - cam.firstPersonState.mousePrevX) / 100;
  if(abs(cam.firstPersonState.zenith + (mouseY - cam.firstPersonState.mousePrevY) / 100) < PI/2) cam.firstPersonState.zenith += (mouseY - cam.firstPersonState.mousePrevY) / 100;
  
  // Movement controls
  if(keyIsPressed && keyCode == 87 || keyIsDown(UP_ARROW)){
    cam.eyeX -= 12 * cos(cam.firstPersonState.azimuth)
    cam.eyeZ += 12 * sin(cam.firstPersonState.azimuth)
  }
  if(keyIsPressed && keyCode == 83 || keyIsDown(DOWN_ARROW)){
    cam.eyeX += 12 * cos(cam.firstPersonState.azimuth)
    cam.eyeZ -= 12 * sin(cam.firstPersonState.azimuth)
  }
  if(keyIsPressed && keyCode == 65 || keyIsDown(LEFT_ARROW)){
    cam.eyeX -= 12 * cos(cam.firstPersonState.azimuth + PI/2)
    cam.eyeZ += 12 * sin(cam.firstPersonState.azimuth + PI/2)
  }
  if(keyIsPressed && keyCode == 68 || keyIsDown(RIGHT_ARROW)){
    cam.eyeX += 12 * cos(cam.firstPersonState.azimuth + PI/2)
    cam.eyeZ -= 12 * sin(cam.firstPersonState.azimuth + PI/2)
  }
  
  // Update previous mouse position
  cam.firstPersonState.mousePrevX = mouseX;
  cam.firstPersonState.mousePrevY = mouseY;
  
  // Update the look-at point
  cam.centerX = cam.eyeX - cam.firstPersonState.lookAtDist * cos(cam.firstPersonState.zenith) * cos(cam.firstPersonState.azimuth);
  cam.centerY = cam.eyeY + cam.firstPersonState.lookAtDist * sin(cam.firstPersonState.zenith);
  cam.centerZ = cam.eyeZ + cam.firstPersonState.lookAtDist * cos(cam.firstPersonState.zenith) * sin(cam.firstPersonState.azimuth);
  
  // Call the built in p5 function 'camera' to position and orient the camera
  camera(cam.eyeX, cam.eyeY, cam.eyeZ,  // position
         cam.centerX, cam.centerY, cam.centerZ,  // look-at
         0, 1, 0)  // up vector
}
