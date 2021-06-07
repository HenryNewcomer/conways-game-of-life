/**************************
 * Author: Henry Newcomer *
 **************************/

const UNIT_SIZE = 10;

// Container
var units = [[0, 0], [10, 10], [15, 20], [100, 100]];

function draw() {
    background("#3399ff");
    drawUnits();
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function drawUnits() {
    stroke("#0f0");
    strokeWeight(UNIT_SIZE);
    for (let i = 0; i < units.length; i++) {
        point(units[i][0], units[i][1]);
        console.log("unit "+ i + ": " + units[i]);
    }
}
