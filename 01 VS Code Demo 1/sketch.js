// Interactive Scene
// Mr. Scott
//  April 29, 2022
//
// A wintery scene where the user can interact with a snowman
// and a cottage.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);
  circle(mouseX, height / 2, 100);
  print(frameCount);

  circle(2, 2, 5);
  circle(2, 2, 5);
  if (true) {
    print("oh no");
  }
}

function keyPressed() {
  background(255, 200, 150);
}
