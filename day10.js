/*Most Commonly Used Methods
-----------------------------------------
push() - Adding elements
pop() - Removing elements
map() - Transforming data
filter() - Filtering data
forEach() - Iterating through array
find() - Finding specific elements
includes() - Checking existence
slice() - Creating subarrays
concat() - Combining arrays
reduce() - Aggregating data */

const num = [1, 2, 3, 4, 5];
console.log(num.push(6)); //6

let fruits = ["apple", "banana", "orange"];
let removed = fruits.pop();
console.log(fruits); // ['apple', 'banana']
console.log(removed); // 'orange'

const numbers = [1, 5, 8, 12, 15, 20];
const result = numbers.find((num) => num > 12); // Find first number greater than 12
console.log(result); //15

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const ans = arr1.concat(arr2);
console.log(ans);

//join multiple array

const fruit = ["apple"];
const vegetable = ["potato"];
const meat = ["chicken"];
const food = fruit.concat(vegetable, meat);
console.log(food);

//  Syntax: array.slice(start, end)

const newFruit = ["apple", "orange", "banana", "orange", "grape"];
const newResult = newFruit.slice(2, 5);
console.log(newResult);

const numNew = [1, 2, 3, 4, 5];
const numResult = numNew.slice(2);
console.log(numResult);
