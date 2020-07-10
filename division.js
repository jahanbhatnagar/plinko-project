class Division{
    constructor(x,y,width,height){
    var option = {

        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("blue");
        
        rect(pos.x,pos.y,this.width,this.height);
       
 //   for(var i = 0; i <=this.width;i = i + 80){
   //     division.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
    //}
    //for(var k = 0;k , Division.length;k++){
      //  division[k].display
   // }
}
};