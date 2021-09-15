img = "";
status = "";

function preload(){
    img = loadImage('water_bottle.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementNyId("status").innerHTML  = "Status : Detecting Objects";
}

function modelloaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("water bottle", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}