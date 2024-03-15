class Teleport extends Component{
    constructor(telepoint){
        super()
     this.telepoint = telepoint
    }
    start(){
        this.rb = this.getComponent(DynamicBoxCollider)
        this.rb.vel.y = -1
        this.timer = 0
        this.rb.applyGravity = false
       }
       update(){
        this.timer ++
        this.rb.vel.y = -1
        if (this.timer == 2){ this.rb.vel.y = this.rb.vel.y*-1
        this.timer = 0}
       this.rb.onCollisionEnter = (col) => {
            if (col.hit.normal.y == 1 && col.hit.normal.x == 0){ 
           col.collider.DynamicBoxCollider
           } 
       }
    }
}