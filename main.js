music = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload() {
    music = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}
function draw() {
    image(video, 0, 0, 600, 600);
}
function modelLoaded() {
    console.log("Model has been initialized");
}
function gotResults(results) {
    if(results.length > 0){
    rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " + rightWristX + ", RightWristY = "+ rightWristY);
    }
}