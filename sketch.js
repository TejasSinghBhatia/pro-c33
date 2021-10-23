var background,backgroundImage

const Engine=Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  background=createSprite(400,250,800,400);
  background.addImage(backgroundImage)

  snow1= new snow(200,10)
  snow2= new snow(100,10)
  snow3= new snow(300,10)
  snow4= new snow(400,10)
  snow5= new snow(500,10)  
  snow6= new snow(600,10)

}
function preload(){
backgroundImage=loadImage("snow3.jpg")
}
function draw() {
  Engine.update(engine);
  drawSprites();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
}