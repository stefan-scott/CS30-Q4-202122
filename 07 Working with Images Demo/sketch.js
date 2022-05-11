// Working with Images Demo 
// Mr. Scott
// May 11, 2022
// Loading and Using still images and animation frames

let lionL, lionR;
let facingLeft = true;

function preload(){
  //use to ensure all our assets are loaded before carrying on
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255);
  drawLion();
}

function drawLion(){
  //draw a lion facing the last direction of the mouse cursor.
  if (movedX < 0) { facingLeft = true;}
  else if (movedX > 0){ facingLeft = false;}

  if(facingLeft){
    image(lionL, mouseX, mouseY, lionL.width / 2 , lionL.height /2);
  }
  else{
    image(lionR, mouseX, mouseY, lionR.width / 2 , lionR.height /2);
  }
  print(movedX);
}
