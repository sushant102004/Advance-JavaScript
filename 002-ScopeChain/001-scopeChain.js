function a(){
    var a = 10

    return function b() {
        var b = 20
        console.log(a)

        return function c() {
            var c = 30
            console.log(b)
        }
    }
}

a()()()