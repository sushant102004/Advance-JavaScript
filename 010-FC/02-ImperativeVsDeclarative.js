/*
    In Impreative programming we code each and every step to get
    desired results from our function.

    In Declarative programming we just tell what we want and use
    pre-defined functions and techniques to get desired results
    and do not code each and every step.
*/

// Imperative Example
const arr = [4, 3, 6, 1, 9, 7]

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log('')

// Declarative Example
arr.forEach((item) => console.log(item))