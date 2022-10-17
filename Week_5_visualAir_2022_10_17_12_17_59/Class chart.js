class Chart {
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  }

  drawChart() {
    beginShape();
    vertex(this.positionX - 132, this.positionY + 699);
    vertex(this.positionX - 132, this.positionY + 684);
    vertex(this.positionX - 96, this.positionY + 674);
    vertex(this.positionX, this.positionY + "PollutionAQIUS");
    vertex(this.positionX + 101, this.positionY + 674);
    vertex(this.positionX + 132, this.positionY + 679);
    vertex(this.positionX + 132, this.positionY + 699);
    endShape(CLOSE);
  }
}
