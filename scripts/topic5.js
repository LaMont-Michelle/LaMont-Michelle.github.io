function demoDogs(){
    localStorage.setItem('canine', 'Kennel Club');
    let val = localStorage.getItem('canine');
    console.log('canine');

    let rewards = {

        "affection": "hug and pet",
        "treat": "biscuit",
        "exercise": ["walk","run","play catch"]

    };

    let str = JSON.stringify(rewards);

    console.log(rewards);
localStorage.setItem("The Dogs", str);

let message = localStorage.getItem("The Dogs");
console.log(message);
let obj = JSON.parse(message);
console.log(obj);
console.log(obj.exercise[2]);

}



function informationDogs(){
    //array
    var dogs = ["Scotland Terrier", "Yorkshire Terrier", "Golden Doodle", "Boston Terrier"];
    // string
    var statement = "Dogs are better friends than humans. ";
    // object
    var myDog = {"breed":"Scottie", "dogName":"Jovi", "gender":"Female", "color":"black", "age":1};
    // set items in local storage
    localStorage.setItem("dogs", JSON.stringify(dogs));
    localStorage.setItem("myDog", JSON.stringify(myDog));
    // set items in session storage
    sessionStorage.setItem("statement", statement); 
    console.log(dogs);
    console.log(myDog);
    console.log(statement);
    }

// Store
function demoFavsStorage() {

var name = prompt("Please enter your name: ");
var animal = prompt("What is your favorite animal? ");
var food = prompt("What is your favorite food? ");
var movie = prompt("Name a movie you've seen more times than you can count: ")
    localStorage.setItem('name', name);
    localStorage.setItem('animal', animal);
    localStorage.setItem('food', food);
    localStorage.setItem('movie', movie);
}

 // Retrieve
//var name = localstorage.getItem("key");
function displayFavsStorage(){
    var i = 0;
    document.getElementById("addItems").innerHTML = "";
    for (i = 0; i < localStorage.length; i++) {
    var k = localStorage.key(i);
    x=localStorage.getItem(k);
    document.getElementById("addItems").innerHTML += "<br> Key:   "+   k +" <br> Value:  "+ x + "";
    }
}
function resetStorage() {
    localStorage.clear();
    sessionStorage.clear();
    document.getElementById("deleteListNow").innerHTML = 
    " LIST DELETED " + "";

}

    localStorage.setItem('canine', 'Kennel Club');
    let val = localStorage.getItem('canine');
    console.log('canine');

