video="";
rightWristY="";
rightWristX="";
score_right_wrist="";

function setup() {
	canvas = createCanvas(580.420);
	canvas.parent('canvas');

	video=createCapture(VIDEO);
	video.size(580,420);
	video.parent("game_console");

	poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
}


function modelLoaded(){
	console.log("Model Loaded!");
}

function draw(){
   image(video,0,0,580,420);
   if(score_right_wrist>0.2){
	   fill("#0000FF");
	   stroke("#0000FF");
	   circle(rightWristX,rightWristY,5);
   }
}

function gotPoses(results){
	if(results.length>0){
		console.log(results);
			rightWristX=results[0].pose.wrist.x;
		rightWristY=results[0].pose.wrist.y;
	}
}

function startGame(){
game_status="start";
document.getElementById("status").innerHTML="Game is loading";
}