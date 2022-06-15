//declarar a biblioteca dos mecanismos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ball, ground;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var bola_op = {
    restitution: 2
  }

  ball = Bodies.circle(100,50,40, bola_op);
  World.add(world, ball);

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20, ground_options);
  World.add(world, ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
 background("green");

 Engine.update(engine);

 ellipse(ball.position.x, ball.position.y, 40);

 fill("black")
 rect(ground.position.x, ground.position.y, 400,20);
  
}

