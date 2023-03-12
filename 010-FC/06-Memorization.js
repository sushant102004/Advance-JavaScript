/*
    Suppose we have a function that does same processing and return 
    same output everytime but it take a lot of time to execute.

    Then it will take that much time to execute each time I call it.

    To solve this issue we can cache or memorize the output.
*/


function myFunc() {
    const cache = {}

    return function(n) {
        if(n in cache) {
            return console.log(cache[n])
        } else {
            console.log('Long processing time.')
            const result = 10 + n
            cache[n] = result 
            return console.log(result)
        }
    }
}

const addTen = myFunc()

addTen(5)
addTen(5)
addTen(6)