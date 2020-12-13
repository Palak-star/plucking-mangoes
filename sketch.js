
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,550,800,120)
	
	boy = new Boy(200,300,50,50)
	stone = new Stone(300,300,50,50);
	tree = new Tree(600,300,50,50)

    mango1 = new Mango(630,300,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
   ground.display();
   boy.display();
   tree.display();
   stone.display();

   mango1.display();


  drawSprites();
 
}



