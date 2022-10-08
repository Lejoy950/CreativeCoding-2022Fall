
let skull1;
let skull2;
let spaceman1;

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  skull1 = new Skull(500, 90, 233, 233, 233);
  skull2 = new Skull(876, 315, 89, 25, 20);
  spaceman1 = new Spaceman(125, 341, 19, 86, 43);
}

function draw() {
let white = color(247, 247, 247);
let yellow = color(255, 255, 46);
let blue = color(32, 203, 211);
  background(0);

  // var random color in the background
  var randomBlue = {
    r: 0,
    g: 204,
    b: 204,
  };
  var randomGreen = {
    r: 171,
    g: 255,
    b: 181,
  };
  var randomRed = {
    r: 249,
    g: 112,
    b: 112,
  };
  //Background Disco Pattern 

  frameRate(30);
  for (var y = 0; y <= height; y += 125) {
    for (var x = 0; x <= width; x += 125) {
      randomRed = random(60, 165);
      randomGreen = random(60, 195);
      randomBlue = random(60, 155);
      noStroke();
      fill(randomRed, randomGreen, randomBlue);
      ellipse(x, y, 74, 74);
    }
  }

  //Stage Staires Left
  //Stair1
  stroke(1);
  fill(white);
  beginShape();
  vertex(0, 912);
  vertex(29, 912);
  vertex(130, 985);
  vertex(0, 985);
  endShape(CLOSE);
  //stair2.1
  stroke(1);
  fill(white);
  beginShape();
  vertex(29, 912);
  vertex(29, 803);
  vertex(130, 876);
  vertex(130, 985);
  endShape(CLOSE);
  //stair2.2
  stroke(1);
  fill(white);
  beginShape();
  vertex(29, 803);
  vertex(121, 785);
  vertex(222, 858);
  vertex(130, 876);
  endShape(CLOSE);
  //stair3.1
  stroke(1);
  fill(white);
  beginShape();
  vertex(121, 785);
  vertex(121, 677);
  vertex(222, 750);
  vertex(222, 858);
  endShape(CLOSE);
  //stair3.2
  stroke(1);
  fill(white);
  beginShape();
  vertex(121, 677);
  vertex(412, 677);
  vertex(412, 750);
  vertex(222, 750);
  endShape(CLOSE);
  //stair chose shape 
  stroke(1);
  fill(white);
  beginShape();
  vertex(0, 1000);
  vertex(0, 985);
  vertex(130, 985);
  vertex(130, 876);
  vertex(222, 858);
  vertex(222, 750);
  vertex(412, 750);
  vertex(412, 1000);
  vertex(0, 1000);
  endShape(CLOSE);


  //Stage Staires Right
  //Stair1
  stroke(1);
  fill(white);
  beginShape();
  vertex(1000, 985);
  vertex(869, 985);
  vertex(970, 912);
  vertex(1000, 912);
  endShape(CLOSE);
  //stair2.1
  stroke(1);
  fill(white);
  beginShape();
  vertex(869, 985);
  vertex(869, 876);
  vertex(970, 803);
  vertex(970, 912);
  endShape(CLOSE);
  //stair2.2
  stroke(1);
  fill(white);
  beginShape();
  vertex(869, 876);
  vertex(970, 803);
  vertex(878, 785);
  vertex(777, 858);
  endShape(CLOSE);
  //stair3.1
  stroke(1);
  fill(white);
  beginShape();
  vertex(777, 858);
  vertex(878, 785);
  vertex(878, 677);
  vertex(777, 750);
  endShape(CLOSE);
  //stair3.2
  stroke(1);
  fill(white);
  beginShape();
  vertex(777, 750);
  vertex(878, 677);
  vertex(587, 677);
  vertex(587, 750);
  endShape(CLOSE);
  //stair chose shape 
  stroke(1);
  fill(white);
  beginShape();
  vertex(1000, 1000);
  vertex(1000, 985);
  vertex(869, 985);
  vertex(869, 876);
  vertex(777, 858);
  vertex(777, 750);
  vertex(587, 750);
  vertex(587, 1000);
  vertex(1000, 1000);
  endShape(CLOSE);

  //Stage middle
  stroke(1);
  fill(yellow);
  rect(269, 544, 461, 455);
  ellipse(500, 544, 461, 144);

  skull1.drawSkull();
  skull1.motion();

  skull2.drawSkull();
  skull2.motion();

  spaceman1.drawSpaceman();
  spaceman1.motion();
}

class Skull {
  constructor(positionX, positionY, colorRed, colorGreen, colorBlue) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.colorRed = colorRed;
    this.colorGreen = colorGreen;
    this.colorBlue = colorBlue;
  }

  motion() {
    //shaking
    this.positionX = this.positionX + random(-1, 1);
    this.positionY = this.positionY + random(-1, 1);
  }

  drawSkull() {
    fill(this.colorRed, this.colorGreen, this.colorBlue);
    //head
    ellipse(this.positionX, this.positionY, 153, 116);
    //eyes
    push();
    fill(0);
    ellipse(this.positionX - 33, this.positionY, 45, 45);
    ellipse(this.positionX + 33, this.positionY, 45, 45);
    pop();
    //Mouth
    rect(this.positionX - 8, this.positionY + 39, 16, 49);
    rect(this.positionX - 30, this.positionY + 39, 16, 49);
    rect(this.positionX + 13, this.positionY + 39, 16, 49);
    //body
    rect(this.positionX - 8, this.positionY + 101, 16, 166);
    rect(this.positionX - 58, this.positionY + 113, 117, 16);
    rect(this.positionX - 58, this.positionY + 147, 117, 16);
    rect(this.positionX - 58, this.positionY + 182, 117, 16);
    //L arm
    rect(this.positionX - 93, this.positionY + 101, 16, 166);
    //R arm
    rect(this.positionX + 76, this.positionY + 101, 16, 166);
    //PEL
    ellipse(this.positionX, this.positionY + 298, 107, 49);
    //Lleg
    rect(this.positionX - 52, this.positionY + 328, 16, 166);
    rect(this.positionX - 59, this.positionY + 500, 31, 16);
    //Rleg
    rect(this.positionX + 39, this.positionY + 328, 16, 166);
    rect(this.positionX + 31, this.positionY + 500, 31, 16);


  }
}

class Spaceman {
  constructor(positionX, positionY, colorRed, colorGreen, colorBlue) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.colorRed = colorRed;
    this.colorGreen = colorGreen;
    this.colorBlue = colorBlue;
  }

  motion() {
    //shaking
    this.positionX = this.positionX + random(-1, 1);
    this.positionY = this.positionY + random(-1, 1);
  }

  drawSpaceman() {
    fill(this.colorRed, this.colorGreen, this.colorBlue);
    //head
    ellipse(this.positionX, this.positionY, 186, 186);
    //eyes
    push();
    fill(32,203,211);
    ellipse(this.positionX, this.positionY, 152, 94);
    pop();
    //body
    rect(this.positionX - 83, this.positionY + 102, 165, 212);
    //L arm
    rect(this.positionX - 126, this.positionY + 102, 33, 212);
    //R arm
    rect(this.positionX + 92, this.positionY + 102, 33, 212);
    //Lleg
    rect(this.positionX - 83, this.positionY + 325, 66, 212);
    //Rleg
    rect(this.positionX + 16, this.positionY + 325, 66, 212);



  }
}