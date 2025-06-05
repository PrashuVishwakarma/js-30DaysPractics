/*
Loop in javascript
The set of instruction or statments are repeatedly or multiple time excute then we go for looping statments.

Types of loop
for loop
while loop
do while loop
 */

//for loop : for is a keywords, when we know the number of repetition then we go for for loop

for(let i = 1; i<=5; i++){ 
    console.log(i);
}

//while loop : while is a keywords, when we don't know the number of repetition then we go for while loop
let i = 1
while(i <= 5){
    console.log("Hello, javaScript")
    i++;
}

/*do while loop : do and while is a keywords, when the set of instruction or statment excute atleast one time whether
                  respectivie the condition then we go for do while loop
*/

let num = 1
do{
    console.log(num)
    num++;
}
while(num <+ 5);

//Semicolons is not mandatory in javascript