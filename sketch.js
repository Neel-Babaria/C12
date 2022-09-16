var trex ,trex_running;
var ground

function preload(){
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png')
  groundimage = loadImage('ground2.png')
  cloud = loadImage('cloud.png')
}

function setup(){
  createCanvas(600,200)
  //ground creation
  ground = createSprite(200,180,400,20)
  ground.addImage(groundimage)
  //t-rex creation
  trex = createSprite(50,160,20,50)
  trex.scale = 0.5
  trex.addAnimation('running',trex_running)
  //invisible ground creation
  invis = createSprite(200,190,400,10)
  invis.visible = false
}

function draw(){
  background(180)
  ground.velocityX = -2
  spawnclouds()
  //ground reset
  if (ground.x < 0)
  {
    ground.x = ground.width/2
  }
  //t-rex jump
  if (keyDown('SPACE') && trex.y >=100)
  {
    trex.velocityY = -10
  }
  //t-rex gravity
  trex.velocityY += 0.5
  trex.collide(invis)
  drawSprites()
  var ran = Math.round(random(10,60))
  console.log(ran)
}
function spawnclouds() {
  if (frameCount%60 === 0){
  var clouds = createSprite(600,random(10,60))
  clouds.velocityX = -2
  clouds.addImage(cloud)
  clouds.scale = 0.5
  clouds.depth = trex.depth - 1
//  trex.depth = trex.depth + 1
  }
}