var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var background_img = "mars.jpg";
var rover_img = "rover.png";

var rover_width = 120;
var rover_height = 100;
var rover_x = 10;
var rover_y = 10;

var background_imgTag, rover_imgTag;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
 var keyPressed = e.keyCode;
 console.log(keyPressed);
//left
 if(keyPressed == '37')
 {
     left();
     console.log("left");
 } 
 //top
 if(keyPressed== '38')
 {
     up();
     console.log("up");
 }
 //right
 if(keyPressed== '39')
 {
     right();
     console.log("right");
 }
 //bottom
 if(keyPressed== '40')
 {
     down();
     console.log("down");
 }
}