// Drawing with Loops and createGraphics()


let extraCanvas;

function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(width, height);
}

function draw() {
  //background(220);
  gradientBackground();
  loopCircles();
  painting();

  //extraCanvas.background(255,0,0);
  image(extraCanvas, 0,0);
}

function painting(){
  extraCanvas.fill(0, 255, 0);
  extraCanvas.square(mouseX, mouseY, 25);
}

function gradientBackground(){
  //create a gradient background using some loops
  let spacing = 15;
  noStroke();
  for(let y = height; y > -spacing; y-= spacing){
    rect(0,y,width,spacing);
    let currentColor = map(y, 0, height, 0, 255);
    fill(0,0,currentColor);  //RGBs
  }
}

function loopCircles(){
  //use a loop to draw 0 or more circles in a horizontal line
  let spacing = 40;
  let diameter = 30;
  fill(255);
  stroke(0);
  //interactive:
  spacing = map(mouseX, 0, width, 10, 50);  

  for(let x = width * 0.1; x < width * 0.9; x += spacing){
    circle(x, height/2, diameter);
  }

}


