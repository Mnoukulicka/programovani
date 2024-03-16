class Pushable extends Component {

    start() {
        this.rb = this.getComponent(DynamicBoxCollider)

        this.timer = 0
    }

    update() {
        this.timer++

    }
}