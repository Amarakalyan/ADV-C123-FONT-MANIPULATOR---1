noseX=0;
noseY=0;
difference=0;
rightWrist=0;
leftWrist=0;

function setup(){

    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(650,125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
    
}