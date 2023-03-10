// Ways to invoke function

function one(){
    console.log('One')
}

one()
one.call()

const myObj = {
    one() {
        console.log('One')
    }
}

myObj.one()

const functionConstructor = new Function('params', "console.log(params)")
functionConstructor('b')


/*
When a function is created a special object is also created which contain function
name as property and other things as well.
*/