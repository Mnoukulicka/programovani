let z
let PLayer

function setup() {
    size(800, 600);

   // new GameObject(width / 2, height - 5)
   // .addComponent(new Rect(width * 1000, 10))
   // .addComponent(new ShapeRenderer())
   // .addComponent(new Rigidbody(mass (if static, = 0), bounciness))

    new GameObject(width / 2, height - 5)
        .addComponent(new Rect(width * 1000, 10))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))

    new GameObject(width, height / 2)
        .addComponent(new Rect(10, height - 50))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))

    new GameObject(width + 20, -height + 300)
        .addComponent(new Rect(10, height - 50))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))

    new GameObject(0, height / 2)
        .addComponent(new Rect(10, height))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))

    new GameObject(width / 2, height / 2)
        .addComponent(new Rect(50, 10))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))

    PLayer = new GameObject(width / 2, height / 2 - 100)
        .addComponent(new Rect(50, 50))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(4, 0))
        .addComponent(new Player())

    new GameObject(width / 2 + 100, height / 2 + 50)
        .addComponent(new Rect(50, 10))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))

    new GameObject(width / 2 - 100, height / 2 - 100)
        .addComponent(new Rect(50, 10))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))
        .addComponent(new Ghost(3, 0))

    new GameObject(width / 2 - 120, height / 2 - 20)
        .addComponent(new Rect(50, 10))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))

    new GameObject(width / 2 - 150, height / 2 - 50)
        .addComponent(new Rect(50, 10))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))

    new GameObject(width / 2, height / 2 - 150)
        .addComponent(new Rect(200, 10))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))

    let x = new Rigidbody(2, 0)
    x.applyGravity = false
    new GameObject(width / 2 + 100, height / 2 - 100)
        .addComponent(new Rect(50, 10))
        .addComponent(x)
        .addComponent(new MovementPlantform(1, width / 2 + 100, width / 2 + 350, height / 2 - 100))

    new GameObject(width / 2 - 20, height / 2 - 170)
        .addComponent(new Rect(20, 20))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(8, 0))
        .addComponent(new Enemy(width / 2 - 100, width / 2 + 70))

    // new GameObject(width / 2 - 20, height / 2 - 170)
    //     .addComponent(new Rect(20, 20))
    //     .addComponent(new ShapeRenderer())
    //     .addComponent(new Rigidbody(10, 20))

    // new GameObject(width - 100, height/2)
    //     .addComponent(new Rect(50, 10))
    //     .addComponent(new ShapeRenderer())
    //     .addComponent(new Rigidbody(10, 20))
    //     .addComponent(new MovementPlantform(2, height - 200, 100, height/2))

    // new GameObject(width / 2 - 200, height / 2 - 50)
    //     .addComponent(new Rect(50, 10))
    //     .addComponent(new ShapeRenderer())
    //     .addComponent(new Rigidbody(10, 20))
    //    //.addComponent(new Turret(width / 2 - 200, height / 2 - 50))

    new GameObject(width / 2, height / 2 - 155)
    .addComponent(new Rect(50, 5))
    .addComponent(new ShapeRenderer())
    .addComponent(new Rigidbody(0))
    .addComponent(new Teleport(0, 0))
}

function draw() {
    background(51);

    translate(-PLayer.pos.x + width / 2, -PLayer.pos.y + width / 2)
}
