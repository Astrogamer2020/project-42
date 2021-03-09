var hr = hour();
var mn = minute();
var sc = second();
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background("lightblue");
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,60,360,0,360);
  hrAngle = map(hr,0,8640,0,360);
push()
rotate(scAngle)
  translate(0,0);
  stroke("blue");
  strokeWeight(7);
  line(400,200,50,20);
  pop()
  push()
rotate(mnAngle)
  translate(0,0);
  stroke("green");
  strokeWeight(7);
  line(400,200,100,15);
  pop()
  push()
rotate(hrAngle)
  translate(0,0);
  stroke("red");
  strokeWeight(7);
  line(400,200,700,10);
  pop()
  drawSprites();
}