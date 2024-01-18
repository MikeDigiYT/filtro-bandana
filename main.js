noseX=0;
noseY=0;

function preload(){
  pañuelo_de_Aura_dorada = loadImage('banda.png');
}
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet está inicializado');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(pañuelo_de_Aura_dorada, noseX, noseY, 80, 90);
}
function take_snapshot(){
  save('myFilterImage.png');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y-20;
        console.log("noise x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);

    }
}