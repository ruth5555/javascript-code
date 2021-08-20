
function setup() {
  createCanvas(400,400);
  var ruth=createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
drawSprites();
if(keyDown("enter"))
{
  ruth.velocityY=0.5;
}
}




