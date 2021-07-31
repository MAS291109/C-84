var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var nasa_mars_images_array = ["nasa_img_1.jpg","nasa_img_2.jpg", "nasa_img_3.jpg", "nasa_img_4.jpg"];
var random_number = Math.floor(Math.random()*4);
console.log("random-number" + random_number);

//var background_img = "mars.jpg";
var background_img = nasa_mars_images_array[random_number];
console.log("background_img"+ background_img);
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
function left()
{
    if(rover_x >= 0)
    {
        rover_x -= 10;
        console.log("x: "+ rover_x + " y:" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right()
{
    if(rover_x <= 680)
    {
        rover_x += 10;
        console.log("x: "+ rover_x + " y:" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function up()
{
    if(rover_y >= 0)
    {
        rover_y -= 10;
        console.log("x: "+ rover_x + " y:" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down()
{
    if(rover_y <= 500)
    {
        rover_y += 10;
        console.log("x: "+ rover_x + " y:" + rover_y);
        uploadBackground();
        uploadRover();
    }
}