const array = []

console.log(array.__proto__)
console.log(array.__proto__.__proto__)
console.log(array.__proto__.__proto__.__proto__)

// Example of prototypal inheritance

const Person = {
    name : 'Name',
    age: 18,
    gender: 'Gender',

    isAdult() {
        return true ? this.age >= 18 : false
    }
}

const Students = [
    {
        rollNo: 11212531,
        department: 'CSE'
    }
]

const sushant = Students[0]

// We should never inherit like this because it is bad for performance.
sushant.__proto__ = Person

console.log(sushant.isAdult())
console.log(Person.isPrototypeOf(sushant))