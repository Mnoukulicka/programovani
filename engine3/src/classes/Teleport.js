
class Teleport extends Component{
    constructor(telepointx, telepointy){
        super()
     this.telepointx = telepointx
     this.telepointy = telepointy
    }

   start(){
    this.rb = this.getComponent(DynamicBoxCollider)
    this.rb.applyGravity = false

   }
   update(){
   this.rb.onCollisionEnter = (col) => {
    
}
    
}

}