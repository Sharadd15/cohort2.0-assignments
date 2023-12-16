/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
function waitOneSecond() {
    return waitForNSeconds(1);
}

function waitTwoSecond() {
    return waitForNSeconds(2);
}

function waitThreeSecond() {
    return waitForNSeconds(3);
}


function calculateTime(p1, p2, p3) {
    let startTime = new Date();
    Promise.all([p1, p2, p3]).then(function(results){
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

let p1 = waitOneSecond();
let p2 = waitTwoSecond();
let p3 = waitThreeSecond();
calculateTime(p1, p2, p3);