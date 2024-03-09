class MovementPlantform extends Component{

    constructor(basepoint, stoppoint){
        super()
     this.stoppoint = stoppoint
     this.basepoint = basepoint
    }

   start(){
    this.rb = this.getComponent(DynamicBoxCollider)
    this.rb.vel.x = 2
   }
   update(){
   
   if (this.rb.gameObject.pos.x > this.stoppoint) this.rb.vel.x = -2
   if (this.rb.gameObject.pos.x < this.basepoint) this.rb.vel.x = 2
   this.rb.onCollisionEnter = (col) => {
    if (this.rb.vel.x = 2) this.rb.vel.x = -2
    if (this.rb.vel.x = -2) this.rb.vel.x = 2
    }
   
}
}