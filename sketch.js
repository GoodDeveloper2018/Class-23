const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var engine,world;
var box1,box2
var ground

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100)
    ground = new Ground(200,height,400,20)


}

function draw() {
  Engine.update(engine);
    background("grey");
    box1.display()
    box2.display()
    ground.display()
}