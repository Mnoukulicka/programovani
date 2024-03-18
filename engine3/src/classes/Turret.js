
class Turret extends Component{
    constructor(firespotx, firespoty) {
        super()
        this.firespotx = firespotx
        this.firespoty = firespoty
    }
    start(){
        this.rb = this.getComponent(DynamicBoxCollider)
        this.rb.applyGravity = false
        this.object = 1
        this.objects = Engine.objects
        this.x1 = 0
        this.x2 = 0
        this.y1 = 0
        this.y2 = 0
        this.detection = 0
        }
    update(){ 
        if (this.detection = 1) {
            new GameObject(this.firespotx.x, this.firespoty)
            .addComponent(new RectRenderer(2, 2, () => {
                noStroke(0);
                fill(255, 0, 0);
            }))
            .addComponent(new DynamicBoxCollider(2, 2))
            .addComponent(new Bullet())
        }
    this.objects = Engine.objects
    this.objects.splice(indexOf(this), 1)
    this.objects.splice(indexOf(PLayer), 1)
        if (this.gameObject.pos.x < PLayer.pos.x) {this.x1 = this.gameObject.pos.x, this.x2 = PLayer.pos.x} else {this.x1 = this.gameObject.pos.x, this.x2 = PLayer.pos.x}
        if (this.gameObject.pos.y > PLayer.pos.y) {this.y1 = this.gameObject.pos.y, this.y2 = PLayer.pos.y} else {this.y2 = this.gameObject.pos.y, this.y1 = PLayer.pos.y}
    this.object = 1
    this.objects[2]
    if (Math.sqrt((this.y2 - this.y1)*(this.y2 - this.y1) + (this.x2 - this.x1)*(this.x2 - this.x1))< 300){
    for (this.object of this.objects){
        this.s = this.objects[this.object]
        this.srb = this.s.getComponent(RectRenderer)
        this.srbx1 = this.s.pos.x - srb.size.x / 2
        this.srbx2 = this.srb.size.x
        this.srby1 = this.s.pos.y - srb.size.y / 2
        this.srby2 = this.srb.size.y
        if (this.srbx2 < this.x1) this.objects.splice(indexOf(this.object), 1)
        else if (this.srby2 > this.y1) this.objects.splice(indexOf(this.object), 1)
        else if (this.srbx1 > this.x2) this.objects.splice(indexOf(this.object), 1)
        else if (this.srby1 < this.y2) this.objects.splice(indexOf(this.object), 1)
    this.object ++
    }
    this.player = PLayer.getComponent(RectRenderer)
    this.playerx1 = PLayer.pos.x - this.player.size.x / 2
    this.playerx2 = this.player.size.x
    this.playery1 = PLayer.pos.y - this.player.size.y / 2
    this.playery2 = this.player.size.y

    if (this.objects.length > 0){
        for (let i = 3; i <= (this.x2 - this.x1)/3; i+3) {
            this.linexes.push(i)
        }
        for (let i = 3; i <= (this.y2 - this.y1)/3; i+3) {
            this.lineys.push(i)
        }
        if (this.linexes.length >= this.lineys.length) {
            this.breakpoints = []
            for (let i =  0; i <= this.lineys.length; i + 1){
             this.breakpoints.push(this.linexes.length / this.lineys.length)
            }
            this.breakpoints.slice(this.breakpoints.length, 1)
            this.longerlinestuff = this.linexes.length}
        else {
            for (let i = 0; i <= this.linexes.length; i + 1){
                this.breakpoints.push(this.lineys.length / this.linexes.length)
               }
            this.longerlinestuff = this.lineys.length}
    for (this.object of this.objects){
        this.s = this.objects[this.objects]
        this.srb = this.s.getComponent(RectRenderer)
        this.srbx1 = this.s.pos.x - this.srb.size.x / 2
        this.srbx2 = this.srb.size.x
        this.srby1 = this.s.pos.y - this.srb.size.y / 2
        this.srby2 = this.srb.size.y
        this.counter = 0
        this.cycle = 0
        for  (let i = 0; i <= this.longerlinestuff; i + 1){
        if (this.longerlinestuff == this.linexes.length){
        this.linex = this.linexes[i]
        if (this.counter = this.breakpoints[this.cycle]){
            this.counter = 0
            this.liney = this.lineys[cycle]
            this.cycle ++    
        }
    }
        else{
            this.counter = 0
            this.linex = this.linexes[cycle]
            this.cycle ++
        this.liney = this.lineys[i]
    }}
        if (this.linex < this.srbx2 && this.linex > this.srbx1 && this.liney > this.srby2 && this.liney < this.srby1) this.objects.splice(indexOf(this.object), 1);{
             this.detection = 0
        i = this.longerlinestuff + 1

        }
        if (this.linex < this.playerx2 && this.linex > this.playerx1 && this.liney > this.playery2 && this.liney < this.playery1){
            this.detection = 1 
            i = this.longerlinestuff + 1
        }
         this.object ++
         this.moves ++
    }
    this.breakpoints.slice(0, this.breakpoints.length)
    this.linexes.slice(0, this.linexes.length)
    this.lineys.slice(0, this.lineys.length)
}
}
}
   
}
class Bullet extends Component{
    constructor (myspeed){
        super()
     this.myspeed = myspeed
    }
    start(){
        this.target = createVector(PLayer.x, PLayer.y)
        this.rb = this.getComponent(DynamicBoxCollider)
        this.mydir = Vector.sub (this.target, this.rb.gameObject.pos)
        this.mydir.mag(this.myspeed)
        this.rb.vel.x = this.mydir.x
        this.rb.vel.y = this.mydir.y
     

    }
 
    draw(){
      if (this.mypos.x > width) this.destroy()
      if (this.mypos.x < 0) this.destroy()
      if (this.mypos.y > height) this.destroy()
      if (this.mypos.y < 0) this.destroy()
      this.rb.onCollisionEnter = (col) => {
        if (!col.collider.getComponent(Player)) {
            lives = lives -1
        }
        this.destroy()
    }
    }
 }