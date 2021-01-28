
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var time=0 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
monkey=createSprite(80,315,10,10)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,350,1200,10)
  ground.velocityX=-5
  obsgroup=new Group()
  foodgroup=new Group()
}


function draw() {
background("green")
  if (ground.x<0){
    ground.x=400
  }
 if (keyDown("space")) {
   monkey.velocityY=-9
 }
  monkey.velocityY=monkey.velocityY+0.5
  monkey.collide(ground)
  
  obticals()
  foods()

  drawSprites()
 text("score="+score,500,50) 
  if (obsgroup.isTouching(monkey)){
    monkey.velocityY=0
    ground.velocityX=0
    obsgroup.setVelocityXEach(0)
    obsgroup.setLifetimeEach(-1)
    foodgroup.setVelocityXEach(0)
    foodgroup.setLifetimeEach(-1)    
  }
  time=Math.ceil(frameCount/frameRate())
  text("Surivaltime="+time,100,50)  
  
}
function obticals (){
  if (frameCount%200===0){
    obs=createSprite(800,320,10,40)
    obs.velocityX=-4
    obs.addImage(obstaceImage)
    obs.scale=0.15
    obs.lifetime=300
    obsgroup.add(obs)
    
  }
}
function foods (){
  if (frameCount%200===0){
    banana=createSprite(600,250,10,40)
    banana.velocityX=-4
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.lifetime=300
    foodgroup.add(banana)
    
  }
}



