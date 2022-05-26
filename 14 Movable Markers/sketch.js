// Movable Markers + Voronoi Diagram
// Mr. Scott
// May 26, 2022
// for a map placement problem...


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}


class MovableMarker{
  //something like a pin that can be placed/moved on a map

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.offX = 0; this.offY = 0; //for when dragging not from center
    this.baseColor = color(0, 255, 0);
    this.hoverColor = color(0, 180, 0);
    this.beingDragged = false;
    this.radius = 7;
    this.diameter = this.radius * 2;
  }

  //class Methods()
  move(){

  }


  display(){
    fill(this.baseColor);
    circle(this.x, this.y, this.diameter);
  }



  mouseIsOver(){

  }


}



















