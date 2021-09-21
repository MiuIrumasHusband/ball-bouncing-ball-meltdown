const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var mrball
var miusbutton1
var makisbutton2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  miusbutton1 = createImg('right.png')
  miusbutton1.position (220,30)
  miusbutton1.size (50,50)
  miusbutton1.mouseClicked(hforce)

  makisbutton2 = createImg('up.png')
  makisbutton2.position (20,30)
  makisbutton2.size (50,50)
  makisbutton2.mouseClicked(vforce)
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
var options = {
restitution: 0.001

}
mrball = Bodies.circle(200,100,20, options)
World.add (world,mrball)

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse (mrball.position.x, mrball.position.y, 20)
}

function hforce(){
  Matter.Body.applyForce(mrball,{x:0,y:0},{x:0.05,y:0})

}

function vforce(){
  Matter.Body.applyForce(mrball,{x:0,y:0},{x:0,y:-0.05})

}










