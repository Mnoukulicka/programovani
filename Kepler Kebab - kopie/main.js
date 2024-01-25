let grav = 1
class Circle{
 constructor(x, y, size){
    this.BposB = createVector(x, y);
    this.spee = createVector()
    this.speedin = createVector()
   this.size = size
    textSize = size
 }

 draw(){
  fill(12)
  text("B", this.BposB.x, this.BposB.y)
    
 }

  update(){
   
    this.speedin.add(0, grav)
    this.spee.add(this.speedin)
    this.spee.mult(0.999)
    if (this.BposB.y > height-5) this.spee.mult(-0.99)
    this.BposB.add(this.spee)
  
    this.speedin.mult(0)
}
}
var CIRCLER = []
function setup () {
  createCanvas(600, 700)
  background(200)
  for(i = 0; i<2000; i ++){
    let circler = new Circle(random(width), random(height), random(2, 25))
    CIRCLER.push(circler)
 }
}
function draw () {
  background(220)
 for(i = 0; i<100; i ++){
    print("B")

 }
  for(let circle of CIRCLER) circle.draw()
  for(let circle of CIRCLER) circle.update()
}