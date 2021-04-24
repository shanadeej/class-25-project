
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;	

function preload()
{
var engine;
var world;
var ball;
var bin;
var line;
var line2;
var crumpledpaper_img;
var dustbin;

crumpledpaper_img.loadImage("whjrcrumpled papeer.jpg");
dustbin.loadImage("dustbin.png");


}

function setup() {
	createCanvas(700, 450);

	

	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.

	ball=createSprite(50,380,10,10);
	ball.addImage("paper",crumpledpaper_img);
	ball.scale=0.1;
	bin=createSprite(610,400,80,10);
	bin.addImage("box",dustbin);
	bin.scale=0.1;
	line1=createSprite(575,380,10,30);
	line2=createSprite(645,380,10,30);
	line=createSprite(350,405,700,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.x=mouseX;
  ball.y=mouseY;
  
	

  drawSprites();
 
}



