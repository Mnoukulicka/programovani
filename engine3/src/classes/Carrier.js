
class Carrier extends Component{
    update(){
      this.rb = this.getComponent(DynamicBoxCollider)
      this.rb.onCollisionEnter = (col) => {     
        if (!col.collider.getComponent(Player))
        this.x = 1
     
      }
      this.rb.onCollisionExit = (col) => {
         this.x = 0}
       
       if (this.x == 1){ 
       PLayer.pos.x =+ this.rb.vel.x
      }
    }
   }