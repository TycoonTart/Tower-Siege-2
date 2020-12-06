class Box{
  constructor(x,y,width,height){
    var options={
      restitution:0.5,
      friction:1,
      density:0.5,
      isStatic:false,
     }
     this.x=x
     this.y=y
     this.width=width
     this.height=height
     this.body=Bodies.rectangle(x,y,width,height,options)
     World.add(world,this.body);
}
display(){
var pos=this.body.position;


  console.log(this.body.speed)
  if(this.body.speed<3){
  
  

  
  
  }
  else{
  World.remove(world,this.body)
  push()
  this.visibility=this.visibility-5
  tint(255,this.visibility)
  rect(this.body.position.x , this.body.position.y, 50,50);
  pop()
  }
  
  }
}

