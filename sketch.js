
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b,c,ground,b1,b2,dust,d,g;

function preload(){
	dust=loadImage("1.png");
}


function setup() {
	var canvas = createCanvas(1200,700);
	g=createSprite(600,650,1200,45);
	g.shapeColor="Grey";

	d=createSprite(950,565,140,130,130);
	d.addImage(dust);
	d.scale=0.4;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,690,1200,60);
	c= new Paper(200,550,50,50);
	
	
	b= new Dustbin(950,623,150,10);
	b1= new Dustbin(880,578,10,135);
	b2= new Dustbin(1020,578,10,135);
	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("LightGrey");
  c.display();
  ground.display();
  b.display();
  b1.display();
  b2.display();
  drawSprites();
  keyPressed();

  

}
function keyPressed(){
	if(keyCode === UP_ARROW && c.body.position.x<=400 ){
		Matter.Body.applyForce(c.body,c.body.position,{x:60,y:-60});
		
	}
	
}



