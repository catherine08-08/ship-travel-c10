
function preload(){
SeaImage = loadImage("sea.png")
shipImage = loadAnimation ("ship-1.png","ship-2.png","ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  seaSprite = createSprite (400,200,200,200) 
  seaSprite.addImage (SeaImage)
  shipSprite = createSprite (200,200,50,50)
  shipSprite.addAnimation ("ship",shipImage)
  shipSprite.scale=0.4
  seaSprite.velocityX = -3
}

function draw() {
  background("blue");
if(seaSprite.x<0){
  seaSprite.x = 400
}
 drawSprites ()
}