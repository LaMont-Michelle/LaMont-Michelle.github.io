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
magnify.addEventListener('focusout',function() {
    magnify.style.cssText = "background: #e63b25; transition: all .5s ease-in-out";
});

// 3  CLICK 1
function scale(elem){
    elem.classList.toggle("scale");
}
  
// 4 CLICK 2
function displayDate() {
    document.getElementById("display").innerHTML = Date();
}

// 5 MOUSEDOWN MOUSEUP 
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

// 6 KEYBOARD
let moveon = document.getElementById('box-6');
let quote = document.getElementById('quote');
let tip1 = document.getElementById('tip1');

moveon.addEventListener('mouseover', function () {
    quote.style.display = "inherit";
    tip1.style.display = "none";
});

moveon.addEventListener('mouseout', function () {
    quote.style.display = "none";
    tip1.style.display = "block";
});

// 7
// KEYBOARD events in the sixth container
/*let keypress = document.getElementById('press');

keypress.addEventListener('keypress', function(){
    keypress.style.cssText = "background: #9B2F22; transition: background .5s ease-in-out; color: #E9A500;";
});

keypress.addEventListener('focusout',function () {
    keypress.style.cssText = "background: #e63b25; transition: background .5s ease-in-out;";
});
*/
let upperString = document.getElementById('upperString');

upperString.onkeyup = function(){
    this.value = this.value.toUpperCase();
    upperString.style.cssText = "color: #E9A500;";
};


// test touch events
//document.querySelector('#testEvents').addEventListener('touchstart', f);
//document.querySelector('#testEvents').addEventListener('touchend', f);
document.querySelector('#testEvents').addEventListener('touchmove', f);

function f(ev) {
    console.log( ev.touches, ev.type );
}

function runDog() {

    var scottie = document.getElementById('scottie');
   
    scottie.addEventListener('touchmove', function (ev2) {
        var theLocation = ev2.targetTouches[0];
        scottie.style.left = theLocation.pageX + 'px';
        scottie.style.top = theLocation.pageY + 'px';
    })
}


//  random color body fun
// create a var to grab button tag
var btn = document.querySelector('button');

//function to create random number
function random(number) {
  return Math.floor(Math.random()*(number+1));
}

//instance of button tag to create onclick event to call function for random rgb color parameters
btn.onclick = function() {
  var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = randomColor;
}
