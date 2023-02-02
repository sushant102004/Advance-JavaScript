greet() // This works because functions are completely hoisted.
console.log(name) // This will not work because variables are partially hoisted
goodNight() // ReferenceError: Cannot access 'goodNight' before initialization

var name = 'Sushant'

function greet(){
    console.log('Hello, How are you?')
}

let goodNight = function () {
    console.log('Good night')
}