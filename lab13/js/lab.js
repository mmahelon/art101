/**
 * Author:    Micah Mahelona
 * Created:   11.9.2022
 * Art 101: Computer Programming for the Arts.
 *
 **/

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryfindoor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText= "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText
})


//Task X!
function sortingHatx(str) {
  const houseArray = ["Gryfindoor", "Ravenclaw" ,"Slytherin", "Hufflepuff"]
  len = houseArray.length;
  mod = len % 4;
  return houseArray[mod]
}
var myButtonx = document.getElementById("buttonx");
myButtonx.addEventListener("click", function() {
  var namex = document.getElementById("inputx").value;
  var housex = sortingHat(namex);
  newTextx= "<p>The Sorting Hat has sorted you into " + housex + "</p>";
  document.getElementById("outputx").innerHTML = newTextx
})
