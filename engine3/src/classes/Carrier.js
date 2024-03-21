
class Carrier extends Component{
    update(){
      this.rb = this.getComponent(DynamicBoxCollider)
      this.rb.onCollisionEnter = (col) => {     
        if (!col.collider.getComponent(DynamicBoxCollider))
        this.x = 1
        this.xx = col.collider.getComponent(DynamicBoxCollider)
     
      }
      this.rb.onCollisionExit = (col) => {
         this.x = 0}
       
       if (this.x == 1){ 
       if (this.xx.vel.x  < 3 & this.xx.vel.x  > -3) this.xx.vel.x =+ this.rb.vel.x
      }
    }
   }