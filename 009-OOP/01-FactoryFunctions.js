// Factory Functions : - These are those functions which create an object and returns it

function CreateCharacter(name, weapon){
    return {
        name: name,
        weapon: weapon,
        attack() {
            console.log(`Attack with ${weapon}`)
        }
    }
}

/*
    Problem with factory functions is that everytime a new object is
    created the attack function took some place in memory. Instead
    we can just put attack someone once in memory and point to it
    everytime object is created.
*/
const archer = CreateCharacter('Archer Queen', 'Bow')
archer.attack()


// Memory Optimized Code

const characterFunction = {
    attack(){
        console.log(`Attack ${this.weapon}`)
    }
}

function CreateCharacterMemoryOptimized(name, weapon){
    // Instead of returning normally lets use Object.create()

    let newCharacter = Object.create(characterFunction)
    newCharacter.name = name
    newCharacter.weapon = weapon

    return newCharacter
}

const goblin = CreateCharacterMemoryOptimized('Goblin', 'Wrist')
console.log(goblin.attack())