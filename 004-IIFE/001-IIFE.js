/*
IIFE are the functions that are executed as soon as they are created.

This technique is used to prevent global namespace from getting poluted.
*/


(function test(){
    console.log('Hello World')
})()

// Advanced IIFE
var sampleFramework = (function () {
    function a(){
        console.log('Data from function a()')
    }
    function b(){
        console.log('Data from function b()')
    }

    return {
        a : a,
        b : b
    }
})()

sampleFramework.a()
sampleFramework.b()