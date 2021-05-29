var backGroundImg;
var cat, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2;

function preload() {
    //load the images here
    backGroundImg = loadImage ("garden.png");
    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(350,300,20,20);
    cat.addAnimation("cat1", catImg1);
    cat.addAnimation("catRunning", catImg2);
    mouse = createSprite(150,300,20,20);
    mouse.addAnimation("mouse1", mouseImg1);
    mouse.addAnimation("mouseTeasing", mouseImg2);
}

function draw() {

    background(backGroundImg);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2);{
        cat.changeAnimation("catRunning", catImg2);
        mouse.changeAnimation("mouseRunning", mouseImg2);
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown === LEFT_ARROW){
       
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
    }

}
