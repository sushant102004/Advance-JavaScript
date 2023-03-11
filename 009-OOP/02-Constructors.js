function Character(name, weapon) {
    this.name = name
    this.weapon = weapon
}

Character.prototype.attack = function() {
    return console.log(`Attack with ${this.weapon}`)
}

// new keyword automatically return object.
const giant = new Character('Giant', 'Hammer')
console.log(giant.name)
giant.attack()