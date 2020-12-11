var mario,marioImage
var background,backgroundImage
function preload(){

marioImage = loadImage("Images/mario running left leg front.png");
backgroundImage = loadImage("Images/ground and sky.png");

}
  

function setup() {
  createCanvas(2043,990);


mario = createSprite(55,750,20,5);
mario.addImage("mario",marioImage);
mario.scale = 0.1

}

function draw() {
  background(backgroundImage); 
  
  
  drawSprites();
}