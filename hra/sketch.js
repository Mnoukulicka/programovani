const playerSize = 30;
const playerSpeed = 5;

const enemySize = 30;

var player;
var enemy
var enemy2
function setup() {
    createCanvas(800, 600);

    player = createVector(width / 2, height / 2);
    
    enemy = new Enemy()
    enemy2 = new Enemy()
}

function draw() {
    background(220);

    var dir = createVector();
    if (Input.keyPressed('a')) dir.x -= 1;
    if (Input.keyPressed('d')) dir.x += 1;
    if (Input.keyPressed('w')) dir.y -= 1;
    if (Input.keyPressed('s')) dir.y += 1;
    dir.setMag(playerSpeed);
    player.add(dir);
    
    fill(255);
    circle(player.x, player.y, playerSize);
  
    fill(255, 0, 0);
    enemy.draw()
}