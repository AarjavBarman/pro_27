
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(1250, 700);
	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(620,200,500,40);
	bob1 = new bob(620,500,50);
	bob2 = new bob(570,500,50);
	bob3 = new bob(520,500,50);
	bob4 = new bob(670,500,50);
  bob5 = new bob(720,500,50);
  rope1=new Rope(bob1.body,roof1.body,0,0)
  rope2=new Rope(bob2.body,roof1.body,-50,0) 
  rope3=new Rope(bob3.body,roof1.body,-100,0) 
  rope4=new Rope(bob4.body,roof1.body,50,0) 
  rope5=new Rope(bob5.body,roof1.body,100,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



