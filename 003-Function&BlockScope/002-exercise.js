// var keyword

function loopOne(){
    for(var i = 0; i < 5; i++){
        console.log(i)
    }
    console.log(`Final i: ${i}`)
}

loopOne() // This will work as i is declared using var and it can be accessed

function loopTwo(){
    for(let j = 0; j < 5; j++){
        console.log(j)
    }
    console.log(`Final j: ${j}`)
}

/*
It will not work because j is declared using let and it is block scoped.
*/

loopTwo()