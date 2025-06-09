/* function : function is a set of block which is used
to perform some specific task.
*/

// function functionName(parameter1, parameter2, ...) 
// {
//     //function body here
//     return value; // Optional
// }

function square(number){
    return number * number
}
console.log(square(9))

function newValue(x,y){
    return x + y
}
console.log(newValue(55,45))

function helloMsg(name){
    return ("hello "+name+" how are you")
}
console.log(helloMsg("Guys"))
console.log(helloMsg("Guys"))
console.log(helloMsg("Guys"))

//Function Expression
let addNum = function num(x,y){
    return x + y

}
console.log(addNum(2,2))

//Arrow Functions Parameters
const add = (a, b) => a + b;
console.log(add(5, 3));
//Arrow Functions No Parameters
const greet = () => console.log("Hello, Prashu")
greet();