/**
 * Author:    Micah Mahelona, Jorge Gonzalez
 * Created:   10.19.2022
 * Art 101: Computer Programming for the Arts.
 *
 **/
function NameSorter(){
  var userName = window.prompt("Hello! Can you tell me your name so I can arrange its letters by alphabetical order?");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// output
document.writeln("What's up? I just finished re-arranging your name into alphabetical order!",
NameSorter(), "</br>");
