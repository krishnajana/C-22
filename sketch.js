const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine, world;
var ground, groundOptions;
var ball, ballOptions;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  groundOptions={
    isStatic:true

  }

  ballOptions={
   restitution:1

  }
  

  ground=Bodies.rectangle(200, 390, 200, 20, groundOptions);
  World.add(world, ground);
  console.log(ground);

  ball=Bodies.circle(200, 100, 20, ballOptions);
  World.add(world, ball);
}

function draw() {
  background("black");
  Engine.update(engine);  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 50, 50);
}