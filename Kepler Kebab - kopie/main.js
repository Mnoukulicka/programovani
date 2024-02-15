var rectx = 10
  var recty = 10
  var rectwidth = 100
  var rectheight = 100


class Circle{
 constructor(x, y, size, gravpower){
    this.gravpower = gravpower
    this.grav = p5.Vector.random2D() 
    this.grav.mult(this.gravpower)
    this.BposB = createVector(x, y);
    this.spee = createVector()
    this.speedin = createVector()
    this.size = size
    this.rot = random(2*PI)
 }

 draw(){
  push()
  translate(this.BposB.x, this.BposB.y)
  rotate(this.rot)
  this.rot ++
  fill(12)
  textSize(this.size)
  text("B", 0, 0)
  pop()
 }

  update(){
   
    this.speedin.add(this.grav)
    this.spee.add(this.speedin)
    this.spee.mult(0.999)
    if (this.BposB.y > height-5) this.spee.mult(1, -0.99)
    if (this.BposB.y < 5) this.spee.mult(1, -0.99)
    if (this.BposB.x > width-5) this.spee.mult(-0.99, 1)
    if (this.BposB.x < 5) this.spee.mult(-0.99, 1)

    if (this.BposB.y > recty) {
        if (this.BposB.y < recty+rectheight) 
         if (this.BposB.x > rectx) 
          if (this.BposB.x < rectx+rectwidth) this.spee.mult(-0.99)
    }
    this.speedin.mult(0)
    this.BposB.add(this.spee)
}
  spacepressed(){
    print("x")
     this.grav = p5.Vector.random2D()
     this.grav.mult(this.gravpower)
     this.grav.mult(this.size/30)
  }
}
var CIRCLER = []
function setup () {
  createCanvas(800, 600)
  background(200)
  for(i = 0; i<50; i ++){
    let circler = new Circle(random(width), random(height), random(2, 15), random(0.1, 1) )
    CIRCLER.push(circler)
 }
}
function keyPressed() {
  if (keyCode == 32) {
    for(let circle of CIRCLER) circle.spacepressed()
  }
  
}
function draw () {
  background(220)
  
  rect(rectx, recty, rectwidth, rectheight)
 for(i = 0; i<5; i ++){
    print("B")

 }
  for(let circle of CIRCLER) circle.draw()
  for(let circle of CIRCLER) circle.update()
}