
var tom, jerry;
var tomAnim, tomRunning, tomCollide;
var jerryIdle, jerryJump, collidedJerry;
var backGround, backGroundImage;

function preload() {
    tomAnim = loadImage("tomOne.png");
    tomCollide = loadImage("tomFour.png");
    tomRunning = loadAnimation("tomTwo.png","tomThree.png");

    jerryIdle = loadImage("jerryOne.png");
    collidedJerry = loadImage("jerryFour.png");
    jerryJump = loadAnimation("jerryTwo.png","jerryThree.png");

    backGroundImage = loadImage("garden.png");
}

function setup(){
    createCanvas(800,600);
    
    backGround = createSprite(400,400,800,600);
    backGround.addImage("BGI",backGroundImage);

    jerry = createSprite(150,500,40,15);

    tom = createSprite(350,500,60,40);
    tom.addImage("tomIdle",tomAnim);

    jerry.setCollider("rectangle", 0, 0, jerry.width, jerry.height);
    jerry.debug = true;
}

function draw() {

    background(255);
    
    if(tom.x - jerry.x < (tom.width/2 - jerry.width/2)){
        tom.collide(jerry);

        tom.addImage("tomTouchJerry",tomCollide);
        tom.changeImage("tomTouchJerry");

        jerry.addImage("jerry_Collide",collidedJerry);
        jerry.changeImage("jerry_Collide");
    }

    tom.scale = 0.3;
    jerry.scale = 0.2;

    drawSprites();
}

function keyPressed(){
    if(keyDown === "LEFT_ARROW"){

        tom.velocityX = -3;

        tom.addAnimation("tomChase",tomRunning);
        tom.changeAnimtion("tomChase");

        jerry.addAnimation("jerry'sJump",jerryJump);
        jerry.changeAnimation("jerry'sJump");
    }
}
