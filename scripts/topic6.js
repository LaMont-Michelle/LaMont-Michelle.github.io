// create a new paragraph with text
function createDemo() {
    var text = document.createElement("p");
    var node = document.createTextNode("This text represents a new element node created with JavaScript.");
    text.appendChild(node);
    var element = document.getElementById("textDemo");
    element.appendChild(text);
}

//change list adding new li at the end
function addListItem() {
    var node = document.createElement("li");
    var name = document.createTextNode("Boston terrier");
    node.appendChild(name);
    document.getElementById("terriers").appendChild(node);
}

//change list by adding new li at the top of list
function addFirst() {
    var newListItem = document.createElement("li");
    var name = document.createTextNode("Fox Terrier");
    newListItem.appendChild(name);
    var list = document.getElementById("terriers2");
    list.insertBefore(newListItem, list.childNodes[0]);
}

//change list by removing item from list
function removeItem() {
    var list = document.getElementById("terriers3");
    list.removeChild(list.childNodes[0]);
}

function replacePhrase() {
    var parent = document.getElementById("overstate");
    var child = document.getElementById("cats");
    var declare = document.createElement("p");
    var node = document.createTextNode("DOGS MAKE THE BEST PETS!!!");
    declare.appendChild(node);
    parent.replaceChild(declare,child);
}
