//The Library I used "p5.Utils": https://github.com/alptugan/p5.utils
//This Library has many handy tools to use in p5js, and in this sketch, I used the ruler to quickly find the position of each object, and the gradient to color my drawing.

var utils = new p5.Utils();

function setup() {
  createCanvas(1000, 1000);

  //Ruler
  utils.enableRuler();
}

function draw() {
  background('#00E2C7');

  var twoColors = ["#B6DEDA", "#F5DE3D"];
  var roomColors = ["#EB6D9A", "#159B3A"];
  var windowColors = ["#D2E9DB", "#4D78BC"];
  var x1 = mouseX;
  var y1 = mouseY;
  var x2 = 400;
  var y2 = 400;

  utils.beginLinearGradient(twoColors, x1, y1, x2, y2);
  //rooftop
  quad(187, 306, 52, 536, 945, 536, 807, 306);
  utils.endLinearGradient();

  //grass
  fill("#DCEDB0")
  quad(97,864,0,1000,1000,1000,923,864)
  
  
  //room
  utils.beginLinearGradient(roomColors, x1, y1 , x2, y2);
  rect(97, 536, 805, 395);
  utils.endLinearGradient();

  //door
  push();
  fill("#B6DEDA");
  rect(201, 598, 163, 334);
  pop();

  //door handle
  utils.beginLinearGradient(twoColors, x1, y1, x2, y2);
  ellipse(231, 770, 45, 45);
  utils.endLinearGradient();

  //widow frame
  push();
  fill("#F5DE3D");
  rect(646, 598, 187, 187);
  pop();

  //windows
  utils.beginLinearGradient(windowColors, x1, y1, 200, 700);
  rect(661, 613, 67, 67);
  rect(751, 613, 67, 67);
  rect(661, 703, 67, 67);
  rect(751, 703, 67, 67);
  utils.endLinearGradient();
  

}
