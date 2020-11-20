var Hr,Mn,Sc;
var second_angle,minute_angle,hour_angle;



function setup() {
  createCanvas(1600,800);
  //center of the clock
  createSprite(800,350, 50, 50);
  
  angleMode(DEGREES);
}

function draw() {
  background(255,200,255);  
  
  //console.log(Mn)
  translate(800,350);
  

  stroke(7);
  textSize(35);
  text("12",0,-230)

  stroke(7);
  textSize(35);
  text("3",230,15)
 

  stroke(7);
  textSize(35);
  text("6",0,230)


  stroke(7);
  textSize(35);
  text("9",-230,15)
 
  text("Time:", 420, 50)
  text(Hr -12 + ":" + Mn + ":" + Sc, 400,100)

  rotate(-90);
  
  //make the variables of time units correspond to the predefined functions
  Hr = hour();
  Mn = minute();
  Sc = second();

  //find the angle for each unit of time
  second_angle = map(Sc,0,60,0,360);
  minute_angle = map(Mn,0,60,0,360);
  hour_angle = map(Hr,0,12,0,360);

// text("x:" + mouseX, 200,100);
 //text("y:" + mouseY, 300,100);
 console.log(minute_angle);

  //draw the seconds hand
  
  push();
  rotate(second_angle); 
  stroke(255,1,1);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  //draw the minutes hand
  push();
  rotate(minute_angle); 
  stroke(1,255,1);
  strokeWeight(7);
  line(0,0,170,0);
  pop();

  //draw the hours hand
  push();
  rotate(hour_angle); 
  stroke(1,1,255);
  strokeWeight(7);
  line(0,0,140,0);
  pop();



  //console.log(second_angle);
  


  drawSprites();
}