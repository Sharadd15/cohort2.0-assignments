/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function waitForNSeconds(n)
{
    return new Promise(function(resolve)
    {
        setTimeout(function()
        {
            resolve("Finished " + n + " Seconds");
        }, n * 1000)
    })
}
function wait1(t) {
    return waitForNSeconds(t);
}

function wait2(t) {
    return waitForNSeconds(t);
}

function wait3(t) {
    return waitForNSeconds(t);
}


function calculateTime(t1, t2, t3) {
    let startTime = new Date();
    Promise.all([t1, t2, t3]).then(function(results){
        console.log(results);
        let endTime = new Date();
        console.log("Time taken to resolve all promises: " + (endTime - startTime)/1000);
    });
};

async function calculateTime(p1, p2, p3) {
    let startTime = new Date();
    let result = await p1;
    console.log(result);
    result = await p2;
    console.log(result);
    result = await p3;
    console.log(result);
    let endTime = new Date();
    console.log("time taken is: ", (endTime -  startTime)/1000);
}

let p1 = wait1(1);
let p2 = wait2(2);
let p3 = wait3(3);
calculateTime(p1, p2, p3);

module.exports = calculateTime;
