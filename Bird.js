class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    //emptyy array is created
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y]
      //the x and the y positions are pushed into the array
      this.trajectory.push(position);
    }
// trajectory[represents the row in the array][represents the colounm in the array]
    for(var i=0;i< this.trajectory.length;i++){
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1])
    }
    
  }
}
