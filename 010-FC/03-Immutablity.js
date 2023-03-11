/*
    Immutablity is the concept of not changing the state
    instead make a copy of state everytime and return.
*/

const sushant = { name: 'Sushant' }

function clone(obj){
    return {...obj}
}

const newObj = clone(sushant)

// Here I'm mutating the state that is agianst immutablity
// newObj.name = 'Jhon'

// In order to do this create another function.

function updateName(obj, name){
    return obj.name = name
}

updateName(newObj, 'John')

console.log(newObj.name)