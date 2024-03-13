function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#0000FF');
    textSize(24);
    text('salma',10 , 100);
    fill('cyan');
    stroke('violet');
    
}

function modelLoaded(){
    console.log('poseNet is initialized');

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+ noseX + "noseY=" + noseY );

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX= " + leftWristX + "rightWristX= " + rightWristX + "difference= " + difference);
    }
}