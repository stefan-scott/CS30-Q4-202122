// Objects Demo One
// Mr. Scott   May 17, 2022
// A first look at Object-Oriented Programming (OOP)

let myWalker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let col = color(random(255) , random(255), random(255));
  myWalker = new Walker(random(width), random(height), col);
  background(0);
}

function draw() {
  
  myWalker.move();
  myWalker.display();

}



class Walker{

  //class Constructor and Properties
  constructor(x, y, c){
    this.x = x;     //this.something → property global for the class
    this.y = y;
    this.c = c;
    this.speed = 10;
    this.size = 5;
  }

  //class methods/functions
  display(){  //display walker at its current location
    rectMode(CENTER);
    fill(this.c);
    rect(this.x, this.y, this.size, this.size);
  }

  move(){
    //option one - regular random walk
    this.moveRandom();
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