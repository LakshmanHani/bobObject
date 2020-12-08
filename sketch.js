const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof1,roof2,roof3,roof4,roof5
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   roof1 = new Roof(300,200,500,20);
   roof2 = new Roof(375,200,50,20);
   roof2 = new Roof(375,200,50,20);
   roof3 = new Roof(225,200,50,20);
   roof4 = new Roof(145,200,50,20)
   roof5 = new Roof(450,200,50,20)
   bobObject1 = new Bob(300,400,30);
   bobObject2 = new Bob(375,400,30);
   bobObject3 = new Bob(225,400,30);
   bobObject4 = new Bob(145,400,30);
   bobObject5 = new Bob(450,400,30);
   pendulum1 = new Pendulum(bobObject1.body,roof1.body);
   pendulum2 = new Pendulum(bobObject2.body,roof2.body);
   pendulum3 = new Pendulum(bobObject3.body,roof3.body);
   pendulum4 = new Pendulum(bobObject4.body,roof4.body);
   pendulum5 = new Pendulum(bobObject5.body,roof5.body);

}


function draw() {
  rectMode(CENTER);
  background("white");
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  drawSprites();
 
}



