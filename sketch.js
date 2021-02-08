var dog,sadDog,happyDog;
var feed,addFood;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  /*feed=createSprite("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog)

  addFood=createSprite("Add Food")
  addFood.position(800,95);
  addFood.mousePressed(addFoods)*/
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  fedTime.on("value",function(data){
    lastfed-data.val();
  })
fedTime=database.ref('FeedTime')

 fill(255,255,254);
 textSize(15)
 if(lastFed>=12){
text("Last Feed :"+lastFed%12 + "PM",350,30);
}
else if(lastFed==0){
text("Last Feed: 12 AM",350,30);
}else {
text("Last Feed : "+lastfed +"AM",350,30)

}


  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
dog.addImage(happyDog);

foodObj.updateFoodStock(foodobj.getFoodStock()-1);
database.ref('/').update({

  food:foodObj.getFoodStrock(),
  feedTime:hour()
})

}

//function to add food in stock
function addFood(){
foods++;
database.ref('/').update({
  Food:foods
})

}