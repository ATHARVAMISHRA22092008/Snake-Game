var a,b,c,d
var snake; 
var food; 
function setup() {
  createCanvas(400,400);
 a = createSprite(0,200,1,900);
 b = createSprite(400,200,1,900);
 c = createSprite(200,0,900,1);
 d = createSprite(200,400,900,1);
 snake = createSprite(200,200,10,10);
 food = new apple(Math.random(),Math.random,8,8);
}

function draw() {
  background(255,255,255);
  if(snake.isTouching(a)){
    snake.destroy();
    background("black");
  }
  if(snake.isTouching(b)){
    snake.destroy();
    background("black");
  } 
  if(snake.isTouching(c)){
    snake.destroy();
    background("black");
  } 
  if(snake.isTouching(d)){
    snake.destroy();
    background("black");
  }
  if(keyDown("up")){
    snake.velocityX = 0;
    snake.velocityY = 8;
  }
  if(keyDown("down")){
    snake.velocityX = 0;
    snake.velocityY = -8;
  }
  if(keyDown("right")){
    snake.velocityX = 8;
    snake.velocityY = 0;
  }
  if(keyDown("left")){
    snake.velocityX = -8;
    snake.velocityY = 0;
  }
  if(snake.isTouching(food)){
    snake.height = snake.height+10;
  }
  snake.display();
  food.display();
  drawSprites();
}
