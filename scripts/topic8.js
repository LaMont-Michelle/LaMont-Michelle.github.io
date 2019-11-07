// change color and make bigger
function textChange(){
    document.getElementById("changingText").classList.toggle("color");
}

// slide menu js
function toggleNav() {
    let updateElement = document.getElementById("menu-icon");
    updateElement.classList.toggle("open");
}

// compare transition in first block
let trans = document.getElementById('trans');

// event listener to trigger the transition
trans.addEventListener('mouseover', function(){
    trans.style.cssText = "border-radius: 0; background-color: white; transform: rotate(180deg)";
    trans.style.transition = "border-radius 1s linear, background-color 1s linear, transform 1s linear";
});

// event listener to stop the transition
trans.addEventListener('mouseout', function(){
    trans.style.cssText = "height: 5em; width: 5em; background-color: #0c5460; border-radius: 50%";
    trans.style.transition = "border-radius 1s linear, background-color 1s linear, transform 1s linear";
});

// compare animation in second block
let animate = document.getElementById("animate");

// event listener to trigger the animation
animate.addEventListener('mouseover', function(){
    animate.style.animation = "morphing-circle-square 4s linear infinite";
});

// event listener to stop the animation
animate.addEventListener('mouseout', function(){
    animate.style.animation = "";
});
