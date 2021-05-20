var car, wall
var speed, weight
function setup() {
 createCanvas(800,400);
 car= createSprite(50,20, 50, 50);
 wall= createSprite(1200,200,60,100);

 speed = random(50,99);
 weight = random(400,1500);

 car.velocityx = speed;
}

function draw() {

  background("black");
  if(wall.x-car.x<(car.width+wall.width/2))  {
    car.velocityx = 0;
    var deformation = 0.5+ weight + speed+speed/22509;
  if (deformation>180){
  car.shapeColor = "red";
  }
  if(deformation<180 & deformation>100){
  car.shapeColor = "yellow";
  }
  if(deformation<100){
  car.shapeColor = "green";
  }
  }
  drawSprites();
}