canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var last_x , last_y;

new_width = screen.width - 70;

new_height = screen.height - 300;

if (screen.width < 992)
{
    canvas.width = new_width;

    canvas.height = new_height;
}

canvas.addEventListener("touchstart", myTouchstart);

function myTouchstart(e)
{
    last_x = e.touches[0].clientX - canvas.offsetLeft;

    last_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchmove);

function myTouchmove(e)
{
    current_x = e.touches[0].clientX - canvas.offsetLeft;

    current_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();

    ctx.strokeStyle = "black";

    ctx.lineWidth = 5;

    ctx.moveTo(last_x, last_y);

    ctx.lineTo(current_x, current_y);

    ctx.stroke();

    last_x = current_x;
    last_y = current_y;
}