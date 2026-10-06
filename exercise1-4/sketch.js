function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255, 255, 0);

    rectMode(CENTER);

    rect(width / 2, height / 2, -((width / 2) - mouseX) * 2, -((height / 2) - mouseY) * 2);
}