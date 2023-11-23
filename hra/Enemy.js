class Enemy{
   constructor (){
    const r = min(width, height)/2 * 0.75;
    const a = random(2*PI);
    this.mypos = createVector(r*cos(a), r*sin(a));
    this.mypos.add(player);
   }


   draw(){
    var mydir = p5.Vector.sub (player, this.mypos)
    mydir.setMag(2)
    this.mypos.add(mydir)
    circle (this.mypos.x, this.mypos.y, enemySize)
    
   }
}