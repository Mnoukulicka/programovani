let z
let PLayer

function setup() {
    size(800, 600);

    new GameObject(width / 2, height - 5)
    .addComponent(new RectRenderer(width*1000, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(width*1000, 10))

    new GameObject(width, height/2 )
    .addComponent(new RectRenderer(10, height -50, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(10, height-50))

    new GameObject(width +20, -height +300 )
    .addComponent(new RectRenderer(10, height -50, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(10, height-50))

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

    new GameObject(width / 2 -100, height/2 -100)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10)).addComponent(new Ghost(3, width / 2 -100, height/2 -100, 50, 10, 0, 0))
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
    .addComponent(new RectRenderer(200, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(200, 10))

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

    new GameObject(width / 2 -20, height/2 -170)
    .addComponent(new RectRenderer(20, 20, () => {
        noStroke(0);
        fill(255, 0, 0);
    }))
    .addComponent(new DynamicBoxCollider(20, 20))
    .addComponent(new Enemy(width / 2 -100, width / 2 +70))

    new GameObject(width / 2 -20, height/2 -170)
    .addComponent(new RectRenderer(20, 20, () => {
        noStroke(0);
        fill(255, 0, 0);
    }))
    .addComponent(new DynamicBoxCollider(20, 20))
    .addComponent(new Pushable())
}

function draw() {
    background(51);

    translate( -PLayer.pos.x + width/2, -PLayer.pos.y + width/2)
}
