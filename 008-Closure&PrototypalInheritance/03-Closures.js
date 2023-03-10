/*
When a function return another function then it is called closure
and we can still access bove variables even after returning
*/

function familyTree() {
    let grandpa = 'Grandpa'
    
    return function a() {
        let father = 'Father'
        let somethingElse = 'Something Else'

        return function b() {
            let son = 'Son'
            console.log(`${grandpa} -> ${father} -> ${son}`)
        }
    }
}

familyTree()()()

/*
Here I'm still able to access grandpa and father variables even after
we had retured to another function. Because JavaScript engine keeps
them safe as we are referencing them below.

But something else will not be kept in memory because it is no more
referenced.
*/