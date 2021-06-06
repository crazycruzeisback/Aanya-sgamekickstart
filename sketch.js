var boyimg,coinimg,polimg,roadimg;

var boy,police,ig,scene;


function preload()
{
    boyimg = loadImage("images/boyr.png");
    coinimg = loadImage("images/coin.png");
    polimg = loadImage("images/police.png");
    roadimg = loadImage("images/road.jpg");
}
function setup()
{
    createCanvas(1300,800);

    scene = createSprite(500,400,1500,800);
    scene.addImage(roadimg);
    scene.scale = 2.55;
    scene.velocityX = -3;
    scene.x = scene.width/2;
    

    boy = createSprite(60,700,20,20);
    boy.addImage(boyimg);
    boy.scale = 0.3;

    ig = createSprite(700,750,1400,20);
    ig.visible = false;
}



function draw()
{
    background(roadimg);

    if(keyDown("space"))
    {
        boy.velocityY = -14;
    }

    if(scene.x<440)
    {
        scene.x = 700;
    }
    boy.velocityY += 0.8;

    boy.collide(ig);

    drawSprites();
}
