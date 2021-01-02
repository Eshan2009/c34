const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1;
var wreckingBall
var chain

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,400,50,50);
    box2 = new Box(700,450,50,50);
    box3 = new Box(700,500,50,50);
    box4 = new Box(700,550,50,50);
    box5 = new Box(700,600,50,50);
    box6 = new Box(700,650,50,50);
    box7 = new Box(600,400,50,50);
    box8 = new Box(600,450,50,50);
    box9 = new Box(600,500,50,50);
    box10 = new Box(600,550,50,50);
    box11= new Box(600,600,50,50);
    box12 = new Box(600,650,50,50);
    box13 = new Box(500,400,50,50);
    box14 = new Box(500,450,50,50);
    box15 = new Box(500,500,50,50);
    box16 = new Box(500,550,50,50);
    box17 = new Box(500,600,50,50);
    box18 = new Box(500,650,50,50);
    wreckingBall = new ball(300, 500, 50);
    chain = new Chain(wreckingBall.body,{x: 200, y:100});
    ground = new Ground(400,height,800,20)

}

function draw(){
    background(155);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box12.display();
    box13.display();
    box11.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    wreckingBall.display();
    chain.display();
    ground.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(wreckingBall.body,{x: mouseX,y: mouseY})
}
function mouserealesed(){
    chain.fly() 
}
