var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  bullet = createSprite(150, 200, 10, 10);
  wall = createSprite(750,200,thickness,height/2);
  
  speed = random(223,321);
  weight = random(30,52);
 
 
}

function draw() {
  background(0); 
  
  bullet.velocityX = speed;
  if(bullet.isTouching(wall)){
    var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(deformation < 8.5){
    wall.shapeColor="green";
  }
   }
  if(deformation > 8.5){
    wall.shapeColor="red";
  }

  print(deformation);
  

  drawSprites();

}
 