'use strict'
/*
Here height is not declared using var, let or const and hence during hoisting
height will be undefined and then 10. This is called Global Variable Leakage.

We can prevent this Global Variable Leakage by writing 'use strict' on top.
*/

function jsIsWeird() {
    height = 10
    return height
}

// console.log(jsIsWeird())

var hello = function myFunction() {
    return 'Hello, world!'
}

console.log(hello())

/*
myFunction() will not work because it is enclosed inside its own scope. It can
only be used inside himself.
*/

// console.log(myFunction())