
class Carrier extends Component{
    update(){
      this.rb = this.getComponent(DynamicBoxCollider)
      this.rb.onCollisionEnter = (col) => {     
        this.x = 1
        return (1)     
      }
      this.rb.onCollisionExit = (col) => {
         this.x = 0}
       
       if (this.x == 1){ 
       w = this.rb.vel.x
       z = this.rb.gameObject}
    }
   }