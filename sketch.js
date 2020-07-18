var ground,polygon;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(800,400);
  ground = createSprite(400,390,800,20);
  ground.shapeColor = "black";

  ground = createSprite(400,265,300,20);
  ground.shapeColor = "brown";

  block1 = createSprite(295,235,30,40);
  block1.shapeColor = "lightBlue";

  block2 = createSprite(330,235,30,40);
  block2.shapeColor = "lightBlue";

  block3 = createSprite(365,235,30,40);
  block3.shapeColor = "lightBlue";

  block4 = createSprite(400,235,30,40);
  block4.shapeColor = "lightBlue";

  block5 = createSprite(435,235,30,40);
  block5.shapeColor = "lightBlue";

  block6 = createSprite(470,235,30,40);
  block6.shapeColor = "lightBlue";

  block7 = createSprite(505,235,30,40);
  block7.shapeColor = "lightBlue";

  block8 = createSprite(330,190,30,40);
  block8.shapeColor = "lightPink";

  block9 = createSprite(365,190,30,40);
  block9.shapeColor = "lightPink";

  block10 = createSprite(400,190,30,40);
  block10.shapeColor = "lightPink";

  block11 = createSprite(435,190,30,40);
  block11.shapeColor = "lightPink";

  block12 = createSprite(470,190,30,40);
  block12.shapeColor = "lightPink";

  block13 = createSprite(365,145,30,40);
  block13.shapeColor = "lightGreen";

  block14 = createSprite(400,145,30,40);
  block14.shapeColor = "lightGreen";

  block15 = createSprite(435,145,30,40);
  block15.shapeColor = "lightGreen";

  block16 = createSprite(400,100,30,40);
  block16.shapeColor = "lightGrey";

 

 
  


}

function draw() {
  background(0,0,50.2); 
  
  
  
  drawSprites();
 

 
}
