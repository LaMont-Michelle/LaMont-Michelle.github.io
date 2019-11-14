var video = document.getElementById("video"); 
function controlPlay() { 
    if (video.paused) 
      video.play(); 
    else 
      video.pause(); 
  } 

function makeBig() { 
    video.width = 640; 
    video.height = 480; 
    } 

function makeSmall() { 
    video.width = 160; 
    video.height = 120;
    } 
//width="320" height="240"
function resetSize() { 
    video.width = 320; 
    video.height = 240; 
    }   


  
function drawX() {
    var canvas = document.getElementById("canvasExample");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(25, 25);
    ctx.lineTo(200, 150);
    ctx.moveTo(175, 25);
    ctx.lineTo(25, 150);
    ctx.strokeStyle = "#32CD32";
    ctx.stroke();
}
function drawO() {
var canvas = document.getElementById("canvasExample");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(240,90,40,0,2*Math.PI);
ctx.strokeStyle = "#a132cd";
ctx.stroke();
}

function fill0()  {
var canvas = document.getElementById("canvasExample");
var ctx = canvas.getContext("2d"); 
/*ctx.beginPath();*/
ctx.arc(240,90,40,0,2*Math.PI);
ctx.fillStyle = "purple";
ctx.fill();
}

var audio = document.getElementById("audio"); 
function controlAudio() { 
    if (audio.paused) 
      audio.play(); 
    else 
      audio.pause(); 
  } 
  