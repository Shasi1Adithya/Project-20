function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function preload(){
bg= loadImage ("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym21.png","image/gym22.png");
eat = loadAnimation("add image urls here");
drink = loadAnimation("add image urls here");
move = loadAnimation("add image urls here");
}


astronaut = createSprite(300,230);
astronaut. addAnimation("sleeping", sleep);
astronaut.scale = 0.1;


if(keyDown("UP_ARROW")){
 astronaut.addAnimation("brushing",brush);
 astronaut.changeAnimation("brushing");
 astronaut.y = 350;
 astronaut.velocityX = 0;
 astronaut.velocityY = 0;