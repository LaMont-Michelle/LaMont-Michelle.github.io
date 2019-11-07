// 1  ONLOAD 
window.onload = function(){
    let elem = document.getElementById('spin');
    elem.style.cssText = "animation: spin 3s linear infinite";
   //elem.style.cssText = "animation: spin 1s linear infinite";
};

// 2 FOCUS
let magnify = document.getElementById('focus');
magnify.addEventListener('focusin', function(){
    magnify.style.cssText = "background: #9B2F22; transition: all .5s ease-in-out";
});
magnify.addEventListener('focusout',function () {
    magnify.style.cssText = "background: #e63b25; transition: all .5s ease-in-out";
});

// 3  CLICK
function scale(elem){
    elem.classList.toggle("scale");
}
  
// 3b
function displayDate() {
    document.getElementById("display").innerHTML = Date();
}

// 4
let movup = document.getElementById('box5');
let tip2 = document.getElementById('tip2');

movup.addEventListener('mousedown', function () {
    movup.style.backgroundImage = "url('images/Marauders_Map.png')";
    movup.style.backgroundSize = "cover";
    tip2.style.display = "none";
});

movup.addEventListener('mouseup', function () {
    movup.style.backgroundImage = "";
    tip2.style.display = "block";
});


// 5
let moveon = document.getElementById('box4');
let quote = document.getElementById('quote');
let tip1 = document.getElementById('tip1');

moveon.addEventListener('mouseout', function () {
    if('mouseout') {
    quote.style.display = "none";
    tip1.style.display = "block"}
    else{
        moveon.addEventListener('mouseover', function () {
            quote.style.display = "inherit";
            tip1.style.display = "none";
        });  
    }
});
moveon.addEventListener('mouseover', function () {
    quote.style.display = "inherit";
    tip1.style.display = "none";
});  

moveon.addEventListener('mouseout', function () {
    quote.style.display = "none";
    tip1.style.display = "block";
});
moveon.addEventListener('mouseover', function () {
    quote.style.display = "inherit";
    tip1.style.display = "none";
});  

// 6
// KEYBOARD events in the sixth container
let keypress = document.getElementById('press');

keypress.addEventListener('keypress', function(){
    keypress.style.cssText = "background: #9B2F22; transition: background .5s ease-in-out; color: #E9A500;";
});

keypress.addEventListener('focusout',function () {
    keypress.style.cssText = "background: #e63b25; transition: background .5s ease-in-out;";
});

let release = document.getElementById('release');

release.onkeyup = function(){
    this.value = this.value.toUpperCase();
    release.style.cssText = "color: #E9A500;";
};
// end of 6

// animation
/*
let anime = document.getElementById('anime');
anime.addEventListener('click',function () {
    anime.classList.add('spin');
});

anime.addEventListener('animationstart',function(){
    anime.innerHTML = "Start";
});

anime.addEventListener('animationend',function () {
    anime.innerHTML = "End";
    // reset the properties after 1.5s, so the user can click again
    setTimeout(function(){
        anime.classList.remove('spin');
        anime.innerHTML = "Click Me";
    },1500);
});
// TOUCHSTART event in the seventh container
let tstart = document.getElementById('box7');
let num = document.getElementById('counter');
let counter = 0;

tstart.addEventListener('touchstart',function () {

    // this tweak prevents a context menu to appear on long taps
    tstart.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    };

    counter++;
    num.innerHTML = counter.toString();
    //
});

tstart.addEventListener('touchend',function () {
    return false;
});
*/
// end animation box



//  random color body fun
var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}