
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var ground2;
var ground3;
var ball;
var topWall;
var bottomWall

function setup() {
	createCanvas(1000,700);

	engine = Engine.create();
	world = engine.world;

var	ball_options = {
	
	isStatic: false,
	
	restitution: 1,

	density: 0.7,

	frictionAir: 0.01,
}

	ground1 = new Ground (800,500,10,100);
	ground2 = new Ground (670,500,10,100);
	ground3 = new Ground (500,540,1000,10)

	

	ball = Bodies.circle(50,530,20,ball_options);
	World.add(world,ball);
	Engine.run(engine);
}

function draw() {
rectMode(CENTER);
fill(255)
ellipseMode(RADIUS)
 background(0);
 ellipse(ball.position.x,ball.position.y,20);
  ground1.show();
  ground2.show();
  ground3.show();

  
  if(keyDown(UP_ARROW)){
	  force();
  }

  
 
  

}

 function force(){
 Matter.Body.applyForce(ball,ball.position,{x:18,y:25})
 }



