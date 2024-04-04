let w = 0
let lives = 3
class Player extends Component {
    start() {
        this.rb = this.getComponent(Rigidbody)
        this.onground = 0
    }

    onCollisionExit(col) {
        if (col.normal.y == -1 && col.normal.x == 0)
            this.onground = 0
    }

    onCollisionEnter(col) {
        if (col.collider == -1 && col.normal.x == 0) {
            this.onground = 1
        }
    }

    update() {
        if (Input.keyPressed("a"))  { this.rb.vel.x = -120
        }
        else if (Input.keyPressed("d")) { this.rb.vel.x = 120}
        else this.rb.vel.x = 0
        if (z !== 0) {
            this.rb.vel.x = this.rb.vel.x + w
        }
        this.rb.vel.x * 60
        //if (this.onground == 1) 
        if (Input.keyJustPressed("w")) this.rb.vel.y = -180

    }

}