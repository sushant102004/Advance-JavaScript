class Character {
    constructor(name, weapon){
        this.name = name
        this.weapon = weapon
    }

    attack() {
        console.log(`Attack with ${this.weapon}`)
    }
}

const dragon = new Character('Draggy', 'Fire')
console.log(dragon)
dragon.attack()