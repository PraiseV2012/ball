
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,groundbody,ball,ballbody
var bin

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)

	

	bin1 = createSprite(700,650,10,100)
	bin2 = createSprite(750,650,10,100)
	bin1.shapeColor = "red"
	bin2.shapeColor = "red"


	ground = createSprite(400,700,800,10)
	ball = createSprite(400,700,10,10)

//Create the Bodies Here.
      engine = Engine.create();
     world = engine.world;

	 
	groundbody = Bodies.rectangle(400,700,800,5,{isStatic:true})
    World.add(world,groundbody)



	ballbody = Bodies.circle(400,690,10,{restitution:1})
	World.add(world,ballbody)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.x = groundbody.position.x
  ground.y = groundbody.position.y

  ball.x = ballbody.position.x
  ball.y = ballbody.position.y
  drawSprites();

  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ballbody.body,ballbody.body.position,{x:85,y:-85})
	}
	
}



