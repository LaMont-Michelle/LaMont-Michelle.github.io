
// slide menu: 
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// slide menu end



// concat a string and number
function output(){
    var number = 7;
    var output = "The number is ";
    //Add the output value to p tag
    document.getElementById("output").innerHTML = "Demo result: " + output + number;
}

// simple loop demonstration
function forLoops()
{
    var num = "";
    for(var i = 1; i <= 12; i++)
    {
        num = num + " " + i;
    }
    document.getElementById("demoLoop").innerHTML = "The numbers are: " + num;
}

function timeStatement() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
      greeting = "Good morning!!!";
    } else if (time < 20) {
      greeting = "Good day!!!";
    } else {
      greeting = "Good evening!!!";
    }
    document.getElementById("greeting").innerHTML = greeting;
  }

  /*
  var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

document.getElementById("goFibonacci").innerHTML = s;
 console.log(fibonacci_series(8));  */
 // second fib

 function goFibonacci()
 {
var i;
var fib = [0, 1];
var limit = prompt('Enter the limit for your series:', '');
for (i = 2; i < parseInt(limit); i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    }
    document.getElementById("resultParameters").innerHTML = fib;
}

// Functions for Arrays()
function myArrays()
{
var array1=[1,2,5,3,10,11];
var array2=[9,5,2,4,7];
    // calling function sumIndex
var arraySum=sumIndex(array1, array2);
document.getElementById("resultArray").innerHTML = "The index sum betwen array1 and array2 is:" + "" + arraySum;
}

function sumIndex(array1,array2)
{
    var theSum = [];
    for ( var i = 0; i < array1.length; i++)
    {
        if(array1[i]=="" || array1[i]== null)
        {
            array1[i] = 0;
        }
        if(array2[i] =="" || array2[i]== null)
        {
            array2[i] = 0;
        }
         theSum[i] = array1[i] + array2[i];
    }
    return theSum;
}

//associative array
function yourInfo()
{
    var aboutYou = new Object();
    var yourName = prompt("Enter your name: ");
    var yourColor = prompt("What is your favorite color");
    var yourAnimal = prompt("What is your favorite animal? ");
    aboutYou["Name "]= yourName;
    aboutYou["Favorite color "] = yourColor;
    aboutYou["Favorite animal "] = yourAnimal;
    var completeInfo = "";
    for(var i in aboutYou)
    {
        completeInfo+= i + "= " + aboutYou[i] + '<br>';

    }
    document.getElementById("resultInfo").innerHTML = "<strong>" + completeInfo+ "</strong>";
}
