var astronaut, bath, brush, drink, eat, gym, move, sleep;
var bg, iss;

function preload() {
  iss=loadImage("iss.png");

  bath=loadAnimation("bath1.png", "bath2.png");
  brush=loadAnimation("brush.png");
  drink=loadAnimation("drink1.png", "drink2.png");
  eat=loadAnimation("eat1.png", "eat2.png");
  gym=loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  move=loadAnimation("move.png", "move1.png");
  sleep=loadAnimation("sleep.png");
}

function setup() {
  createCanvas(400, 400);

  bg=createSprite(200, 200);
  bg.addImage(iss);
  bg.scale=0.1;

  astronaut=createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale=0.05;
}

function draw() {
  background(220);

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if (keyDown(UP_ARROW)) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.x=200;
    astronaut.y=270;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown(DOWN_ARROW)) {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.x=150;
    astronaut.y=270;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eat", eat);
    astronaut.changeAnimation("eat");
    astronaut.x=100;
    astronaut.y=250;
    astronaut.velocityX=-1;
    astronaut.velocityY=-1;
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bath", bath);
    astronaut.changeAnimation("bath");
    astronaut.x=230;
    astronaut.y=290;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("M")){
    astronaut.addAnimation("move", move);
    astronaut.changeAnimation("move");
    astronaut.velocityX=1;
    astronaut.velocityY=-1;
  }

  drawSprites();
}