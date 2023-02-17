// Primitive are pass by value

var a = 5
var b = a

b++

console.log(`a: ${a}`)
console.log(`b: ${b}`)

// Objects are pass by reference

const user = {name: 'John', age: 21}
const userNew = user

userNew.name = 'Michael'

console.log(`user1: ${user.name} ${user.age}`)
console.log(`user2: ${userNew.name} ${userNew.age}`)

// Proving that arrays are passed by reference

var arr = [1, 6, 4, 3]
var newArr = arr

newArr.push(485645)
console.log(`newArr: ${arr}`)

// Cloning Arrays

var myNewArr = [].concat(arr)
console.log(`myNewArr: ${myNewArr}`)

// Clonning Objects -> Object.assign  & ...

// Below example is of shallow cloning in which only first later is cloned only.

let obj = {
    a: 'a',
    b: 'b',
}

let newObj = Object.assign({}, obj)
console.log(`newObj: ${newObj.a} ${newObj.b}`)

// For deep cloning we can use json

let newObject = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'This is message from 2nd layer'
    }
}

let