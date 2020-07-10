var particales = [];
var plinkos=[];
var division1 = [];

var divisionHeight=300;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var division,ground;


function setup(){
     createCanvas(400,600);
     engine=Engine.create()
  world = engine.world;

     Engine.run(engine);
  division = new Division(200,445,20,300);
  division1 = new Division(300,445,20,300);
  division2 = new Division(390,445,20,300);
  division3 = new Division(100,445,20,300);
  division4 = new Division(10,445,20,300);
  division5 = new Division(200,590,400,15);
}

function draw(){
    background("red");
  //  Engine.update(engine);
    fill("yellow")
    strokeWeight(4);
    division.display();
    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    
 }
