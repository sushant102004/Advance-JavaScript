/*
    Currying is the concept of chaining a series of function together
    where each function require single argument.
*/

const multiply = (a) => (b) => a * b

// Curried Function Calling
console.log(multiply(2)(3))

// We can also store an instance of this function if it is majorly used.

const multiplyBy5 = multiply(5)

console.log(multiplyBy5(4))