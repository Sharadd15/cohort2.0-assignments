/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const startTime = new Date();
    let currTime = new Date();
    while((currTime - startTime) < 1000*seconds)
    {
        currTime = new Date();
    }
}   
let startTime = new Date();
sleep(10);
let endTime = new Date();
console.log( (endTime - startTime)/1000);