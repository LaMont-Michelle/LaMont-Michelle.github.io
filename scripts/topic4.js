
// AJAX FOR TOPIC 4
//  using the XMLHttpRequest() function 
function requestDisplay() {
    var xhttp = new XMLHttpRequest();       // commonly used variable 
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