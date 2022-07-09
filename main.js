canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "none";
var last_x;
var last_y;

color = "black";
width = 2;

canvas.addEventListener("mousedown", click);
function click(e){
    mouseEvent = "mousedown";
    color = document.getElementById("colorinput").value;
    width = document.getElementById("sizeinput").value;
}

canvas.addEventListener("mouseup", noclick);
function noclick(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", nooclick);
function nooclick(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", movee);
function movee(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last Positions of mouseX and mouseY are " + last_x + "," + last_y);
        ctx.moveTo(last_x, last_y);
        console.log("Current Positions of mouseX and mouseY are " + current_x + "," + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();

    }
    last_x = current_x
    last_y = current_y
}

function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}