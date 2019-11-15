var div1 = document.getElementById("box1");
var div2 = document.getElementById("box2");
var div3 = document.getElementById("box3");

function rotate()
{
    div1.style.transform = "rotate(90deg)";
    div2.style.transform = "rotate(1000deg)";
    div3.style.transform = "rotate(-100deg)";
}
function skew()
{
    div1.style.transform = "skewX(-10deg)";
    div2.style.transform = "skewY(-20deg)";
    div3.style.transform = "skew(25deg, 10deg)";
}
function scale()
{
    div1.style.transform = "scale(0.5)";
    div2.style.transform = "scale(2)";
    div3.style.transform = "scale(0.5, 2.5)";
}
function translateXY()
{
    div1.style.transform = "translateX(15px)";
    div2.style.transform = "translateY(50px)";
    div3.style.transform = "translateX(-15px)";
}
function reset()
{
    div1.style.removeProperty("transform");
    div2.style.removeProperty("transform");
    div3.style.removeProperty("transform");
}