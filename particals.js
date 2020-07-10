class Particals {
    constructor(x, y,random) {
      var options = {
         'restitution':0.3,
      }
      this.radius = 10;
      this.body = Bodies.circle(x, y,this.random, options);
      this.color = color(random(0,255),random(0,255),random(0,255));
     
          
      World.add(world, this.body);
    }
    display(){

      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle)
      noStroke();
      fill(this.color)
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.random);
      pop();
     
      if(frameCount%60===0){
        particales.push(new Particals(random(width/2-10,width/2+10),10,10));
     }
     for(var j = 0; j<Particals.length;j++){
      parrticales[j].display();   

   }
    }
  };
  