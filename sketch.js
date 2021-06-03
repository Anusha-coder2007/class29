const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//to create variables
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
//to preload Images
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    //to create canvas
    var canvas = createCanvas(1200,400);
    //to create engine and world
    engine = Engine.create();
    world = engine.world;

   //to create ground
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
   //to create boxes
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    //to create pigs
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
   //creates a box
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    //to create pig
    pig3 = new Pig(810, 220);
// to create log
    log3 =  new Log(810,180,300, PI/2);
//to create box
    box5 = new Box(810,160,70,70);
    //to create log
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
  // to create a bird
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}