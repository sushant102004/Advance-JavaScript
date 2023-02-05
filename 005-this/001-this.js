/*
Usage of this keyword: -
1. It gives methods access to their objects.
2. Execute same code on multiple objects.
*/

const admin = {
    name: 'Sushant',
    dob: 2004,
    caculateAge : function caculateAge() {
        console.log(2023 - this.dob)
    }
}

admin.caculateAge()

const name = 'Sushant'

function showName(){
    return this.name
}

const personOne = {
    name: 'John',
    showName: showName
}

const personTwo = {
    name: 'Jassy',
    showName: showName
}

console.log(name)
console.log(personOne.showName())
console.log(personTwo.showName())