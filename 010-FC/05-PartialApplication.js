/*
    In currying we were passing arguments one by one. But in 
    Partial Application we will pass the first argument in starting
    and all other other bundled together after that.

    Suppose a function accept 3 arguments then we can pass set one 
    argument first and then pass remaining two at once.
*/

const multiply = (a, b, c) => a * b * c

const partialMultiplyByFive = multiply.bind(null, 5)

console.log(partialMultiplyByFive(4, 8))