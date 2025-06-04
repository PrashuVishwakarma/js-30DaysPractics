/*Conditional Statements :-
Conditional statements are basically checks to see if a certain condition is either true or false.
If the condition is true then run code if block, if it's false then run code else block
*/

// Types of conditional statements:

/*
if statements 
if else
else..if
switch
*/

// Example if
let age = 20;
if (age >= 18){
    console.log("You are eligible to vote:")
}

// Example if else
let newAge = 16;
if( newAge >= 18){
    console.log("you are eligible to vote:")
}
else{
    console.log("you are not eligible to vote:")
}

// Example else..if 
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

//Example Switch 

let day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Sunday":
    console.log("Holiday!");
    break;
  default:
    console.log("Regular day.");
}
