
class Teleport extends Component{
    constructor(telepointx, telepointy){
        super()
     this.telepointx = telepointx
     this.telepointy = telepointy
    }

   start(){
    this.rb = this.getComponent(Rigidbody)
    this.rb.applyGravity = false
   }

   onCollisionEnter(col) {
    if (col.collider.isKinematic == true) {
    col.collider.gameObject.pos.x = this.telepointx
    col.collider.gameObject.pos.y = this.telepointy
    }
    }

   update(){
    
}
}