function setup() {
    createCanvas(800, 800);
    strokeWeight(20);
}

let distancePerBodyPart = 75;
let heightVariance = 25;

function draw() {
    // background design
    background(255, 125, 125);

    stroke(255, 255, 255, 150)
    // sets the stroke

    fill(255, 255, 0, 150);
    rectMode(CENTER);
    // uses RGB(A) to make centre brighter, as well as centers the coordinates
    rect(200, 200, 100, 400);
    rect(200, 200, 400, 100);

    rect(600, 200, 100, 400);
    rect(600, 200, 400, 100);

    rect(200, 600, 100, 400);
    rect(200, 600, 400, 100);

    rect(600, 600, 100, 400);
    rect(600, 600, 400, 100);

    // start of the body
    stroke(255, 255, 255 ,150);

    fill(255, 0, 0);
    circle(mouseX - (4 * distancePerBodyPart), mouseY, 100);

    fill(255, 125, 0);
    circle(mouseX - (3 * distancePerBodyPart), mouseY + heightVariance, 100);

    fill(125, 255, 0);
    circle(mouseX - (2 *distancePerBodyPart), mouseY, 100);

    fill(0, 255, 125);
    circle(mouseX - (distancePerBodyPart), mouseY + heightVariance, 100);

    fill(125, 0, 255);
    circle(mouseX, mouseY, 100);

    fill(125, 0, 125);
    circle(mouseX + (distancePerBodyPart), mouseY + heightVariance, 100);

    fill(125, 125, 0);
    circle(mouseX + (2 * distancePerBodyPart), mouseY, 100);

    fill(0, 125, 125);
    circle(mouseX + (3 * distancePerBodyPart), mouseY + heightVariance, 100);

    fill(255, 0, 255);
    circle(mouseX + (4 * distancePerBodyPart), mouseY + heightVariance, 100);

    // the eyes

    let headPositionX = mouseX + (4 * distancePerBodyPart);

    noStroke();
    fill(0);
    circle(headPositionX - 25, (mouseY - 20) + heightVariance, 40);
    circle(headPositionX + 25, (mouseY - 20) + heightVariance, 40);

    fill(255);
    circle(headPositionX - 25, (mouseY - 20) + heightVariance, 20);
    circle(headPositionX + 25, (mouseY - 20) + heightVariance, 20);
}