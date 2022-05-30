// Objects and Forces
// Mr. Scott
// May 27, 2022
// Using Vectors for modeling motion


let particles = [];
let grav;
let myWind;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grav = createVector(0, 0.1 );
  let windForce = createVector(0,-0.2);
  myWind = new WindZone(width * 0.3, width * 0.6, windForce);
}

function mousePressed(){
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(220);
  myWind.runWind();

  for(let p of particles){
    p.applyForce(grav);
    //maybe apply the wind force...
    if(p.isInsideWind(myWind)){
      p.applyForce(myWind.force);
    }
    p.move();
    p.display();
  }
}


class Particle{
  //constructor
  constructor(x, y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(3,5), random(-2,0));
    this.accel = createVector(0,0);
  }

  //class methods

  isInsideWind(w){
    //w → WindZone object
    if(this.pos.x >= w.startX && this.pos.x <= w.endX){
      return true;
    }
    else {
      return false;
    }
  }

  applyForce(f){
    //f → vector of a force to be applied on the current frame
    this.accel.add(f);
  }

  display(){
    circle(this.pos.x, this.pos.y, 30);
  }

  move(){
    this.vel.add(this.accel);
    this.pos.add(this.vel);
    this.accel.mult(0); //accel.x *= 0  accel.y *= 0
  }

 

}

class WindLine{
  constructor(x){
    this.pos = createVector(x, random(height));
    this.vel = createVector(0, random(-2, -0.5));
    this.len = random(4,15);
  }

  //class methods
  move(){
    this.pos.add(this.vel);
    if(this.pos.y < 0){
      //gone off top of screen, so wrap around
      this.pos.y = height;
    }
  }

  display(){
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - this.len);
  }

}


class WindZone{

  constructor(startX, endX, f){
    this.startX = startX;
    this.endX = endX;
    this.force = f;
    this.windLines = [];
    this.NUM_LINES = 100;
    this.initWind();
  }

  //class methods
  initWind(){
    for(let i = 0; i < this.NUM_LINES; i++){
      this.windLines.push(new WindLine(random(this.startX, this.endX)));
    }
  }

  runWind(){
    for(let w of this.windLines){
      w.move();
      w.display();
    }

  }
}















