// see object in console for debugging
var select;
window.onload = function () {
    select = document.getElementById('dropDown');
    console.log(select);
}
// Recall to user their preference list of movies 
window.onload = function() {
    if(!localStorage.toStorage)
    document.getElementById("movieList").innerHTML = "";  
    else {
    var list = localStorage.toStorage;
    var obj = JSON.parse(list);
    console.log(obj);
    for (i = 0; i < obj.length; i++) {
        var node = document.createElement("li");
        var item = document.createTextNode(obj[i]);
        node.appendChild(item);
        document.getElementById("movieList").appendChild(node);
        }
    } //else
} // function

function changeHiddenInput(objDropDown) {
   // console.log(objDropDown);
    var node = document.createElement("li");
    var objHidden = document.getElementById("hiddenInput");
    objHidden.value = objDropDown.value;
    var a = objHidden.value;
    var name = document.createTextNode(a);
    node.appendChild(name);
    document.getElementById("movieList").appendChild(node); 
/* result.innerHTML = a || "";  */
}

function toStorage() {
    var dropd = document.getElementById("dropDown").value;
    var drophistory = JSON.parse(localStorage.getItem("toStorage")) || [];
    drophistory.push(dropd);
    //drophistory.push('<br>', dropd);
    localStorage.setItem("toStorage", JSON.stringify(drophistory));
   // document.getElementById("addItems").innerHTML = drophistory;

}

//  removes the last node
function undoLast() {
  var x = document.getElementById("movieList");
  if(x.hasChildNodes()){
         x.removeChild(x.lastChild);
       }
}
// romove one item from the local storage list  - THIS IS NOT CORRECT
function undoStorageItem(){
    var store = JSON.parse(localStorage.getItem("toStorage"));
    console.log(store);
    store.pop();
    console.log(store);
    localStorage.setItem("toStorage", JSON.stringify(store));
}

// to reset list
function removeMovies() {
  var x = document.getElementById("movieList");
  console.log(x);
  x.remove(x);
}
// clear local storage called on same reset button
function resetStorage() {
    localStorage.clear();
   // document.getElementById("addItems").innerHTML = "";
}