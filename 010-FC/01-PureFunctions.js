/*
    These are those functions which produce same output everytime
    they are called. 

    These functions also don't have any side effects. Which means that
    they will not modify global state, mutate arguments and perform
    I/O operations.
*/

const array = [1, 2, 3, 4, 5, 6]

// Example of pure function.
function removeLastElement(arr) {
    const newArr = [].concat(arr)
    newArr.pop()
    return newArr
}

const newArray = removeLastElement(array)

console.log(array)
console.log(newArray)