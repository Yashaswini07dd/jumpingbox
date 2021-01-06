var canvas;
var music;
var pinkSurface , blueSurface, greenSurface, yellowSurface;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     pinkSurface = createSprite(100,600,220,30);
     pinkSurface.shapeColor = "pink";

     blueSurface = createSprite( 280,600,220,30);
     blueSurface.shapeColor = "blue";

     yellowSurface = createSprite(480,600,220,30);
     yellowSurface.shapeColor = "yellow";

     redSurface = createSprite(690,600,230,30);
     redSurface.shapeColor = "red";


    //create box sprite and give velocity
    box = createSprite(random(20,750),500,20,20);
    box.shapeColor = "white";
       box.velocityY = 4;
       box.velocityX = 5;
       
}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();
    box.bounceOff(edges);
    //add condition to check if box touching surface and change color of box

   if (pinkSurface.isTouching(box)&& box.bounceOff(pinkSurface)){
   
   box.shapeColor = "pink";

}
if (blueSurface.isTouching(box)&& box.bounceOff(blueSurface)){
    box.shapeColor = "blue";
     box.velocityX = 0;
     box.velocityY = 0;
    music.stop();
    }
    if (redSurface.isTouching(box)&& box.bounceOff(redSurface)){
        box.shapeColor = "red";
    
        }
        if (yellowSurface.isTouching(box)&& box.bounceOff(yellowSurface)){
             box.shapeColor = "yellow";
            
            }








drawSprites();
}
