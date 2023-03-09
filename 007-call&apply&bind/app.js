const wizard = {
    name: 'Stan',
    health: 90,
    heal: function(howMuch) {
        this.health += howMuch
    }
}

const archer = {
    name: 'Robin Hood',
    health: 10
}


// Calling heal function from wizard to archer to heal him.
wizard.heal.call(archer, 40)
console.log(archer)

// apply can have array of parameters
wizard.heal.apply(archer, [30])
console.log(archer)

// bind does't run that function instantly instead it return another function
const healPower = wizard.heal.bind(archer, 20)
healPower()
console.log(archer)