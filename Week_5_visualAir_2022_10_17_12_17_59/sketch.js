//api from: https://www.iqair.com/dashboard/api/
// if the page doesnot work, please change a ket at loadJSON (...?key= copy paste key)
//key1: 0fbe3ab6-c651-4962-9af1-d1b495a51861
//key2: cf72ad6d-af6c-4dd6-9a6d-d67a2a61a593
//key3: cf72ad6d-af6c-4dd6-9a6d-d67a2a61a593
// this is a automatic IP address locating weather information. Including Air Quality in US EPA standard, Tempture in Celsius, humidity % and wind speed.

var air;
let chart1;
let img;
let imgcloud;

function preload() {
  img = loadImage("01d.png");
  imgcloud = loadImage("04d.png");
}

function setup() {
  createCanvas(1000, 550);
  background(229, 244, 248);
  noStroke();
  
  //Class Air Aqi Chart
  //chart1 = new Chart (208,-181);
  chart1 = new Chart(208, -181);
  

  textSize(46);
  fill(28, 98, 174);
  push();
  textAlign(CENTER, CENTER);
  text("Click the screen.", width / 2, height / 2);
  pop();
  loadJSON("https://api.airvisual.com/v2/nearest_city?key=cf72ad6d-af6c-4dd6-9a6d-d67a2a61a593",gotData);
}

function gotData(data) {
  print(data);
  air = data;
}

function mousePressed() {
  let cityName = air.data.city;
  let stateName = air.data.state;
  let countryName = air.data.country;
  let PollutionAQIUS = air.data.current.pollution.aqius;
  let Tempture = air.data.current.weather.tp;
  let Humidity = air.data.current.weather.hu;
  let WindS = air.data.current.weather.ws;

  background(230, 253, 255);
  noStroke();
  fill(28, 98, 174);
  
  //Frame
  push();
  fill(233, 255, 249);
  stroke(28, 98, 174);
  rect(20, 27, 522, 200, 50);
  pop();

  if (air) {
    //cityname
    textSize(42);
    textFont("Georgia");
    text("CITY:", 43, 73);
    //live data
    textSize(36);
    textFont("Helvetica");
    text(cityName, 157, 73);

    //stateName
    textSize(42);
    textFont("Georgia");
    text("STATE:", 43, 141);
    //live data
    textSize(36);
    textFont("Helvetica");
    text(stateName, 191, 141);

    //countryName
    textSize(42);
    textFont("Georgia");
    text("COUNTRY:", 43, 206);
    //live data
    textSize(36);
    textFont("Helvetica");
    text(countryName, 267, 206);

    //PollutionAQIUS
    textSize(42);
    textFont("Georgia");
    text("PollutionUS.AQI:", 43, 370);
    //live data
    textSize(36);
    textFont("Helvetica");
    text(PollutionAQIUS, 382, 370);

    //Weather
    textSize(42);
    textFont("Georgia");
    text("Weather:", 532, 370);

    //Tempure
    textSize(42);
    textFont("Georgia");
    text("TP:", 532, 421);
    //live data
    textSize(36);
    textFont("Helvetica");
    text(Tempture, 608, 421);

    //Humidity
    textSize(42);
    textFont("Georgia");
    text("HU:", 532, 471);
    //live data
    textSize(36);
    textFont("Helvetica");
    text(Humidity, 624, 471);

    //WindS
    textSize(42);
    textFont("Georgia");
    text("Wind/S:", 532, 521);
    //live data
    textSize(36);
    textFont("Helvetica");
    text(WindS, 702, 521);

    //blue
    push();
    stroke(28, 98, 174);
    fill(233, 255, 249);
    rect(75, 394, 265, 143);
    pop();
    //red
    push();
    fill(246, 230, 231);
    rect(75, 394, 265, 71);
    pop();

    //AQI Shape interactive airpolluction chart icons
    chart1.drawChart();

    //bad air sad face
    stroke(28, 98, 174);
    fill(255, 245, 227);
    ellipse(384, 410, 37, 29);
    fill(255, 82, 99);
    rect(378, 414, 11, 7, 90, 90, 0, 0);
    line(371, 408, 378, 404);
    line(396, 408, 389, 403);

    //good air happy face
    fill(255, 245, 227);
    ellipse(384, 522, 37, 29);
    fill(255, 82, 99);
    rect(378, 526, 11, 7, 0, 0, 90, 90);
    line(373, 515, 381, 519);
    line(381, 519, 372, 524);
    line(396, 515, 389, 519);
    line(389, 519, 397, 523);

    //arrow
    fill(28, 98, 174);
    triangle(371, 500, 385, 435, 399, 500);

    //Tempture chart
    fill(141, 209, 232);
    rect(711, 398, 70, 24);
    fill(245, 231, 93);
    rect(782, 398, 70, 24);
    fill(233, 72, 70);
    rect(853, 398, 70, 24);
    
    //interactive temputer pointer
    push()
    translate(711,398);
    triangle(0,24,0,48,air.data.current.weather.tp,36);
    pop()

    image(imgcloud, 595, 0);
  }
}
