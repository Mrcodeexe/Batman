
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drop1, drop2, drop3, drop4, drop5, drop6, drop7, drop8
var maxDrops=100
var drops=[]
function preload()
{
	

}

function setup() {
	createCanvas(400, 700);


	engine = Engine.create();
	world = engine.world;

	if(frameCount%150===0){
		for(var i=0;i<maxDrops;i++){
			drops.push(new Drops(random(0,400), random(0,200)));
		}
	}
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	for(var i=0; i<maxDrops; i++){
		drops[i].display()
		drops[i].updateY();
	}
  

}



