
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
    if (this.onground == 1) 
      if (Input.keyJustPressed("w"))this.rb.vel.y = -10
   
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

    new GameObject(width / 2, height/2)
    .addComponent(new RectRenderer(50, 50, () => {
        noStroke(0);
        fill(255, 0, 0);
    }))
    .addComponent(new DynamicBoxCollider(50, 50))
    .addComponent(new Player())
}

function draw() {
    background(51);
}
