// In JavaScript, the Date object is used to work with dates and times.
// date and time methods
/*
getDay()
getMonth()
getFullYear()
getHours()
getMinutes()
getSeconds()
*/

// current date
const now = new Date();

//--date parts
const day = now.getDay();
const month = now.getMonth();
const year = now.getFullYear();

//--time parts
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

//--format date and time

const formatteDate = `${day}/${month}/${year}`;
const formatteTime = `${hours}/${minutes}/${seconds}`;

console.log("Current Date", formatteDate);
console.log("Current Time", formatteTime);