class MovementPlantform extends Component {

    constructor(xy,basepoint, stoppoint) {
        super()
        this.xy = xy
        this.stoppoint = stoppoint
        this.basepoint = basepoint
    }

    start() {
        this.rb = this.getComponent(DynamicBoxCollider)
        if (this.xy == 1)this.rb.vel.x = 120
        else this.rb.vel.y = -120
        this.rb.applyGravity = false
    }
    update() {
        if (this.xy == 1){
        if (this.rb.gameObject.pos.x > this.stoppoint) this.rb.vel.x = -120
        if (this.rb.gameObject.pos.x < this.basepoint) this.rb.vel.x = 120
        this.rb.onCollisionEnter = (col) => {
            if (this.rb.vel.x = 120) this.rb.vel.x = -120
            if (this.rb.vel.x = -120) this.rb.vel.x = 120

        }
    }
    else {
    if (this.rb.gameObject.pos.y < this.stoppoint) this.rb.vel.y = 120
    if (this.rb.gameObject.pos.y > this.basepoint) this.rb.vel.y = -120
    this.rb.onCollisionEnter = (col) => {
        if (this.rb.vel.y = 120) this.rb.vel.y = -120
        if (this.rb.vel.y = -120) this.rb.vel.y = 120
    }
}
    }
}