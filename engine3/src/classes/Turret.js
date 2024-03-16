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
   // this.objects = Engine.objects
     //   if (this.gameObject.pos.x < PLayer.pos.x) {this.x1 = this.gameObject.pos.x, this.x2 = PLayer.pos.x} else {this.x1 = this.gameObject.pos.x, this.x2 = PLayer.pos.x}
   //     if (this.gameObject.pos.y > PLayer.pos.y) {this.y1 = this.gameObject.pos.y, this.y2 = PLayer.pos.y} else {this.y2 = this.gameObject.pos.y, this.y1 = PLayer.pos.y}
  //  this.object = 1
   // for (this.object of this.objects){
        this.s = this.objects(OnIndex(this.object))
        this.srb = this.s.getComponent(RectRenderer)
        if (this.object.pos.x < this.x1) this.objects.splice(IndexOf(this.object))
        else if (this.object.pos.y > this.y1) this.objects.splice(IndexOf(this.object))
        else if (this.object.pos.x > this.x2) this.objects.splice(IndexOf(this.object))
        else if (this.object.pos.y < this.z2) this.objects.splice(IndexOf(this.object))
    this.object ++
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