class Ghost extends Component {
    constructor(time, n) {
        super()
        this.interval = time * 60
        this.n = n
    }
    start() {
        this.rb = this.getComponent(Rigidbody)
        this.timer = 0
    }
    update() {
        this.timer++
        if (this.n == 0) {
            if (this.timer == this.interval) {
                this.rb.enabled = false
               this.n = 1
            }
        }

        if (this.n == 1) {
            if (this.timer == this.interval) {
                this.rb.enabled = true
                this.n = 0
            }
        }
    }
}