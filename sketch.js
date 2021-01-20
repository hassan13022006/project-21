var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(750,600);

    surface1 = createSprite(75,550,180,20);
    surface1.shapeColor = "red";
    surface2 = createSprite(275,550,180,20);
    surface2.shapeColor = "blue";
    surface3 = createSprite(475,550,180,20);
    surface3.shapeColor = "green";
    surface4 = createSprite(675,550,180,20);
    surface4.shapeColor = "yellow";
    //create 4 different surfaces

    box = createSprite(random(20,700));
    box.velocityX= -3
    box.velocityY = 4
    box.scale = 0.3;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

   

    //create edgeSprite
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor = "red";
      
    }
 
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
      


    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "green";
        
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "yellow";
       
    }
    
    edges= createEdgeSprites();
    box.bounceOff(edges);
    

    drawSprites();


    //add condition to check if box touching surface and make it box
}
