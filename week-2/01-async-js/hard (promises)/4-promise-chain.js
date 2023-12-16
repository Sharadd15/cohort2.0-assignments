/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitForNSeconds(n)
{
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Finished " + n + " seconds");
        }, n*1000);
    });
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

async function calculateTime(t1, t2, t3) {
    let startTime = new Date();
    let result = await wait1(1);
    console.log(result);
    result = await wait2(2);
    console.log(result);
    result = await wait3(3);
    console.log(result);
    let endTime = new Date();
    console.log("time taken is: ", (endTime -  startTime)/1000);
}

calculateTime();

module.exports = calculateTime;
