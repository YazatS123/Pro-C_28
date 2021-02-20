
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball, bin, fall;
var floor, catapult;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	ball = new Ball(600, 0);
	bin = new Box(600, 310, 90, 120);
	bin.isStatic = true;
	floor = new Box(400, 370, 800, 10);
	floor.isStatic = true;
	//Create the Bodies Here.
	fall = 0;
	catapult = new Launcher(ball.body, {x: 200, y: 100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  floor.display();
  bin.display();
  ball.display();
  catapult.display();
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
	catapult.fly();
}
