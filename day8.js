/**
 * Object : object is a data structure that allows us to have key-value pairs
 * Comparing it to a real-world object, a pen is an object with several properties such as color, design, the material it is made of, etc.
 */

let person = {
  name: "Prashu",
  age: 22,
  isStudent: true
};
console.log(person.name);   //Prashu
console.log(person.age);    // 22

person.age = 23;
person["isStudent"] = false;

person.city = "Mumbai";

console.log(person.city);  //Mumbai
delete person.isStudent;
console.log(person);

//Object with function

let user = {
  name: "Prashu",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

user.greet();  // Hello, Prashu