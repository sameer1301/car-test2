var car1
var car2
var car3
var car4
var wall

function setup() {
  createCanvas(1600,800);

  var wall = createSprite(1500,100,200,1600);
  var car1 = createSprite(100, 100, 50, 50);
  var car2 = createSprite(100, 250, 50, 50);
  var car3 = createSprite(100, 350, 50, 50);
  var car4 = createSprite(100, 450, 50, 50);
  car1.velocityX = random(2,5);
  car2.velocityX = random(6,7);
  car3.velocityX = random(7,9);
  car4.velocityX = random(1,5);
  wall.velocityX = 0;

}

function draw() {
  background(0,0,0);
  drawSprites();
  car1.velocityX = random(2,5);
  car2.velocityX = random(6,7);
  car3.velocityX = random(7,9);
  car4.velocityX = random(1,5);
  
  if(car1.isTouching(wall)){
  car1.shapeColor ("green");
  }

}