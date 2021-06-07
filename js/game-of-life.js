/**************************
 * Author: Henry Newcomer *
 **************************/

const UNIT_SIZE = 10;

// Container
var units = [[0, 0], [50, 50], [150, 150], [200, 200]];

function draw() {
    background("#3399ff");
    drawUnits();
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function checkNeighbors() {
    let neighborsToCheck = [];
    //
}

function drawUnits() {
    stroke("#0f0");
    strokeWeight(UNIT_SIZE);
    for (let i = 0; i < units.length; i++) {
        square(units[i][0], units[i][1], UNIT_SIZE, 2);
        console.log("unit "+ i + ": " + units[i]);
    }
}
