/**
 * Author:    Micah Mahelona, Jorge Gonzalez
 * Created:   11.1.2022
 * Art 101: Computer Programming for the Arts.
 *
 **/

//Modified name sorter function from Lab 7 >:D
 function NameSorter(inputName){
    var userName = inputName;
    // split string to array
    var nameArray = userName.split('');
    // sort array
    var nameArraySort = nameArray.sort();
    // join array back to a string
    var nameSorted = nameArraySort.join('');

    return nameSorted;
  }

//variable for button
var buttonEl = document.getElementById("submit");
//variable for output
var outputEl = document.getElementById("output");

//Adds user interaction to button on website
buttonEl.addEventListener('click', function(){
  //Saves information from user input text box "user-name" to variable "inputVal"
  var inputVal = document.getElementById("user-name").value;
  var sortedNewName = NameSorter(inputVal);
  outputEl.innerHTML = sortedNewName;
})



 // output

//Add event listener

//bioE1.innerHTML = "What's up? I just finished re-arranging your name into alphabetical order!",
//NameSorter(), "</br>");
