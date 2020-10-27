
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy, boyImage;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var rope;
var gameState = "inHand";

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(280,500,20,50);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,50);

	tree = new Tree(950,320,380,570);
	stone = new Stone(230,450,50,50);

	mango1 = new Mango(900,200,60);
	mango2 = new Mango(950,200,60);
	mango3 = new Mango(800,250,60);
	mango4 = new Mango(990,270,60);
	mango5 = new Mango(1030,260,60);
	mango6 = new Mango(1100,280,60);
	mango7 = new Mango(950,100,60);

	rope = new Rope(stone.body,{x:230,y:450});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  tree.display();
  rope.display();
  rope.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  
  drawSprites();
  stone.display();
 

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
}

function mouseDragged(){
	if(gameState!= "launched"){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
}

function mouseReleased(){
	rope.fly();
	gameState  = "launched"
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position;
	stoneBodyPosition = Lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=Lmango.radius + Lstone.width){
		Matter.Body.setStatic(Lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:450});
		rope.attach(stone.body);
		gameState = "inHand";
	}
}