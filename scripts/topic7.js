
// add a link to the div class "box" 
function addLink() {
let box = document.querySelector(".box");
// create
let newElement = document.createElement("a");

// former way to create text node
let newContent = document.createTextNode("This text is now link!");
newElement.appendChild(newContent);

// append child node a that was created
box.appendChild(newElement);
newElement.setAttribute("href", "https://www.churchofjesuschrist.org/?lang=eng");
}


// css demonstation

function changeTitleColor(){
    document.querySelector("h2").style.color = "green";
    document.querySelector("h2").style.textAlign = "right";
}

function changeTitle(){

document.querySelector("h2").style.textAlign = "left";
/*
document.querySelector("h2").style.fontSize = "5px";
document.querySelector("h2").style.fontSize = "50px";
*/
// passing as a string write like style sheet
/*
document.querySelector("h2").style.cssText = "color: red, font-size = 25px";
*/
document.querySelector("h2").style.backgroundColor = "yellow";
}

//  some survey boxes move
function hideBox(){
    document.getElementById('no').style.visibility = 'hidden';
}

function showBox(){
  document.getElementById('no').style.visibility = 'visible';
}

function yes(){
    window.alert("Of course you will! Please come early for church!");
}
  
function no(){
    window.alert("Well, why not?");
}

function moveBox(){
  
    var x = Math.floor((Math.random() * 400) + 1);
    var y = Math.floor((Math.random() * 400) + 1);
    
    document.getElementById('Qcontainer').style.marginTop = x+'px';
    document.getElementById('Qcontainer').style.marginLeft = y+'px';
}

document.getElementById('Qcontainer').addEventListener("mouseover", moveBox);
function hideBox(){
    document.getElementById('no').style.visibility = 'hidden';
}

function showBox(){
  document.getElementById('no').style.visibility = 'visible';
}

document.getElementById('Qcontainer1').addEventListener("mouseenter", hideBox);
document.getElementById('questionBox1').addEventListener("mouseleave", showBox);






