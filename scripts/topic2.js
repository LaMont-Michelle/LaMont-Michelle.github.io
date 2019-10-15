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
}

