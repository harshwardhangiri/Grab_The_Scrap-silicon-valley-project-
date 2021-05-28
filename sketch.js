
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//creatig levels of game
var home,level1,level2,level3,end,won1,won2,won3,won,how_to_play;
var gameState = "home";
//creating varieables for sprites
var backgroundimg,background1 ;
var boy,boyimg;
var NONbioWaste1,NONbioWaste1Group,NONbioWaste3,NONbioWaste2Group,NONbioWaste3,NONbioWaste3Group,NONbioWaste4,NONbioWaste4Group;
var a,b,c,d,e,f,g,h,i;
var x,y,z,w,endimg,homeimg,howtoplay;
var obstacle,obstacle1,obstacle2,obstacle3,obstacle4,obstacleGroup;
var bioWaste1,bioWaste1Group,bioWaste2,bioWaste2Group;
var E_Waste1,E_Waste1Group,E_Waste2,E_Waste2Group,E_Waste3,E_Waste3Group;
var score1 = 0;
var score2 = 0;
var score3 = 0;

function preload(){
//loading images
	a = loadImage("a.png");
	b = loadImage("b.png");
	c = loadImage("c.png");
	d = loadImage("d.png");
	e = loadImage("e.png");
	f = loadImage("f.png");
	g = loadImage("g.png");
	h = loadImage("h.png");
	i = loadImage("i.png");

	obstacle1 = loadImage("obstacle1.png");
	obstacle2 = loadImage("obstacle2.png");
	obstacle3 = loadImage("obstacle3.png");
	obstacle4 = loadImage("obstacle4.png");

	x = loadImage("level1.png");
	y = loadImage("level2.png");
	z = loadImage("level3.png");
	w = loadImage("won.png");
	endimg = loadImage("end.png");
	homeimg = loadImage("home.png");
	howtoplay = loadImage("howtoplay.png");
	
	
	
	backgroundimg = loadImage("road.jpg");
	boyimg = loadImage("boy.gif");

         }

function setup() {
	createCanvas(displayWidth,displayHeight);
//adding the backgr
	background1 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
	background1.scale = 0.5;
//adding the main charecter
	boy = createSprite(displayWidth/2,displayHeight-250,40,100);
	boy.addImage("abcd",boyimg);
	//boy.debug=true;
	boy.setCollider("rectangle",0,0,250,450)
	boy.scale = 0.2;
//adding the groups
	NONbioWaste1Group = createGroup();
	NONbioWaste2Group = createGroup();
	NONbioWaste3Group = createGroup();
	NONbioWaste4Group = createGroup();
	bioWaste1Group = createGroup();
	bioWaste2Group = createGroup();
	E_Waste1Group = createGroup();
	E_Waste2Group = createGroup();
	E_Waste3Group = createGroup();
	obstacleGroup= createGroup();
//creating edge sprite
    edges = createEdgeSprites() ; 
	boy.bounceOff(edges[0]); 
	boy.bounceOff(edges[1]);
  
	engine = Engine.create();
	world = engine.world;


//Create the Bodies Here.
     Engine.run(engine);
  
      }


function draw() {
  
     rectMode(CENTER);
     background(135, 201, 42);

if(gameState ==="home"){
    boy.visible=false;
    background1.addImage(homeimg)
	background1.scale=0.95;
if (keyDown('space') && gameState === "home"){
	gameState ="how_to_play"
   }
}

if(gameState ==="how_to_play"){
    background1.addImage(howtoplay);

if (keyDown(UP_ARROW) && gameState === "how_to_play"){
	gameState = "level1"
	 }
}
//level1
if(gameState ==="level1"){
	textSize(20);
	fill ("blue")
	text ("Trash Collected: "+score1,displayWidth/40,displayHeight/5);
    boy.visible=true;
	background1.addImage(backgroundimg);
	background1.scale = 0.5;
	background1.velocityY = 8;
if(background1.y>displayHeight){
	background1.y = 0
	}

if(obstacleGroup.isTouching(boy)){
	gameState="end"
	score1=0;
	}
	

  //adding score
if(boy.isTouching(NONbioWaste1Group)){
	score1+=5;
	NONbioWaste1Group.destroyEach();
	
   }

if(boy.isTouching(NONbioWaste2Group)){
	score1+=5;
	NONbioWaste2Group.destroyEach();
	
   }

if(boy.isTouching(NONbioWaste3Group)){
	score1+=5;
	NONbioWaste3Group.destroyEach();
	 }

if(boy.isTouching(NONbioWaste4Group)){
	score1+=5;
	NONbioWaste4Group.destroyEach();
   }
   
if(score1>50){
	gameState = "won1"
	score1=0;
   }

if(obstacleGroup.isTouching(NONbioWaste1Group)){
	NONbioWaste1Group.destroyEach();
   }
if(obstacleGroup.isTouching(NONbioWaste2Group)){
    NONbioWaste2Group.destroyEach();
}

if(obstacleGroup.isTouching(NONbioWaste3Group)){
	NONbioWaste3Group.destroyEach();
}

if(obstacleGroup.isTouching(NONbioWaste4Group)){
	NONbioWaste4Group.destroyEach();
}


    spwanObstacle();
//spwaning the waste
    spwanNONbioWaste();
//adding the movement
    left_right();
   }

if(gameState ==="won1"){
	background1.addImage(x);
	background1.velocityY = 0;
	background1.scale=0.4;
	background1.y = 350;

	obstacleGroup.destroyEach();
	NONbioWaste1Group.destroyEach();
	NONbioWaste2Group.destroyEach();
	NONbioWaste3Group.destroyEach();
	NONbioWaste4Group.destroyEach();

	boy.visible=false
	
if(keyDown(RIGHT)){
	gameState="level2";
}

}
   
 
//level2
if (gameState ==="level2"){
	background1.addImage(backgroundimg);
	background1.scale = 0.5;
    background1.velocityY = 8;
if(background1.y>displayHeight){
		background1.y = 0
		}
if(obstacleGroup.isTouching(boy)){
	gameState="end"
	score2 = 0;
	}
	boy.visible=true;
//score
	textSize(20);
    fill ("blue")
    text ("Trash Collected: "+score2,displayWidth/40,displayHeight/5);

 //adding score
if(boy.isTouching(bioWaste1Group)){
	score2+=5
	bioWaste1Group.destroyEach();
	
   }

if(boy.isTouching(bioWaste2Group)){
	score2+=5
	bioWaste2Group.destroyEach();
   }

if(score2>50){
	gameState = "won2"
	score2 = 0;
   }

if(obstacleGroup.isTouching(bioWaste1Group)){
	NONbioWaste1Group.destroyEach();
   }

if(obstacleGroup.isTouching(bioWaste2Group)){
    bioWaste2Group.destroyEach();
}   

    spwanbioWaste();
	spwanObstacle();
	left_right();
   }

if(gameState==="won2"){
	background1.addImage(y);
	background1.scale=1.7;
	background1.y = 350;
	background1.velocityY = 0;
	obstacleGroup.destroyEach();
	bioWaste1Group.destroyEach();
	bioWaste2Group.destroyEach();
	boy.visible=false;

if(keyDown(RIGHT)){
	gameState="level3"
	}

}

   //level3
if(gameState === "level3"){
	background1.addImage(backgroundimg);
    background1.scale = 0.5;
	background1.velocityY = 8;
if(background1.y>displayHeight){
	background1.y = 0
		}
	
if(background1.y > displayHeight){
	background1.y = 1000;
		}

if(obstacleGroup.isTouching(boy)){
	gameState="end"
	score3 = 0;
	}
	boy.visible=true;
//score
	textSize(20);
    fill ("blue")
    text ("Trash Collected: "+score3,displayWidth/40,displayHeight/5);

 //adding score
if(boy.isTouching(E_Waste1Group)){
	score3+=5
	E_Waste1Group.destroyEach();
   }

if(boy.isTouching(E_Waste2Group)){
	score3+=5
	E_Waste2Group.destroyEach();
	}

if(boy.isTouching(E_Waste3Group)){
	score3+=5
	E_Waste3Group.destroyEach();
   }

if(score3 > 50){
	gameState = "won3"
	score3 = 0;
   }

if(obstacleGroup.isTouching(E_Waste1Group)){
	E_Waste1Group.destroyEach();
   }
if(obstacleGroup.isTouching(E_Waste2Group)){
    E_Waste2Group.destroyEach();
}

if(obstacleGroup.isTouching(E_Waste3Group)){
	E_Waste3Group.destroyEach();
}
   spwanObstacle();
   left_right();
   spwanE_Waste();
	}
if(gameState==="won3"){
	background1.addImage(z);
	background1.y = 350;
	background1.scale=1.5;
	background1.velocityY = 0;
	    
	obstacleGroup.destroyEach();
	E_Waste1Group.destroyEach();
	E_Waste2Group.destroyEach();
	E_Waste3Group.destroyEach();
	boy.visible=false
if(keyDown(RIGHT)){
	gameState="won"
	}
	
	}
 
if(gameState ==="won"){
	background1.addImage(w);
	background1.y = 350;
	background1.scale=2
	background1.velocityY = 0;
	
	boy.visible=false
if(keyDown('space') && gameState ==="won"){
	gameState ="level1"
	}

  }

if(gameState==="end"){
	background1.addImage(endimg);
	background1.scale=1
	background1.y = 350;
	background1.velocityY=0;
	boy.visible=false;
	obstacleGroup.destroyEach();
	NONbioWaste1Group.destroyEach();
	NONbioWaste2Group.destroyEach();
	NONbioWaste3Group.destroyEach();
	NONbioWaste4Group.destroyEach();
	bioWaste1Group.destroyEach();
	bioWaste2Group.destroyEach();
	E_Waste1Group.destroyEach();
	E_Waste2Group.destroyEach();
	E_Waste3Group.destroyEach();
	}

if(keyDown('space') && gameState ==="end"){
	gameState="level1"
		}


drawSprites();
 
   }


//movement
function left_right(){
if(keyWentDown(RIGHT)){
	boy.x+=120;
}
if(keyWentDown(LEFT)){
	boy.x-=120;
}
if(boy.x<563){
	boy.x=563
}

if(boy.x>797){
	boy.x=797
}
}

//spwaning trash
function spwanNONbioWaste(){
if (frameCount % 200 === 0) {
	NONbioWaste1 = createSprite(600,0,40,10);
		
	var wow = Math.round(random(1,3));

if(wow===1){
	NONbioWaste1.x = displayWidth/2;
	}
if(wow===2){
	NONbioWaste1.x = displayWidth/2+120;
}
if(wow===3){
	NONbioWaste1.x = displayWidth/2-120;
	}
	NONbioWaste1.addImage(a);
	NONbioWaste1.scale = 0.1;
	NONbioWaste1.velocityY = 3;
	NONbioWaste1.lifetime = 400;
	NONbioWaste1Group.add(NONbioWaste1);
	}

if (frameCount % 150 === 0) {
	NONbioWaste2 = createSprite(600,0,40,10);
			
	var wow = Math.round(random(1,3));
	
if(wow===1){
	NONbioWaste2.x = displayWidth/2;
	}
if(wow===2){
	NONbioWaste2.x = displayWidth/2+120;
	}
if(wow===3){
	NONbioWaste2.x = displayWidth/2-120;
	}
	NONbioWaste2.addImage(b);
	NONbioWaste2.scale = 0.1;
	NONbioWaste2.velocityY = 3;
	NONbioWaste2.lifetime = 400;
	NONbioWaste2Group.add(NONbioWaste2);
	}

if (frameCount % 100 === 0) {
	NONbioWaste3 = createSprite(600,0,40,10);
				
	var wow = Math.round(random(1,3));
		
if(wow===1){
	NONbioWaste3.x = displayWidth/2;
	}
if(wow===2){
	NONbioWaste3.x = displayWidth/2+120;
	}
if(wow===3){
	NONbioWaste3.x = displayWidth/2-120;
	}
	NONbioWaste3.addImage(c);
	NONbioWaste3.scale = 0.02;
	NONbioWaste3.velocityY = 3;
	NONbioWaste3.lifetime = 400;
	NONbioWaste3Group.add(NONbioWaste3);
	}

if (frameCount % 180 === 0) {
	NONbioWaste4 = createSprite(600,0,40,10);
					
	var wow = Math.round(random(1,3));
			
if(wow===1){
	NONbioWaste4.x = displayWidth/2;
	}
if(wow===2){
	NONbioWaste4.x = displayWidth/2+120;
	}
if(wow===3){
	NONbioWaste4.x = displayWidth/2-120;
	}
	NONbioWaste4.addImage(d);
	NONbioWaste4.scale = 0.1;
	NONbioWaste4.velocityY = 3;
	NONbioWaste4.lifetime = 400;
	NONbioWaste4Group.add(NONbioWaste4);
	}




}



function spwanbioWaste(){
if (frameCount % 100 === 0) {
	bioWaste1 = createSprite(600,0,40,10);
		
var wow = Math.round(random(1,3));

if(wow===1){
	bioWaste1.x = displayWidth/2;
	}
if(wow===2){
	bioWaste1.x = displayWidth/2+120;
	}
if(wow===3){
	bioWaste1.x = displayWidth/2-120;
	}
	bioWaste1.addImage(e);
    bioWaste1.scale=0.2;
    bioWaste1.velocityY = 3;
	bioWaste1.lifetime = 400;
	bioWaste1Group.add(bioWaste1);
	}

if (frameCount % 150 === 0) {
	bioWaste2 = createSprite(600,0,40,10);
		
	var wow = Math.round(random(1,3));

if(wow===1){
	bioWaste2.x = displayWidth/2;
	}
if(wow===2){
	bioWaste2.x = displayWidth/2+120;
	}
if(wow===3){
	bioWaste2.x = displayWidth/2-120;
	}
    bioWaste2.addImage(f);
    bioWaste2.scale=0.2;
    bioWaste2.velocityY = 3;
	bioWaste2.lifetime = 400;
	bioWaste2Group.add(bioWaste2);
	}
}


function spwanE_Waste(){

if (frameCount % 200 === 0) {
	E_Waste1 = createSprite(600,0,40,10);
		
	var wow = Math.round(random(1,3));

if(wow===1){
    E_Waste1.x = displayWidth/2;
	}
if(wow===2){
	E_Waste1.x = displayWidth/2+120;
	}
if(wow===3){
	E_Waste1.x = displayWidth/2-120;
	}
	E_Waste1.addImage(g);
	E_Waste1.scale=0.2;
    E_Waste1.velocityY = 3;
	E_Waste1.lifetime = 400;
	E_Waste1Group.add(E_Waste1);
     }

	 
if (frameCount % 100 === 0) {
	E_Waste2 = createSprite(600,0,40,10);
		
	var wow = Math.round(random(1,3));

if(wow===1){
	E_Waste2.x = displayWidth/2;
	}
if(wow===2){
	E_Waste2.x = displayWidth/2+120;
	}
if(wow===3){
	E_Waste2.x = displayWidth/2-120;
	}
    E_Waste2.addImage(h);
	E_Waste2.scale=0.05;
    E_Waste2.velocityY = 3;
	E_Waste2.lifetime = 400;
	E_Waste2Group.add(E_Waste2);
    }

if (frameCount % 150 === 0) {
	E_Waste3 = createSprite(600,0,40,10);
		
	var wow = Math.round(random(1,3));

if(wow===1){
	E_Waste3.x = displayWidth/2;
	}
if(wow===2){
	E_Waste3.x = displayWidth/2+120;
	}
if(wow===3){
	E_Waste3.x = displayWidth/2-120;
	}
    E_Waste3.addImage(i);
	E_Waste3.scale=0.02;
    E_Waste3.velocityY = 3;
	E_Waste3.lifetime = 400;
	E_Waste3Group.add(E_Waste3);
	}
}




function spwanObstacle(){

if (frameCount % 200 === 0) {
	obstacle = createSprite(displayWidth/2,-10,10,10);
	
	var wow1 = Math.round(random(1,3));

if(wow1===1){
	obstacle.x = displayWidth/2;
	}
if(wow1===2){
	obstacle.x = displayWidth/2+120;
	}
if(wow1===3){
	obstacle.x = displayWidth/2-120;
	}
	//obstacle.debug=true
	obstacle.setCollider("rectangle",0,0,100,250);
		
    var num1 = Math.round(random(1,4))
if(num1 === 1){
	obstacle.addImage(obstacle1);
	obstacle.scale = 0.5;
		}

if(num1 === 2){
	obstacle.addImage(obstacle2);
	obstacle.scale = 0.5;
	}

if(num1 === 3){
	obstacle.addImage(obstacle3);
	obstacle.scale = 0.8;
	}

if(num1 === 4){
	obstacle.addImage(obstacle4);
	obstacle.scale = 0.5;
	}
		
    obstacle.velocityY = 3;
	obstacle.lifetime = 400;
	obstacleGroup.add(obstacle);
	}

}