/*
JavaScript has function scope. 
Variables declared inside function can't be accessed outside.
Variables declared using let and const have block scope and can't be accessed outside.
*/

if(5 > 3){
    var myVar = 'Hello'
    let myVarTwo = 'World'
    const myVarThree = 'Again'
}

function myFunction() {
    var secret = 1234
}

console.log(myVar) // This will work.
// console.log(myVarTwo) // ReferenceError
// console.log(myVarThree) // ReferenceError
// console.log(secret) // Reference Error