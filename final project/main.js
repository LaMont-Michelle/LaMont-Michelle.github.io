// DINO information
function requestDisplayDino(temp) {
  console.log("hello " + temp);    // debugging 
  var xhttp = new XMLHttpRequest();  
  var results = document.getElementById('displayParsedDino');
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var rawDataDino = JSON.parse(xhttp.responseText);
      var dataDino = JSON.parse(xhttp.responseText);
      var printMovies;
      console.log(rawDataDino);
      
      for (var j =0 ; j < rawDataDino.dinosaurs.length; j++) {
        if(rawDataDino.dinosaurs[j].name == temp){
          dataDino.dinosaurs[0] = rawDataDino.dinosaurs[j];
          printMovies = " ";
          var k = 0;
          //printMovies +=  '<h3>' + temp + '</h3><br> Movies: ' ;
          printMovies += "The " + temp + " can be seen in: \n "
         // printMovies += rawDataDino.dinosaurs[j].movies[k];
        while (k < rawDataDino.dinosaurs[j].movies.length){
          printMovies += rawDataDino.dinosaurs[j].movies[k];
          printMovies += '\n'; 
          k++;
        }
        }
      }
      console.log(printMovies);
      window.alert(printMovies);
      /*  results.innerHTML = 
          '<br>'+ printMovies; */
  
      }   
    }
      xhttp.open("GET", "final_project.json", true);
      xhttp.send();
  }; 

  // change color and make bigger
function textChange(){
  document.getElementById("changingText").classList.toggle("size");
}