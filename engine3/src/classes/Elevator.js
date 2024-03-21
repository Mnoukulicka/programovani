class Elevator extends Component {


    constructor(basepoint, stoppoint) {
        super()
        this.stoppoint = stoppoint
        this.basepoint = basepoint
    }

    start() {
        this.rb = this.getComponent(DynamicBoxCollider)
        this.rb.vel.y = 3
        this.x = 0
        this.rb.applyGravity = false
        this.error = false
        
        this.xx = 0
    }
    update() {

        if (this.rb.gameObject.pos.y > this.stoppoint) this.rb.vel.y = -3
        if (this.rb.gameObject.pos.y < this.basepoint) this.rb.vel.y = 3
        this.rb.onCollisionEnter = (col) => {
            this.error = true
            if (col.hit.normal.y == 1 && col.hit.normal.x == 0){
           if (!col.collider.getComponent(DynamicBoxCollider))
           this.xx = col.collider.getComponent(DynamicBoxCollider)
           this.xx.applyGravity = false
           this.x = 1
        }
           } 
           if (this.error == true) this.rb.vel.y = -3
           this.rb.onCollisionExit = (col) => {
            this.xx.applyGravity = true
            this.error = false
            this.x = 0
        }

           if (this.x== 1) this.xx.vel.y = 3

    }


}