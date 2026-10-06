function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(0);

    fill(255, 0, 0);
    rect(0, 0, width / 2, height);

    fill(255, 255, 0);
    rect(width / 2, 0, width / 2, height / 2);

    fill(0, 255, 0);
    rect(width / 2, height / 2, width / 4, height / 2);

    fill(0, 255, 255);
    rect((width / 4) * 3, height / 2, width / 4, height / 4);

    fill(0, 0, 255);
    rect((width / 4) * 3, (height / 4) * 3, width / 4, height / 4);
}