/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
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

function waitOneSecond() {
    return waitForNSeconds(1);
}

function waitTwoSecond() {
    return waitForNSeconds(2);
}

function waitThreeSecond() {
    return waitForNSeconds(3);
}

async function calculateTime() {
    let startTime = new Date();
    let result = await waitOneSecond();
    console.log(result);
    result = await waitTwoSecond();
    console.log(result);
    result = await waitThreeSecond();
    console.log(result);
    let endTime = new Date();
    console.log("time taken is: ", (endTime -  startTime)/1000);
}

calculateTime();