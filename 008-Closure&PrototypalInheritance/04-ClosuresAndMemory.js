function heavyWork() {
    const arr = new Array(10000).fill('Filled')
    console.log('Array Created')
}

// In this case array will be created everytime function is called and memory will be taken.

heavyWork()
heavyWork()
heavyWork()
heavyWork()

const getHeavyWork = heavyWorkTwo()
getHeavyWork(7)
getHeavyWork(7)
getHeavyWork(7)


// But in this case heavyWordTwo function will handle array creation and 
// retured closure will handle rest of the part.

function heavyWorkTwo() {
    const arr = new Array(10000).fill('Filled')
    console.log('Array Created Again')

    return function(index) {
        console.log(arr[index])
    }
}