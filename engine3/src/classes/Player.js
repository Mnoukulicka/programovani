let w = 0
let lives = 3
class Player extends Component {
    start() {
        this.rb = this.getComponent(DynamicBoxCollider)
        this.onground = 0
        this.rb.onCollisionExit = (col) => {
            if (col.hit.normal.y == -1 && col.hit.normal.x == 0)
                this.onground = 0
        }
        this.rb.onCollisionEnter = (col) => {
            if (col.collider == -1 && col.hit.normal.x == 0) {
                this.onground = 1
            }
        }
    }


    update() {
        if (Input.keyPressed("a"))  { this.rb.vel.x = -2 if (this.rb.vel.x == 3){
            this.rb.vel.x = 5
        }}
        else if (Input.keyPressed("d")) { this.rb.vel.x = 2 }
        else this.rb.vel.x = 0
        if (z !== 0) {
            this.rb.vel.x = this.rb.vel.x + w
        }

        //if (this.onground == 1) 
        if (Input.keyJustPressed("w")) this.rb.vel.y = -10

    }

}