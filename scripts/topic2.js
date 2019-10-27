/* 
function personInfo(){

let person = new Object();

person.name = "Jovi";
person.eyeColor = "Brown";
person.age = 1;


// function to add an age to the person object
person.updateAge = function() {
    return ++person.age;

}
console.log(person.age);
person.updateAge();
console.log(person.age);
*/

function personInfo(){
    let person = {

    given_name: "Vivian",
    last_name: "LaMont",
    nick_name: "Vivie",
    grade: 8,
    age: 13,
    updateAge: function(){
        return ++person.age;}
    }
    console.log(person);
    console.log(person.updateAge(person.age));
    
}

//this is the parent class 
class Canine{
    constructor(breed) {     // the constructor for the Canine class
        this.caninename = breed;  // defines and sets them

    }
    present() {
        return 'Your dog is a ' + this.caninename;
    }
}

//this child class using the keyword "extends"
class Group extends Canine {                     
    constructor(breed, dogGroup, size, color) {
        super(breed); // super is calling parent class constructor.
        this.group= dogGroup;
        this.size = size;   
        this.color = color;                   
    }

    show() {   
        return this.present() + ', your canine group is: ' + this.group + ', and the size is: '+ this.size + ' And your canine is color: ' + this.color + ". ";
    }
    showCanine(){
        var date = new Date();
        var currentYear = date.getFullYear();
        currentYear += 1;
        var showData = {breed:this.present(), group:this.group, size:this.size, color: this.color};
        var txt = "";
        var x;
        for (x in showData) {

            txt += showData[x] + " "; 
        }
        return txt + " The dog show will be in February " + currentYear;
    }
}

// prompts to user to create the class  
function informationCanines(){
    var breed = prompt("Enter breed of dog ");
    var group = prompt("Enter group of your dog ");
    var size = prompt( "Enter size of your dog ");
    var color = prompt( "Enter the color of your dog ");

    mydog = new Group(breed, group, size, color);
    document.getElementById("resultCanines").innerHTML = mydog.show(); 
  
    if (confirm('Would you like to show your dog?')) {
    //Save it!
        alert("Your local dog show entry fee is the amount of: " + mydog.showCanine());
    }
    else
    {
        alert( "Please if you change your mind, we'd love to have your dog in the show!")
    }
}

// add a country for the Dog Show
class Country{
    constructor(country) {
        this.showCountry = country;
    }
    static showCountry(c) {
        return "Using Static...The country for the dog show is:  " + c.showCountry;
    }
}
function addInfoShow(){

    var country = prompt("Enter dog show's country");
    mydog = new Country(country);
    document.getElementById("addCountry").innerHTML = Country.showCountry(mydog);
}

