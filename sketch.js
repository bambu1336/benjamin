var box;



function setup() {
  createCanvas(600,600);
  box=createSprite(300,300,50,50);
  box.shapeColor="red";
}

function draw() 
{
   background(0);
if (keyIsDown(RIGHT_ARROW)) {
  box.x= box.x+5;
}else if(keyIsDown(LEFT_ARROW)){
  box.x= box.x-5;
}
if (keyIsDown(UP_ARROW)) {
  box.y= box.y-5;
}else if(keyIsDown(DOWN_ARROW)){
  box.y= box.y+5;
}
if (keyDown("space")) {
background("green")
}else{
  background("purple")
}
  drawSprites();
}




