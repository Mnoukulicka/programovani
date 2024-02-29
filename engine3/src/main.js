
let a 
let PLayer
let acount
let acounter
class Player extends Component{
   start(){
    this.rb = this.getComponent(DynamicBoxCollider)
    this.onground = 0
    this.rb.onCollisionExit = (col) => {
        if (col.hit.normal.y == -1 && col.hit.normal.x == 0)  
        this.onground = 0
       } 
   this.rb.onCollisionEnter = (col) => {
    if (col.hit.normal.y == -1 && col.hit.normal.x == 0)  
    this.onground = 1
    }
   }
   
  
   update(){
    if (Input.keyPressed("a")){this.rb.vel.x = -2} 
    else if(Input.keyPressed("d")){this.rb.vel.x = 2}
    else this.rb.vel.x = 0 
    //if (this.onground == 1) 
      if (Input.keyJustPressed("w"))this.rb.vel.y = -10
   
}

}

//class Carrier extends Component{
// update(){
 //  this.rb = this.getComponent(DynamicBoxCollider)
 //  this.rb.onCollisionEnter = (col) => {
  // if (collider.)

 //  }

// }


//}
class MovementPlantform extends Component{

    constructor(basepoint, stoppoint){
        super()
     this.stoppoint = stoppoint
     this.basepoint = basepoint
    }

   start(){
    this.rb = this.getComponent(DynamicBoxCollider)
    this.rb.vel.x = 2
   }
   update(){
   
   if (this.rb.gameObject.pos.x > this.stoppoint) this.rb.vel.x = -2
   if (this.rb.gameObject.pos.x < this.basepoint) this.rb.vel.x = 2
}
}
function setup() {
    size(800, 600);

    new GameObject(width / 2, height - 5)
    .addComponent(new RectRenderer(width, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(width, 10))

    new GameObject(width, height/2)
    .addComponent(new RectRenderer(10, height, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(10, height))

    new GameObject(0, height/2)
    .addComponent(new RectRenderer(10, height, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(10, height))

    new GameObject(width / 2, height/2)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10))

    PLayer = new GameObject(width / 2, height/2 -100)
    .addComponent(new RectRenderer(50, 50, () => {
        noStroke(0);
        fill(255, 0, 0);
    }))
    .addComponent(new DynamicBoxCollider(50, 50))
    .addComponent(new Player())

    new GameObject(width / 2 + 100, height/2 + 50)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10))

    a = new GameObject(width / 2 -100, height/2 -100)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10))

    new GameObject(width / 2 -120, height/2 -20)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10))

    new GameObject(width / 2 -150, height/2 -50)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10))

    new GameObject(width / 2 , height/2 -150)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10))

    let x = new DynamicBoxCollider(50, 10)
    x.applyGravity = false
    new GameObject(width / 2 + 100, height/2 -100)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(x)
    .addComponent(new MovementPlantform(width / 2 + 100, width / 2 + 350 ))
    //.addComponent(new Carrier())
}

function draw() {
    background(51);
    if (acount == 1) {acounter ++}
    if (acounter == 300) {
        a = new GameObject(width / 2 -100, height/2 -100)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10))
    }
    if (Input.keyJustPressed('Shift'))
    { a.destroy()
    a = new GameObject(width / 2 -100, height/2 -100)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))

      acount = 1
      acounter = 0
    }
    translate( -PLayer.pos.x + width/2, -PLayer.pos.y + width/2)
}
