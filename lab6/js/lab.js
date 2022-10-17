/**
 * Author:    Micah Mahelona, Jorge Gonzalez
 * Created:   10.17.2022
 * Art 101: Computer Programming for the Arts.
 **/

//declare object
 const MicahsRide = {
   make: "Toyota",
   model: "Prius Prime",
   color: "Space Gray",
   year: "2020",
   age: function() {
     return 2022 - age;
   }
 }
 const JorgesRide = {
   make: "Chevrolet",
   model: "Silverado",
   color: "Red",
   year: "2021",
   age: function() {
     return 2022 - age;
   }
 }
 const myTransport = ["MicahsRide, JorgesRide"];

//output
 document.writeln("Micah's Main Ride: <pre>",
    JSON.stringify(MicahsRide, null, '\t'), "</pre>");
 document.writeln("Jorges Main Ride: <pre>",
    JSON.stringify(JorgesRide, null, '\t'), "</pre>");
