class Ghost extends Component {
    constructor(time, x, y, xx, yy, n, h) {
        super()
        this.interval = time * 60
        this.x = x
        this.y = y
        this.xx = xx
        this.yy = yy
        this.n = n
        this.h = h
    }
    start() {
        this.rb = this.getComponent(RectRenderer)
        this.kb = this.getComponent(BoxCollider)
        this.timer = 0
    }
    update() {
        this.timer++
        if (this.n == 0) {
            if (this.timer == this.interval) {
                new GameObject(this.x, this.y)
                    .addComponent(new RectRenderer(this.xx, this.yy, () => {
                        noStroke(0);
                        if (this.h == 1) fill(0, 0, 255)
                        else fill(0, 255, 0);
                    })).addComponent(new Ghost(this.interval / 60, this.x, this.y, this.xx, this.yy, 1))
                this.rb.gameObject.destroy()
            }
        }

        if (this.n == 1) {
            if (this.timer == this.interval) {
                new GameObject(this.x, this.y)
                    .addComponent(new RectRenderer(this.xx, this.yy, () => {
                        noStroke(0);
                        fill(0, 0, 255);
                    })).addComponent(new BoxCollider(this.xx, this.yy))
                    .addComponent(new Ghost(this.interval / 60, this.x, this.y, this.xx, this.yy, 0))
                this.rb.gameObject.destroy()
            }
        }
    }
}