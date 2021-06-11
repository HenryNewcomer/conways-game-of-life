/**************************
 * Author: Henry Newcomer *
 **************************/

// TODO Resize w/h of canvas based on best floor results (num of rows cell count)

const UNIT_SIZE = 100;
// Container
var units = [[0,0], [0,1], [0,2], [1,1], [2,0], [2,1], [2,2], [4, 0], [4, 2]];
// var units = [0, 1, 4, 10];
var gridToggleOn = true;
// var gridToggleOn = false;
var cellsPerRow = undefined;
var cellsPerColumn = undefined;
// TODO Move vars to deb(ug) namespace
var deb = new function() {
    this.frame = 0;
    this.showFrameCount = false;
    this.showMouseCoords = false;
    this.isPaused = false;
};

function draw() {
    if (!deb.isPaused) {
        // Update logs
        logFrameCount();
        logMouseCoords();

        // Logic updates
        checkNeighbors();

        // Visual updates (drawing...)
        checkGridOverlay();
        drawUnits();
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cellsPerRow = getCellsPerRow();
    cellsPerColumn = getCellsPerColumn();
}

function checkGridOverlay() {
    if (gridToggleOn) {
        stroke("#6b9ed0");
        fill("#2a4c6e");
        for (let y = 0; y < windowHeight; y+= UNIT_SIZE) {
            for (let x = 0; x < windowWidth; x+= UNIT_SIZE) {
                rect(x, y, UNIT_SIZE, UNIT_SIZE);
            }
        }
    }
}

function toggleGrid() {
    let toggler = gridToggleOn ? false : true;
    gridToggleOn = toggler;
    return toggler;
}

function checkNeighbors() {
    let neighborsToCheck = [];
    // TODO sort before checking
    // if (units[i])
}

function drawUnits() {
    fill("#65b9a1");

    units.forEach((unit) => {
        let getX = unit[0] * UNIT_SIZE;
        let getY = unit[1] * UNIT_SIZE;
        console.log("getX: "+getX+", getY: "+getY);
        rect(getX, getY, UNIT_SIZE, UNIT_SIZE);
        // square(getX, getY, UNIT_SIZE);

    // for (let i = 0; i < units.length; i++) {
    // units.forEach((unit) => {
        // let getX = unit * cellsPerRow;
        // let getY = unit * cellsPerColumn;

        // square(getX+(UNIT_SIZE), getY+(UNIT_SIZE), UNIT_SIZE, 2);

        // square(units[i] * cellsPerRow, units[i] * cellsPerColumn, UNIT_SIZE, 2);
        // square(units[i][0], units[i][1], UNIT_SIZE, 2);
        // console.log("unit "+ i + ": " + units[i]);
    });
}

/* Debug Functions */

function getCellsPerRow() { return floor(windowWidth / UNIT_SIZE); }
function getCellsPerColumn() { return floor(windowHeight / UNIT_SIZE); }
function logMouseCoords() {
    if (deb.showMouseCoords) {
        console.log("Mouse X: "+mouseX+", Y: "+mouseY);
        deb.showMouseCoords = false;
    } else {
        deb.showMouseCoords = true;
    }
}
function pause() {
    if (deb.isPaused) {
        deb.isPaused = false;
        return false;
    } else {
        deb.isPaused = true;
        return true;
    }
}
function unpause() { return pause(); } // Meh...
function play() { return pause(); }    // Meh...
function logFrameCount() {
    if (deb.showFrameCount) {
        deb.frame++;
        console.log("frame #" + deb.frame);
        deb.showFrameCount = false;
    } else {
        deb.showFrameCount = true;
    }
}
