/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi there!");
        }, n * 1000);
    });
}

let w = wait(1);
w.then(function(value)
{
    console.log();
});


module.exports = wait;
