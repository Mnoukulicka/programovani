class Enemy extends Component{
    constructor(basepoint, stoppoint){
        super()
     this.stoppoint = stoppoint
     this.basepoint = basepoint
    }

   start(){
    this.rb = this.getComponent(Rigidbody)
    this.rb.vel.x = 120
   // this.rb.vel.y = -60
    this.timer = 0
   }

   onCollisionEnter = (col) => {
      if (col.normal.y == 1 && col.normal.x == 0) this.rb.gameObject.destroy()
      else if (col.normal.y == 0){
     if (!col.collider.getComponent(Player)) lives = lives -1
     if (this.rb.vel.x = 120) this.rb.vel.x = -120
     if (this.rb.vel.x = -120) this.rb.vel.x = 120
  }
     } 

   update(){
    this.timer ++
    this.onground = 0
    this.rb.vel.y = -1
   //  if (this.timer == 2){
   //  this.rb.vel.y = this.rb.vel.y*-1
   //  this.timer = 0}
   if (this.rb.gameObject.pos.x > this.stoppoint) this.rb.vel.x = -120
   if (this.rb.gameObject.pos.x < this.basepoint) this.rb.vel.x = 120
   }
}