
// Basic Transformations Sandbox


let originalSpacing = 20;
let x = 0; let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawBasicGrid(220);

  //transformation one: TRANSLATION
  // push();   //creates a new Coordinate system
  // translate(100,100);
  // rectangleRed(0,0);
  // pop();

  // rectangleBlue(0,0);


  //transformation two: SCALE
  // rectMode(CORNER);
  // rectangleRed(40,0);

  // let scaleAmount = map(mouseX, 0, width, 0.3, 6);
  // translate(200,200);
  // scale(scaleAmount);  //1- no  change  <1 smaller  >1 larger
  // drawBasicGrid(220);
  // rectMode(CENTER);
  // rectangleBlue(0,0);


  //transformation three: ROTATION
  rectMode(CENTER);
  translate(width/2, height/2);
  rotate(radians(frameCount));  // 1, 2, 3, 4, 5...

  drawBasicGrid(150);
  rectangleBlue(0,0);

  x = lerp(x,mouseX, 0.1);
  y = lerp(y,mouseY, 0.1);
  face(x,y);

  //Combinations of Transformations

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x, y);
  ellipseMode(CENTER);
  fill(200, 200, 0);
  stroke(0);
  ellipse(0, 0, 80, 80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25, 0, 10, 10);
  ellipse(25, 0, 10, 10);
  strokeWeight(5);
  line(-30, -10, 30, -10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += originalSpacing) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += originalSpacing) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5, 0, 5, 0);
  line(0, 5, 0, -5);
  strokeWeight(1);
}