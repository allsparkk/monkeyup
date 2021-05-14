var survivalTime=0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacelImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
//create monkey
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.X=ground.width/2
}


function draw() {
background("white")
  drawSprites()
  monkey.collide(ground)
  if(keyDown("space")&& monkey.y >= 270){
    monkey.velocityY=-12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(280,180));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200
  }
  
  if (frameCount % 80 === 0) {
    var rock = createSprite(600,120,40,10);
    rock.y = Math.round(random(330,330));
    rock.addImage(obstacelImage);
    rock.scale = 0.1;
    rock.velocityX = -3;
    rock.lifetime = 200
  }
  
  stroke=("white")
  textSize(20)
  fill("white")
  text("Score: "+ score,500,50)
  
  stroke=("black")
  textSize(20)
  fill("black")
   survivalTime=Math.ceil(frameCount/frameRate())
  text(" survivalTime: "+  survivalTime,100,50)
  
  
}






