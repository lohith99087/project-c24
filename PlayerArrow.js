class PlayerArrow 
{
  constructor(x, y, width, height, archerAngle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("arrow.png");
    this.archerAngle = archerAngle;
    this.velocity = 0;
    this.trajectory=[]
    World.add(world, this.body);
  }
  
  //create a shoot function
  shoot(archerAngle){
    archerAngle +=90 ;
    this.velocity = p5.Vector.fromAngle(archerAngle * (3.14/180));

    this.velocity.mult(0.5);
    
    Matter.Body.setVelocity(this.body,{x: this.velocity.x * (180/3.14),
      y: this.velocity.y * (180/3.14)
    });

    Matter.Body.setStatic(this.body,false);
  }

  display()
  { 
  
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();

    if(this.body.velocity.x>0 && pos.x>300){
      var position=[pos.x,pos.y]
      this.trajectory.push(position);
    }

    for(var i=0; i<this.trajectory.length; i++)
  {
    image(this.image,this.trajectory[i][0],this.trajectory[i][1],15,10);
  }

}            

}

  

  