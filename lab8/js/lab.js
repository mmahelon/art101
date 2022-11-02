/**
 * Author:    Micah Mahelona, Jorge Gonzalez
 * Created:   10.24.2022
 * Art 101: Computer Programming for the Arts.
 *
 **/

 function isEven(x) {
   return (x % 2 == 0);
 }

 // test function
 console.log("Is 1 even? ", isEven(1));
 console.log("Is 2 even? ", isEven(2));

 array = [1, 3, 9, 12, 15, 18, 21, 24, 27]
 console.log("My array", array);

 var even = array.map(isEven);
 // should return [false, false, false, true, false, true, false, true, false]
 console.log("Test of evenness of array:", even);

 var roots = array.map(function(x) {
   return x ** 0.5
 })
 // should return [1, 1.7320508075688772, 3, 3.4641016151377544, 3.872983346207417, 4.242640687119285, 4.58257569495584, 4.898979485566356, 5.1961522422706632]
 console.log("Square root of array:", roots);

var outputEl = document.getElementById("output");

mapResults = document.writeln
outputEl.innerHTML = "Original Array: " + array +
"<br>" + "\n Evenness of Array: " + even +
"<br>" + "Squareroots of Array: " + roots;



var outputE2 = document.getElementById("output2");

function greetMe() {
  console.log("Hi!")
}

function uResponse() {
  console.log("Thats good to hear!")
}

setTimeout(greetMe, 2000);
setTimeout(uResponse, 4000);

setTimeout(function() {
  console.log("How have you been?")
}, 3000);
