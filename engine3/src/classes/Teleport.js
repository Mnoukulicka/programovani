let teleportsOn = []
class Teleport extends Component{
    constructor(telepointx, telepointy){
        super()
     this.telepointx = telepointx
     this.telepointy = telepointy
    }

   start(){
    this.rb = this.getComponent(Rigidbody)

    // teleportsOn.add(0)
    // this.IndexOfTeleport = teleportsOn.length
   }

   onCollisionEnter(col) {
    if (col.collider.isKinematic == false) {
     col.collider.gameObject.pos.x = this.telepointx
     col.collider.gameObject.pos.y = this.telepointy
    }
    }

   update(){
    
}
}
