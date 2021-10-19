const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backgroundimg;
var snow1;
var snow;



function preload(){
  backgroundimg = loadImage("snow2.jpg");
  SnowwImage = loadImage("snow5.webp");
  Snoww2Image = loadImage("snow4.webp");
  
  }
  

function setup() {
 var canvas = createCanvas(800,400);

 Snoww = createSprite(50,50,30,30);
 Snoww.addImage("Snoww",SnowwImage);
Snoww.scale = 0.1;
Snoww.velocityY = 1;

Snoww2 = createSprite(100,50,30,30);
 Snoww2.addImage("Snoww2",Snoww2Image);
Snoww2.scale = 0.1;
Snoww2.velocityY = 2;

Snoww3 = createSprite(150,50,30,30);
Snoww3.addImage("Snoww3",SnowwImage);
Snoww3.scale = 0.1;
Snoww3.velocityY = 1;
  
Snoww4 = createSprite(200,50,30,30);
 Snoww4.addImage("Snoww4",Snoww2Image);
Snoww4.scale = 0.1;
Snoww4.velocityY = 2;

Snoww5 = createSprite(250,50,30,30);
 Snoww5.addImage("Snoww5",SnowwImage);
Snoww5.scale = 0.1;
Snoww5.velocityY = 1;


Snoww6 = createSprite(300,50,30,30);
 Snoww6.addImage("Snoww6",Snoww2Image);
Snoww6.scale = 0.1;
Snoww6.velocityY = 2;



Snoww7 = createSprite(300,50,30,30);
 Snoww7.addImage("Snoww7",SnowwImage);
Snoww7.scale = 0.1;
Snoww7.velocityY = 1;




Snoww8= createSprite(350,50,30,30);
 Snoww8.addImage("Snoww8",Snoww2Image);
Snoww8.scale = 0.1;
Snoww8.velocityY = 2;



Snoww9= createSprite(400,50,30,30);
 Snoww9.addImage("Snoww9",SnowwImage);
Snoww9.scale = 0.1;
Snoww9.velocityY = 1;





Snoww10= createSprite(450,50,30,30);
 Snoww10.addImage("Snoww10",Snoww2Image);
Snoww10.scale = 0.1;
Snoww10.velocityY = 2;









}





function draw() {
 
  background(backgroundimg);  
  
  drawSprites();
}