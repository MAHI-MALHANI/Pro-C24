
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ground, hammer, stone, rubber, sand, iron

function preload()
{
	
}

function setup() {
	var canvas= createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 var ground = new Ground(400, height, 800,20);

	 hammer = new Hammer(10,100);
	 stone = new Stone(700,320,100,100);
	 rubber = new Rubber(900,450,70);
	 sand = new Sand(505,450,10);
	 iron = new Iron(300,350);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(lightBlue);
  Engine.update(engine);
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand.display();
  iron.display();
  
  drawSprites();
 
}



