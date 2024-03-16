class Enemy extends Component{
    constructor(basepoint, stoppoint){
        super()
     this.stoppoint = stoppoint
     this.basepoint = basepoint
    }

   start(){
    this.rb = this.getComponent(DynamicBoxCollider)
    this.rb.vel.x = 2
    this.rb.vel.y = -1
    this.timer = 0
   }
   update(){
    this.timer ++
    this.onground = 0
    this.rb.vel.y = -1
    if (this.timer == 2){ this.rb.vel.y = this.rb.vel.y*-1
    this.timer = 0}
   if (this.rb.gameObject.pos.x > this.stoppoint) this.rb.vel.x = -2
   if (this.rb.gameObject.pos.x < this.basepoint) this.rb.vel.x = 2
   this.rb.onCollisionEnter = (col) => {
        if (col.hit.normal.y == 1 && col.hit.normal.x == 0) this.rb.gameObject.destroy()
        else if (col.hit.normal.y == 0){
       if (!col.collider.getComponent(Player)) lives = lives -1
       if (this.rb.vel.x = 2) this.rb.vel.x = -2
       if (this.rb.vel.x = -2) this.rb.vel.x = 2
    }
       } 
      
      
   }
}