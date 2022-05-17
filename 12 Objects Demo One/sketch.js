// Objects Demo One
// Mr. Scott   May 17, 2022
// A first look at Object-Oriented Programming (OOP)

//let myWalker;
const NUM_WALKERS = 110;
let walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let col = color(random(255) , random(255), random(255));
  //myWalker = new Walker(random(width), random(height), col);
  background(0);

  for(let i = 0; i < NUM_WALKERS ; i++){
    let col = color(random(255) , random(255), random(255));
    walkers.push(new Walker(random(width), random(height), col));
  }

}

function draw() {
  
  //myWalker.move();
  //myWalker.display();

  //process (move/display all walkers)
  for(let i = 0; i < walkers.length; i++){
    walkers[i].move();
    walkers[i].display();
  }


}



class Walker{

  //class Constructor and Properties
  constructor(x, y, c){
    this.x = x;     //this.something → property global for the class
    this.y = y;
    this.c = c;
    this.speed = 10;
    this.size = 5;
    this.type = 1;//Math.floor(random(2));  //0 or 1
    //0 → random walk movement     1 → perlin movement
    this.timeX = random(999);
    this.timeY = random(999);
    this.inc = 0.1;  //how related are subsequent noise() random values
  }

  //class methods/functions
  display(){  //display walker at its current location
    rectMode(CENTER);
    fill(this.c);
    rect(this.x, this.y, this.size, this.size);
  }

  move(){
    //option one - regular random walk
    if(this.type === 0) {this.moveRandom();}
    else { this.movePerlin(); }
  }

  movePerlin(){
    //move using noise()
    this.x += map(noise(this.timeX),0,1,-this.speed, this.speed);
    this.y += map(noise(this.timeY),0,1,-this.speed, this.speed);

    this.timeX += this.inc;
    this.timeY += this.inc;
  }

  moveRandom(){
    // equally likely chance to move → ← ↓ ↑ 
    let choice = Math.floor(random(4));

    if(choice === 0) { this.x -= this.speed; }  //LEFT
    else if(choice === 1) { this.x += this.speed; }  //RIGHT
    else if(choice === 2) { this.y -= this.speed; } //UP
    else { this.y += this.speed; } //DOWN
  }




}