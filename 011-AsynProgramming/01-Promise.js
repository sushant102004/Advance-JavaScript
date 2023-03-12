let promise = new Promise((resolve, reject) => {
    let a = 1 + 1 + 1

    if(a == 2){
        resolve()
    } else reject()
})

promise.then(() => {console.log('Condition is true.')}).catch(() => {console.log('Condition Fails')})