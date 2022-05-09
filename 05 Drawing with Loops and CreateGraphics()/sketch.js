// Drawing with Loops and createGraphics()


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  loopCircles();
}

function loopCircles(){
  //use a loop to draw 0 or more circles in a horizontal line
  let spacing = 40;
  let diameter = 30;

  for(let x = width * 0.1; x < width * 0.9; x += spacing){
    circle(x, height/2, diameter);
  }

}


