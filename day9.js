//String Method : A string method is a built-in function that you can use on strings to perform specific actions or operations.

//Example :

let stdName = "arjun";
console.log(stdName.length);   //5

//Change Case
console.log(stdName.toUpperCase());  //Arjun
console.log(stdName.toLowerCase());  //arjun

console.log(stdName.replace("arjun","rahul"));  //rahul

//split() splits string into array
const fruit = "apple,orange,mango";
console.log(fruit.split(","));     // [apple, orange, mango]

const msg = "Hi ";
console.log(msg.repeat(3));  // Hi Hi Hi


const text = "Hello Words!";
console.log(text.startsWith("Hello"));   //true
console.log(text.endsWith("xyz"));    //false

//indexOf() find the occurance of index
console.log(text.indexOf("o"));
console.log(text.indexOf("xyz"));

//trim() remove whitespace
const carName = " Hello i am BMW ";
console.log(carName.trim());    //Hello i am BMW