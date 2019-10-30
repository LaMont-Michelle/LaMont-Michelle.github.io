
// AJAX FOR TOPIC 4
//  using the XMLHttpRequest() function 
function requestDisplay() {
var xhttp = new XMLHttpRequest();       // xhttp is a commonly used variable 
var results = document.getElementById('displayParsed');
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(xhttp.responseText);
        for (i = 0; i < 25; i++) {
            results.innerHTML += '<li>' + "font-family: " + data.items[i].family + ", " +
                "category: " + data.items[i].category + ", " + "version: " + data.items[i].version + ", " + "last modified: " + data.items[i].lastModified + '</li>';
            console.log(data);
        }
    }
}
    xhttp.open("GET", "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDGCSG48HaUElIeULsDvk5XyHfSh7gNGNM", true);
    xhttp.send();
};

function requestDisplaySW() {
var xhttp = new XMLHttpRequest();       // xhttp is a commonly used variable 
var results = document.getElementById('displayParsedSW');
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var dataSW = JSON.parse(xhttp.responseText);
        console.log(dataSW);
       results.innerHTML += 
       "Name: " + dataSW.name + 
       '<br>' + "Height: " + dataSW.height +
       '<br>' + "Mass: " + dataSW.mass + 
       '<br>' + "Hair color: " + dataSW.hair_color +
       '<br>' + "Skin color: " + dataSW.skin_color +
       '<br>' + "Eye color: " + dataSW.eye_color +
       '<br>' + "Birth year: " + dataSW.birth_year +
       '<br>' + "Gender: " + dataSW.gender ;
       
        }
    }
    xhttp.open("GET", "https://swapi.co/api/people/1/", true);
    xhttp.send();
};