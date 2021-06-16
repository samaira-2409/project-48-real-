const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var pacman,ghost;
var pacdownImg,pacleftImg,pacrightImg,pacupImg;
var ghost1downImg,ghost1leftImg,ghost1rightImg,ghost1upImg;
var ghost2downImg,ghost2leftImg,ghost2rightImg,ghost2upImg;
var ghost3downImg,ghost3leftImg,ghost3rightImg,ghost3upImg;
var ggImg;
var appleImg,bellImg,cherryImg,strawberry;
var fruit1,fruit2,fruit3,fruit4,fruit5,fruit6;
var food = [];
var maxSpeed=3;
var score =0;
var edges;
var engine,world;
var gameState = "play";


function preload(){
  pacdownImg = loadAnimation("images/pacmanimages/pacdown.gif");
  pacleftImg = loadAnimation("images/pacmanimages/pacleft.gif");
  pacrightImg = loadAnimation("images/pacmanimages/pacright.gif");
  pacupImg = loadAnimation("images/pacmanimages/pacup.gif");

   ghost1downImg = loadAnimation("images/pacmanimages/blinkydown.gif");
   ghost1leftImg = loadAnimation("images/pacmanimages/blinkyleft.gif");
   ghost1rightImg = loadAnimation("images/pacmanimages/blinkyright.gif");
   ghost1upImg = loadAnimation("images/pacmanimages/blinkyup.gif");

   ghost2downImg = loadAnimation("images/pacmanimages/clydedown.gif");
   ghost2leftImg = loadAnimation("images/pacmanimages/clydeleft.gif");
   ghost2rightImg = loadAnimation("images/pacmanimages/clyderight.gif");
   ghost2upImg = loadAnimation("images/pacmanimages/clydeup.gif");
   ghost3downImg = loadAnimation("images/pacmanimages/inkydown.gif");
   ghost3rightImg = loadAnimation("images/pacmanimages/inkyright.gif");
   ghost3leftImg = loadImage("images/pacmanimages/inkyleft.gif");
   ghost3upImg = loadImage("images/pacmanimages/inkyup.gif");
   
   appleImg = loadImage("images/pacmanimages/apple.png");
   bellImg = loadImage("images/pacmanimages/bell.png");
   cherryImg = loadImage("images/pacmanimages/cherries.png");
   ggImg = loadAnimation("images/pacmanimages/blueghost.gif");
   strawberry = loadImage("images/pacmanimages/strawberry.png");
   melonImg = loadImage("images/pacmanimages/melon.png");
   orangeImg = loadImage("images/pacmanimages/orange.png");

   bellImg = loadImage("images/pacmanimages/bell.png");

}

function setup() {
  createCanvas(600, 600);
  engine = Engine.create();
  world = engine.world;
  //ground = new Ground(width/2,height,width,20);
  
      pacman = createSprite(400,450,15,15);
      pacman.shapeColor="blue"
      //pacman.addAnimation("pacleft",pacleftImg);
     //pacman.scale = 1.0;
      

    fruit1 = createSprite(140,220,10,10);
    fruit1.addImage("strawberry",strawberry);

    fruit2 = createSprite(220,560,10,10);
    fruit2.addImage("cherry",cherryImg);

    fruit3= createSprite(465,160,10,10);
    fruit3.addImage("apple",appleImg);

    fruit4= createSprite(570,575,10,10);
    fruit4.addImage("melon",melonImg);
    fruit5= createSprite(300,400,10,10);
    fruit5.addImage("orange",orangeImg);
    fruit6= createSprite(320,100,10,10);
    fruit6.addImage("melon",melonImg);

    bell = createSprite(300,300,50,50);
    bell.addAnimation("bell",bellImg)


  edges = createEdgeSprites();

  ghostGroup = new Group();
  
     



 wall1 = new Maze(5,55,10,120)
 wall2 = new Maze(0,0,220,10)
 wall3 = new Maze(112,10,10,110)
 wall4 = new Maze(142,70,70,10)
 wall5 = new Maze(180,55,10,40)
 wall6 = new Maze(300,34,250,10)
 wall7 = new Maze(430,55,10,50)
 wall8 = new Maze(450,85,50,10)
 wall9 = new Maze(480,55,10,70)
 wall10 = new Maze(535,25,109,10)
 wall11 = new Maze(600,85,20,130)
 wall12 = new Maze(60,90,10,80)
 wall13 = new Maze(80,125,50,10)
 wall14 = new Maze(180,125,60,10)
 wall15 = new Maze(300,60,140,10)
 wall16 = new Maze(300,90,10,50)
 wall17 = new Maze(409,125,60,10)
 wall18 = new Maze(532,90,10,80)
 wall19 = new Maze(517,125,40,10)
 wall20 = new Maze(0,200,100,10)
 wall21 = new Maze(55,235,10,80)
 wall22 = new Maze(25,280,70,10)
 
 
 wall23 = new Maze(115,240,10,70)
 wall24 = new Maze(165,240,10,70)
 wall25 = new Maze(300,210,120,10)
 wall26 = new Maze(425,240,10,70)
 wall27 = new Maze(475,240,10,70)
 wall28 = new Maze(570,280,70,10)
 wall29 = new Maze(530,245,10,80)
 wall30 = new Maze(570,200,90,10)

 wall31 = new Maze(165,350,10,70)
 wall32 = new Maze(475,350,10,70)
 wall33 = new Maze(115,320,10,10)
 wall34 = new Maze(530,320,10,10)
 wall35 = new Maze(300,380,120,10)

 wall36 = new Maze(300,440,120,10)
 wall37 = new Maze(300,490,195,10)
 wall38 = new Maze(300,595,600,10)
 wall39 = new Maze(5,550,10,80)
 wall40 = new Maze(595,550,10,80)

 wall41 = new Maze(300,565,10,50)
 wall42 = new Maze(505,540,130,10)
 wall43 = new Maze(535,510,10,50)
 wall44 = new Maze(100,550,130,10)
 wall45 = new Maze(65,520,10,50)

 wall46 = new Maze(90,450,100,10)
 wall47 = new Maze(510,450,100,10)
 wall48 = new Maze(35,410,10,90)
 wall49 = new Maze(560,410,10,90)
 wall50 = new Maze(250,300,10,60)


 wall52 = new Maze(350,300,10,60)
 wall53 = new Maze(300,330,100,10)

 
 
 

 //for (var j = 15; j <=width; j=j+15) { 
  //food.push(new Food(j,170));
//}
 keyPressed();
 

}
function draw(){
  background(0);
  Engine.update(engine);

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();

  wall23.display();
  wall24.display();
  wall25.display();
  wall26.display();
  wall27.display();
  wall28.display();
  wall29.display();
  wall30.display();

  wall31.display();
  wall32.display();
  wall33.display();
  wall34.display();
  wall35.display();

  wall36.display();
  wall37.display();
  wall38.display();
  wall39.display();
  wall40.display();

  wall41.display();
  wall42.display();
  wall43.display();
  wall44.display();
  wall45.display();

  wall46.display();
  wall47.display();
  wall48.display();
  wall49.display();
  wall50.display();

  
  wall52.display();
  wall53.display();

  //ghost.bounceOff(edges);
  
 if(gameState === "play"){
  pacman.collide(edges);
 
  
  


  

  //image(pacmanImg,400,450,15,15);
  if(pacman.isTouching(fruit1) ||
  pacman.isTouching(fruit2)  || pacman.isTouching(fruit3) || pacman.isTouching(fruit4) 
  || pacman.isTouching(fruit5) || pacman.isTouching(fruit6)){
  pacman.width = pacman.width+2;
  pacman.height = pacman.height+2;
 }
 if(pacman.isTouching(ghostGroup)){
 pacman.width = pacman.width-2;
 pacman.height = pacman.height-2;
}
if(pacman.width<=5 && pacman.height<=5){
  ghostGroup.setVelocityXEach(0);
  ghostGroup.setVelocityYEach(0);
  pacman.visible = false;
  ghostGroup.destroyEach();
  strokeWeight(10);
  fill("red");
  textSize(24);
  text("OOPS!! TRY AGAIN!!",175,300);
}

if(pacman.collide(bell)){
  pacman.visible = false;
  gameState = "end";
 }

spawnGhosts();
keyPressed();
 }


 
 if(gameState === "end"){
  ghostGroup.setVelocityXEach(0);
  ghostGroup.setVelocityYEach(0);
  strokeWeight(10);
  fill("green");
  textSize(40);
  text("YOU WIN!!!",200,300);
 }


 
 
 


  drawSprites();
  
 // for(var i= 0; i <=food.length ; i++){
   // food[i].display();
 // }
  
}

function keyPressed(){
if(keyCode === 38){
  pacman.position.y = pacman.position.y -5;
  pacman.shapeColor="red"
}

if(keyCode === 40){
  pacman.position.y = pacman.position.y +5;
  pacman.shapeColor="green"

}

if(keyCode === 37){
  pacman.position.x = pacman.position.x -5;
  pacman.shapeColor="yellow"
}

if(keyCode === 39){
  pacman.position.x = pacman.position.x +5;
  pacman.shapeColor="pink";
}

}

function spawnGhosts(){
  if(frameCount%15===0){
    ghost = createSprite((random(100,500),random(200,400),20,20));
    ghost.velocityX = random(-3,3);
    ghost.velocityY = random(-3,3);
    var rand = Math.round(random(1,3))
    switch(rand){
      case 1 : ghost.addAnimation("ghost1",ghost1downImg);
      break;
      case 2 : ghost.addAnimation("ghost2",ghost2downImg);
      break;
      case 3 : ghost.addAnimation("ghost3",ghost3downImg);
      break;
      default : break;
    }
    ghostGroup.add(ghost);
    ghost.lifetime = 1000;
    //ghostGroup.bounceOff(wall53)
  }
}






