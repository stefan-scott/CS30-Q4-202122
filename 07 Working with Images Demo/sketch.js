// Working with Images Demo 
// Mr. Scott
// May 11, 2022
// Loading and Using still images and animation frames

let lionL, lionR;
let facingLeft = true;

let pinImages = [];
let currentFrame = 0;

function preload() {
  //use to ensure all our assets are loaded before carrying on
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  for (let i = 0; i < 9; i++) {
    pinImages[i] = loadImage("assets/pin-0" + i + ".png");
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //frameRate(5);
}

function draw() { //60FPS 
  //one time through draw = one screen refresh
  background(255);
  drawPin();
  drawLion();
}

function drawPin() {
  //animate by cycling through our 9 pin Images.
  image(pinImages[currentFrame], width / 2, height / 2);

  if (frameCount % 14 === 0) {
    
    currentFrame++;  //advance to next images
    if (currentFrame > pinImages.length - 1) currentFrame = 0;
  }
}







function drawLion() {
  //draw a lion facing the last direction of the mouse cursor.
  if (movedX < 0) { facingLeft = true; }
  else if (movedX > 0) { facingLeft = false; }

  if (facingLeft) {
    image(lionL, mouseX, mouseY, lionL.width / 2, lionL.height / 2);
  }
  else {
    image(lionR, mouseX, mouseY, lionR.width / 2, lionR.height / 2);
  }
  print(movedX);
}
