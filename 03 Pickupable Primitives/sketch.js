// Pickupable Primitives
// Mr. Scott
// May 6th, 2022
// Simple Application of mouse-movable (pickupable) shapes

//Global Variable Declarations
let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let mouseOver = false;  let pickedUp = false;
let xOff, yOff;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width / 2; y = height / 2;
  rWidth = 200; rHeight = 100;
}

function draw() {
  background(220);
  updateEdgePositions();
  drawRectangle();

  print(mouseOver + " " + pickedUp + " " + x + " " + y + " " + rLeft + " " + rRight + " " + rTop + " " + rBottom);
}

function drawRectangle() {
  //render the rectangle and also checks for mouse interactions
  if (mouseX < rRight && mouseX > rLeft && mouseY > rTop && mouseY < rBottom) {
    fill(220,10,255);
    mouseOver = true;  
  }
  else{
    fill(255);
    mouseOver = false;
  }
  if(pickedUp){
    x = mouseX - xOff;
    y = mouseY - yOff;   
  }

  rect(x, y, rWidth, rHeight);
}

function updateEdgePositions() {
  //update the left/right/top/bottom variables for our rectangle;
  rLeft = x - rWidth / 2;
  rRight = x + rWidth / 2;
  rTop = y - rHeight / 2;
  rBottom = y + rHeight / 2;
}

function mousePressed(){
  ///triggers on initial mouseDown
  if(mouseOver){
    pickedUp = true;
    xOff = mouseX - x;
    yOff = mouseY - y;
  }
}

function mouseReleased(){
  //triggers when a pressed mouse button is released
  pickedUp = false;
}

