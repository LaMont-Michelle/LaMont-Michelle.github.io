
function informationPerson(){
    var firstName = prompt("Enter your first name: ");
    var lastName = prompt("Enter your last name: ");
    var calling = prompt( "Enter your church calling: ");
    var phone = prompt( "Enter phone number: ");

    var myInfo = '{"firstName":"'+firstName+'", "lastName":"'+lastName+'","calling":"'+calling+'", "phone":"'+phone+'"}';
    var obj = JSON.parse(myInfo) ;
    document.getElementById("resultJson").innerHTML = " My name is: " + obj.firstName + " " + obj.lastName + "." + " My calling is: " + obj.calling + "." + " Text me at this number, " + obj.phone + ", when you need me! ";

        var json = {
            "0": {
                "firstName": firstName,
                "lastName": lastName,
                "calling": calling,
                "phone": phone
            },
            "1":{
                "name": "Helen",
                "lastName": "Parr",
                "calling": "Elastigirl",
                "phone": 411
            }
        };
        var persons = "";
        for (var i in json) {
            //alert("Position: "+i);
            for (var j in json[i]) // j is the values , columns
            {
                persons += " Position: " +i+ " KEY: "+j+" VALUE: "+json[i][j] +"<br>";
               //alert("KEY: "+j+" VALUE: "+json[i][j]);
            }
        }
    document.getElementById("resultJson2").innerHTML = persons;
}

function informationStringify(){
    var obj = { name: "Helen", age: 30, city: "TriCity", job: "a super" };
    var myJSON = JSON.stringify(obj);
    document.getElementById("resultStringify").innerHTML = "<strong>Transform into a string: </strong>" + myJSON;
}