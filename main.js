img = "";
status = "";
alarm = "";
object = []

function preload() {
    alarm = loadSound('warning.mp3');
}

function setup() {
    canvas = createCanvas(550, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status:  Detecting Baby";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 550, 400);
    if(status == person)
    {
        document.getElementById("status").innerHTML = "Status: Baby Detected";
        alarm.stop();
    } else
    {
        document.getElementById("status").innerHTML =  "Status: Baby Not Detected";
    }