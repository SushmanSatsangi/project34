var dog, happyDog, database, foodS, foodStock;
var dogSpr;

function preload()
{
	dog = loadImage('images/dogImg.png');

  happyDog = loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);

   dogSpr = createSprite(350, 200, 50, 50);
   dogSpr.addImage(dog);

   database = firebase.database();

   foodStock = database.ref('Food').on("value",readStock); 
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dogSpr.addImage(happyDog);
  }


  drawSprites();
  
  textSize(25);
  fill('orange');
  stroke('red');
  text("Note: Press the up arrow key to feed Oliver milk!", 100, 50);

}

function readStock(){
  foodS = data.val();

}

function writeStock(x){
    if(x<=0){
      x=0;
    }

    else{
      x=x-1;
    }

  database.ref('/').update({
    Food : x
  })

}



