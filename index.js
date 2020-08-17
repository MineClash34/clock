


function setup() {
  document.getElementById("body").style.background = "#000";
  document.getElementById("body").style.position = "absolute";
  document.getElementById("body").style.left = "35%";
  document.getElementById("body").style.top = "20%";
  createCanvas(750, 750);
  angleMode(DEGREES);
};

function draw() {
  translate(250, 300);
  rotate(-90);
  background(0);
  strokeWeight(8);
  stroke(255);
  noFill();
  stroke(255, 100, 150);
  let end1 = map(second(), 0, 60, 0, 360);
  arc(0, 0, 400, 400, 0, end1);

  stroke(100, 255, 150);
  let end2 = map(minute(), 0, 60, 0, 360);
  arc(0, 0, 370, 370, 0, end2);

  stroke(150, 100, 255);
  let end3 = map(hour(), 0, 24, 0, 360);
  arc(0, 0, 340, 340, 0, end3);

  push();
  rotate(end1);
  stroke(255, 100, 150);
  line(0, 0, 150, 0);
  pop();

  push();
  rotate(end2);
  stroke(100, 255, 150);
  line(0, 0, 105, 0);
  pop();

  push();
  rotate(end3);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  stroke(255);
  strokeWeight(13);
  point(0, 0);

  fill(150, 100, 255);
  noStroke()
  rotate(90);
  textSize(50)
  text(hour(), -120, -250)

  fill(255);
  noStroke()
  textSize(50)
  text(":", -62, -250)

  fill(100, 255, 150);
  noStroke()
  textSize(50)
  text(minute(), -45, -250)

  fill(255);
  noStroke()
  textSize(50)
  text(":", 13, -250)

  fill(255, 100, 150);
  noStroke()
  textSize(50)
  text(second(), 30, -250)
};