/*
    These are the main concepts of FC. Think compose as a convyer belt
    where data will be given and it will be sent to next stages.

    Each stage will produce some output and output of previous
    stage will be input for next stage.
*/

/*
    1. Multiple a number by negative number by 3.
    2. Return positive output.
*/

const compose = (f, g) => (data) => f(g(data))

// Pipe: - It just execute function left to right.
const pipe = (f, g) => (data) => g(f(data))


const multiplyBy3 = (num) => num * 3
const returnAbsolute = (num) => Math.abs(num)

const multipleAndAbsolute = compose(multiplyBy3, returnAbsolute)

console.log(multipleAndAbsolute(-5))