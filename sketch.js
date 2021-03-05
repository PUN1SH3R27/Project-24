
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	HorizontalBox1 = new GarbageCan(890,435,150,15)
	VerticalBox1 = new GarbageCan(820,400,15,100)
	VerticalBox2 = new GarbageCan(960,400,15,100)
    Ground1= new Ground(width/2,450,width,15)
    paperObject= new Paper(200,430,20)
	//Create the Bodies Here.
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
 // Engine.update(engine)
 
  HorizontalBox1.display()
  VerticalBox1.display()
  VerticalBox2.display()
  Ground1.display()
  paperObject.display();
}



function keyPressed() {
	if (keyCode===UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:35,y:-26});
	   
	 }
   }