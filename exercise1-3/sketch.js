function setup() {
    createCanvas(500, 500);
}

let defaultShapeSize = 100;

function draw() {
    background(0, 255, 0);

    rectMode(CENTER);
    fill(255, 0, 255);

    square(mouseX, mouseY, defaultShapeSize);
    square(mouseX + defaultShapeSize, mouseY + defaultShapeSize, defaultShapeSize); //bottom right
    square(mouseX - defaultShapeSize, mouseY - defaultShapeSize, defaultShapeSize); //top left
}