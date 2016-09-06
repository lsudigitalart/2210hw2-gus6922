//Emily Hargis #12

function setup() {
  createCanvas(400,269);
  background(216, 220, 228);
}

function draw() {
  fill(240);
  noStroke();
  beginShape();
  vertex(135, 0);
  vertex(90, 0);
  vertex(160, 400);
  vertex(200, 400);
  endShape();

  beginShape();
  vertex(0, 120);
  vertex(0, 140);
  vertex(155, 140);
  vertex(150, 120);
  endShape();

  stroke(240);
  strokeWeight(7);
  line (0, 207, 120, 207);

  strokeWeight(8);
  line (0, 5, 100, 5);

  stroke('black');
  strokeWeight(25);
  line (320, 0, 365, 269);

  stroke('white');
  strokeWeight(12);
  line (250, 0, 487, 400);

  strokeWeight(6);
  line (280, 0, 370, 150);

  stroke('black');
  strokeWeight (7);
  line (135, 0, 200, 400);

  strokeWeight (10);
  line (90, 0, 160, 400);

  strokeWeight(4);
  line (0, 113, 110, 113);

  strokeWeight(6);
  line (0, 200, 120, 200);

  strokeWeight(20);
  line (0, 256, 128, 256);

  strokeWeight(5);
  line (265, 0, 330, 110);

  line (159, 130, 280, 269);

  strokeWeight(9);
  line (335, 0, 400, 100);

  noStroke();
  fill('black');
  ellipse(0, 0, 50, 50);
  ellipse(0, 25, 15, 15);
  ellipse(0, 40, 10, 10);

  beginShape();
  vertex(230, 210);
  vertex(240, 200);
  vertex(300, 269);
  vertex(280, 269);
  endShape();
}
