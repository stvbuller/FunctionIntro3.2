//first function is to determine if a variable is a string or not


function checkForString() {
  var inputString = document.getElementById("inputString").value;
  if (isNaN(inputString)) {
    alert("This is a string");
  } else {
    alert("This is not a string")
  }
}


//Write a function that tells which of two inputs is smaller

function whichIsSmaller(){
  var inputFirst = document.getElementById("inputFirst").value
  var inputSecond = document.getElementById("inputSecond").value

  if (inputFirst > inputSecond){
    alert("The second input is smaller")
  } else {
    alert("The first input is smaller")
  }
}

/*
//Write a function that concatenates n number of string together

function concatInput () {
  var inputString1 = document.getElementById("inputString1").value
  alert("The string is " + inputString1)  
}
*/
