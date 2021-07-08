const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;

var ball;



function setup() {
	createCanvas(1000, 450);


	engine = Engine.create();
	world = engine.world;
	ground= new Ground(500,430,1000,10)
	ground1 = new Ground(820,375,10,90)
	ground2 = new Ground(620,375,10,90)
	
	var ball_options = {
		isStatic:false,
        restitution:0,
		friction:0,
		density:0.3
	}
	
	ball = Bodies.circle(150,10,10,ball_options)
	World.add(world,ball)
	ellipseMode(RADIUS)


	Engine.run(engine);

	
  
}


function draw() {
  background(0);
  Engine.update(engine);
   fill ("white")
  ellipse(ball.position.x,ball.position.y,10,10)

 ground.display();
 ground1.display();
 ground2.display();
 
 
}

function keyPressed() {
	if(keyCode === UP_ARROW)  {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.75,y:0});
	}
}



