
class Circle{
 constructor(x, y, size){
    this.BposB = createVector(x, y);
    size = this.size
 }

 draw(){
    fill(252)
    text("B", this.BposB.x, this.BposB.y, size)

 }
}
var CIRCLER = []
function setup () {
    var circlerx = 0
    var circlery = 0
  createCanvas(400, 400)
  background(51)
  for(i = 0; i<100; i ++){
    circlerx ++
    circlery ++
    let circler = new Circle(random(width), random(height), random(1, 20))
    CIRCLER.push(circler)
 }
}
function draw () {
 for(i = 0; i<100; i ++){
    print("B")

 }
  for(let circle of CIRCLER) circle.draw()
}