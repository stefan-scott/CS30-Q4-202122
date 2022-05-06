// Pickupable Primitives
// Mr. Scott
// May 6th, 2022
// Simple Application of mouse-movable (pickupable) shapes

//Global Variable Declarations
let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2;  y = height/2;
  rWidth = 200;  rHeight = 100;
}

function draw() {
  background(220);
  drawRectangle();
}

function drawRectangle(){
  //render the rectangle and also checks for mouse interactions

  rect(x, y, rWidth, rHeight);

}

