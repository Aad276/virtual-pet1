//Create variables here
var dog,happydog,database,foodS,foodStock
function preload()
{
 dogIMG=loadImage("dogImg.png") 
 happydogIMG=loadImage("dogImg1.png") 
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(200,200,40,50)
  dog.addImage(dogIMG)
  dog.scale=0.15
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
  textSize(20)
 
  
}


function draw() {  
background(46,139,87)

if (keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happydogIMG)
}

  drawSprites();
  //add styles here
fill ("white")
textSize(20)
text("UP_ARROW Key To Feed Drago Milk!",130,10,300,20)
text("Food Remaining:"+foodS,170,100)
}
function readStock(data){
foodS=data.val()
}
function writeStock(x){
  if(x<=0){
  x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
  Food:x
  })

}


