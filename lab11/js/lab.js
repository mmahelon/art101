/**
 * Author:    Micah Mahelona, Jorge Gonzalez
 * Created:   11.7.2022
 * Art 101: Computer Programming for the Arts.
 *
 **/

$('#Challenges').append('<button  id ="buttonChalEl">Click Here!.</button>');

$('#Problems').append('<button  id ="buttonProbEl">Press to reveal!.</button>');

$('#Results').append('<button  id ="buttonResEl">Click Me!.</button>');

$('#buttonChalEl').click( function(){
  $('#Challenges').toggleClass("special");
});

$('#buttonProbEl').click( function(){
  $('#Problems').toggleClass("specialer");
});

$('#buttonResEl').click( function(){
  $('#Results').toggleClass("specialest");
});

//change button colors
$('#buttonChalEl').click( function(){
  $('#buttonProbEl').toggleClass("button");
});

$('#buttonProbEl').click( function(){
  $('#buttonResEl').toggleClass("button");
});

$('#buttonResEl').click( function(){
  $('#buttonChalEl').toggleClass("button");
});
