
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground1;
var dust1, dust2, dust3, bin;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	ball = new waste(100, 310, 50, 50);
	ground1 = new ground(400, 350, 900, 20);
	dust1 = new dustbin(685, 327, 150, 20);
	dust2 = new dustbin(600, 260, 20, 150);
	dust3 = new dustbin(770, 260, 20, 150);
	bin = new photo(590, 180, 190, 160);
	
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(rgb(0,255,255)); 
  drawSprites();
  
  ground1.display();
  dust1.display();
  dust2.display();
  dust3.display();
  bin.display();
  ball.display();
  stroke(0);
  fill(0);
  textSize(18);
  text("Throw the waste in the dustbin by clicking up arrow.", 200, 400);
  text("Click refresh button to play the game once again.", 200, 430);
}
function keyPressed(){
	if (keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:100, y:-200})
	}
}



