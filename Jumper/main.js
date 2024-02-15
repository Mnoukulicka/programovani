class player extends Component {

    start(){
    
    }

    update(){
     let collider = this.getComponent(DynamicBoxCollider)

     if (Input.keyPressed("d"))
        collider.vel.x = 2

     else if (Input.keyPressed("a"))
      collider.vel.x = -2
     else
       collider.vel.x = 0  

    if (Input.keyJustPressed("w") && collider.grounded)
       collider.vel.y = -10
      
    }

}

function setup() {
    createCanvas(400, 400);
    background(51);
    
new GameObject(width, height/2).addComponent(new BoxCollider(10, height)).addComponent(new RectRenderer(10, height, () => {
    fill(252, 0, 0)
    noStroke()
}))
new GameObject(0, height/2).addComponent(new BoxCollider(10, height)).addComponent(new RectRenderer(10, height, () => {
    fill(252, 0, 0)
    noStroke()
}))
new GameObject(width/2, height).addComponent(new BoxCollider(width, 0)).addComponent(new RectRenderer(width, 10, () => {
    fill(252, 0, 0)
    noStroke()
}))
new GameObject(width/2, 0).addComponent(new DynamicBoxCollider(10, 10)).addComponent(new player())
.addComponent(new RectRenderer(10, 10, () => {    fill(252, 0, 0)
    noStroke()
}))

new GameObject(width/2, height/2).addComponent(new BoxCollider(50, 5)).addComponent(new RectRenderer(50, 5, () => {
    fill(0, 0, 252)
    noStroke()
}))
new GameObject(width/2 - 100, height/2 + 50).addComponent(new BoxCollider(50, 5)).addComponent(new RectRenderer(50, 5, () => {
    fill(0, 0, 252)
    noStroke()
}))
new GameObject(width/2 + 150, height/2 +100).addComponent(new BoxCollider(50, 5)).addComponent(new RectRenderer(50, 5, () => {
    fill(0, 0, 252)
    noStroke()
}))
new GameObject(width/2 + 100, height/2 +150).addComponent(new BoxCollider(50, 5)).addComponent(new RectRenderer(50, 5, () => {
    fill(0, 0, 252)
    noStroke()
}))
new GameObject(width/2 + 50, height/2 +50).addComponent(new BoxCollider(50, 5)).addComponent(new RectRenderer(50, 5, () => {
    fill(0, 0, 252)
    noStroke()
}))


    Engine.start();
}

function draw() {
    background(51);

    Engine.update();
}