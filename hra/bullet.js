class Bullet{
    constructor (mypos, myspeed){
     this.myspeed = myspeed
     this.mypos = player.copy()
     var mouse = createVector(mouseX, mouseY)
     this.mydir = p5.Vector.sub (mouse, this.mypos)
     this.mydir.add(random(-5, 5))
     this.mydir.setMag(this.myspeed)
    }
 
 
    draw(){
     circle (this.mypos.x, this.mypos.y, bulletSize)
     this.mypos.add(this.mydir)
      if (this.mypos.x > width) bullets.splice(bullets.indexOf(this), 1)
      if (this.mypos.x < 0) bullets.splice(bullets.indexOf(this), 1)
      if (this.mypos.y > height) bullets.splice(bullets.indexOf(this), 1)
      if (this.mypos.y < 0) bullets.splice(bullets.indexOf(this), 1)
      for (var enemy of enemies){
       if(((p5.Vector.sub (enemy.mypos, this.mypos)) - enemySize - bulletSize) < 0){
        bullets.splice(bullets.indexOf(this), 1)
        enemies.splice(enemies.indexOf(enemy), 1)
      }
    }
    }
 }