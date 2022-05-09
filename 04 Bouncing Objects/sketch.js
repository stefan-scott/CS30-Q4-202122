// Demo 04 - Bouncing Objects
// Make a few primites bounce around the screen

let circleX, circleY;
let circleXSpeed, circleYSpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width / 2;
  circleY = height / 2;
  circleXSpeed = random(-3,3);
  circleYSpeed = random(-3,3);

}

function draw() {
  background(255);

  fill(0, 200, 200);

  //movement
  circleX += circleXSpeed;
  circleY += circleYSpeed;

  //bounce?
  if(circleY <= 0 || circleY >= height){
    circleYSpeed = circleYSpeed * -1;  //circleYSpeed *= -1;
  }

  //wrap-around (x)
  if(circleX <= 0){
    circleX += width;
  }
  else if (circleX >= width){
    circleX -= width;  //circleX = circleX - width;
  }

  //draw
  circle(circleX, circleY, 30);

}
