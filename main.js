var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getcontex("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
fuction my_mousedown(e) {
    mouseEvent = "mouseDown";

}
canvas.addEventListener("mouseup", my_mouseup);
fuction my_mouseup(e) {
    mouseEvent = "mouseUp";

}
canvas.addEventListener("mouseleave", my_mouseleave);
fuction my_mouseleave(e) {
    mouseEvent = "mouseleave";

}
canvas.addEventListener("mousemove", my_mousemove);
fuction my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}