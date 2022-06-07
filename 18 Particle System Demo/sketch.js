// Particle System Demo
// Mr. Scott
// June 7, 2022
// A system of behaviour for many objects

//global variables
let spiralImages = [];
let spirals = [];

function preload(){
  for (let i = 0; i < 16; i++){
    if(i <10){   //single digit
      spiralImages.push(loadImage("assets/Circle/Circle Animation0"+i+".png"));
    }
    else{   //2-digit
      spiralImages.push(loadImage("assets/Circle/Circle Animation"+i+".png"));
    }
  }
}

function mousePressed(){
  //to simulate a target being hit:
  spirals.push(new Spiral(mouseX, mouseY));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  //SPIRALS SECTION
  for(let i = 0; i < spirals.length; i++){
    let s = spirals[i];
    s.display();
    //check if it's time to remove:
    
  }
}

class Spiral{
  //constructor
  constructor(x,y){
    this.pos = createVector(x,y);
    this.currentFrame = 0;  //0 - 15
    this.active = true;
  }

  //class methods
  display(){
    if(this.currentFrame > 15){ //indicates animation is over
      this.active = false;  //time to remove the object
    }
    else{  //implies we haven't reached the end of the animation
      image(spiralImages[this.currentFrame], this.pos.x, this.pos.y);
      if(frameCount % 4 === 0){
        this.currentFrame++;
      }
    }
  }

}

