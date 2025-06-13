//Arrays : Arrays is used to store the multiple value in single variable

let fruits = ["Apple","Banana","Orange","Mango"]
console.log(fruits[2]);
console.log(fruits[0]);

// Common Array method 

/**push()      add value at end
 * pop()       remove last value
 * shift()     remove first value
 * unshift()   add value at beginning
 * length()    get array size
 * indexOf()   find index of value
 * map()       transform each value
 * slice()     it output return the given range and remove the out out of range, they not affect original array
 * splice()    removing or replacing existing elements 
*/

let carName = ["BMW", "Audio", "Range Rover"];
carName.push("Urus","Porche");   //'BMW', 'Audio', 'Range Rover', 'Urus', 'Porche'
console.log(carName);

let bikeName = ["NinjaH2R", "Hunter", "R15","PulserNs"];
bikeName.pop();               //NinjaH2R", "Hunter", "R15"
bikeName.shift();             //"Hunter", "R15"
bikeName.unshift("ZMR");      //"ZMR", "Hunter", "R15"
console.log(bikeName[0]);     //"ZMR"
console.log(bikeName.length); //3
  

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));      // "camel", "duck", "elephant"
console.log(animals.slice(2,4));   //   "camel", "duck"

const months = ["Jan", "March", "April", "June"];
months.splice(1,0, "feb");
console.log(months);   //"Jan","feb", "March", "April", "June"
months.splice(4,1,"May");
console.log(months);  //'Jan', 'feb', 'March', 'April', 'May' 