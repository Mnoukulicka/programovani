const playerSize = 5;
const playerSpeed = 5;
const bulletSize = 1
const enemySize = 5;
const bulletSpeed = 7
var time = 0
var time2 = 0
var ammo = 10
var enemies = []
var bullets = []
var player;
var b = 0
function setup() {
    createCanvas(1000, 800);
    var b = 0
    player = createVector(width / 2, height / 2);

    for (var e = 0; e < 50; e++) {
     var randomPos = createVector(random(width), random(height))
     var enemy = new Enemy(randomPos, random(1, 5))
     enemies.push(enemy)
    }
}

function draw() {
    background(220);
    time ++
    var dir = createVector();
    if (Input.keyPressed('a')) dir.x -= 1;
    if (Input.keyPressed('d')) dir.x += 1;
    if (Input.keyPressed('w')) dir.y -= 1;
    if (Input.keyPressed('s')) dir.y += 1;
    if (Input.keyPressed(' ')) {
     if (time>10) {
      if  (bullets.length < 200) {
      if (ammo > 0){
        var bullet = new Bullet(player, bulletSpeed)
        bullets.push(bullet)
        time = 0
        ammo = ammo - 1
      }
     }
    }
    if (time<10) time2 ++
    }
    if (time2 > 50){ 
      time2 = 0
      if (ammo == 0)
      ammo = 50
    }
    dir.setMag(playerSpeed);
    player.add(dir);
    
    fill(255);
   
    if (player.x>width){
      player.x = 0
    }
    if (player.x<0){
      player.x = width
       
    }
    if (player.y>height){
     player.y = 0
       
    }
    if (player.y<0){
      player.y = height
       
    }
    
    circle(player.x, player.y, playerSize);
    fill(255, 0, 0);

    for (var enemy of enemies)
    enemy.draw()
    for (var bullet of bullets)
    bullet.draw()
}