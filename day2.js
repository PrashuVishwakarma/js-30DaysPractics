/*variable = variable is used to store the data or value which can we change
There are keywords to decleare the variabel
1. var 
2. let
3. const
*/

var a = 10;
console.log(a);
let num = 110;
console.log(a);
const pi = 3.14;
console.log(pi)

/*
Data types in javascript
There are two types of datatypes in js
Primitive 
Non primitive

Primitive
Number
null
bigInt
undefine
symbol
bool
string

Non-primitive
Array
object
*/

let age = 18;
console.log(typeof(age)); // number
let str;
console.log(typeof(str)); // undefine
let greet = null;
console.log(typeof(greet)); // object
let largeNum = BigInt(45578676464);
console.log(typeof(BigInt)); // function
let firstName = "Rahul";
console.log(typeof(firstName)); //string
let read = true;
console.log(typeof(read)); // boolean
let sym = Symbol();
console.log(typeof(sym)); // symbol