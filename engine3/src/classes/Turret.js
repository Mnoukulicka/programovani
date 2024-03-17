var turrets = []
var turrets2 = []
class Turret extends Component{


    start(){
        turrets.push(this)
        turrets2.push(0)
        this.rb = this.getComponent(DynamicBoxCollider)
        this.rb.applyGravity = false
        this.object = 1
        this.objects = Engine.objects
        this.x1 = 0
        this.x2 = 0
        this.y1 = 0
        this.y2 = 0
        this.detection = turrets(IndexOf(this))
    }
    update(){ 

        if (this.detection = 1) 
    this.objects = Engine.objects
    this.objects.splice(IndexOf(this), 1)
    this.objects.splice(IndexOf(PLayer), 1)
        if (this.gameObject.pos.x < PLayer.pos.x) {this.x1 = this.gameObject.pos.x, this.x2 = PLayer.pos.x} else {this.x1 = this.gameObject.pos.x, this.x2 = PLayer.pos.x}
        if (this.gameObject.pos.y > PLayer.pos.y) {this.y1 = this.gameObject.pos.y, this.y2 = PLayer.pos.y} else {this.y2 = this.gameObject.pos.y, this.y1 = PLayer.pos.y}
    this.object = 1
    this.objects[2]
    for (this.object of this.objects){
        this.s = this.objects[this.object]
        this.srb = this.s.getComponent(RectRenderer)
        this.srbx1 = s.pos.x - srb.size.x / 2
        this.srbx2 = srb.size.x
        this.srby1 = s.pos.y - srb.size.y / 2
        this.srby2 = srb.size.y
        if (this.srbx2 < this.x1) this.objects.splice(IndexOf(this.object))
        else if (this.srby2 > this.y1) this.objects.splice(IndexOf(this.object))
        else if (this.srbx1 > this.x2) this.objects.splice(IndexOf(this.object))
        else if (this.srby1 < this.y2) this.objects.splice(IndexOf(this.object))
    this.object ++
    rect(s.pos.x - srb.size.x / 2, s.pos.y - srb.size.y / 2, srb.size.x, srb.size.y)
    }
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
        this.srbx1 = s.pos.x - srb.size.x / 2
        this.srbx2 = srb.size.x
        this.srby1 = s.pos.y - srb.size.y / 2
        this.srby2 = srb.size.y
        this.counter = 0
        this.cycle = 0
        for  (let i = 0; i <= this.longerlinestuff; i + 1){
        if (this.longerlinestuff == this.linexes.length){
        this.linex = this.linexes[i]
        if (this.counter = this.breakpoints[this.cycle]){
            this.counter = 0
            this.liney = this.lineys[cycle]
            this.cycle ++
            this.moves ++
        
        }
    }
        else{
            this.counter = 0
            this.linex = this.linexes[cycle]
            this.cycle ++
        this.liney = this.lineys[i]
        this.moves ++
    }}
        if (this.linex < this.srbx2 && this.linex > this.srbx1 && this.liney > this.srby2 && this.liney < this.srby1) this.objects.splice(IndexOf(this.object));{
             this.detection = 0
        i = this.longerlinestuff + 1

        }
         this.object ++
         this.moves ++
         if (this.moves > 90)  i = this.longerlinestuff + 1
    }
}
}

   
}
class Scout extends Component{
    constructor (mypos, myspeed, turret){
     this.myspeed = myspeed
     this.rb = this.getcomponent(DynamicBoxCollider)
     this.mypos = mypos
     this.turret = turret
     this.target = createVector(PLayer.x, PLayer.y)
     this.mydir = Vector.sub (target, this.mypos)
     this.mydir.add(random(-0.2, 0.2))
     this.mydir.setMag(this.myspeed)
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
            turrets2(IndexOf(this.turret)) = 1
        }
        this.destroy()
    }
    }
 }
class Bullet extends Component{
    constructor (mypos, myspeed){
     this.myspeed = myspeed
     this.rb = this.getcomponent(DynamicBoxCollider)
     this.mypos = mypos
     this.target = createVector(PLayer.x, PLayer.y)
     this.mydir = Vector.sub (target, this.mypos)
     this.mydir.add(random(-0.2, 0.2))
     this.mydir.setMag(this.myspeed)
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