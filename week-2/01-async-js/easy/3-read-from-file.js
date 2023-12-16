const fs = require('fs');

fs.readFile("a.txt", 'utf-8', function(err, data) {
    if(err)
    {
        console.log("got error while reading the file: " + toString(err));
        return;
    }

    console.log("read contents of the file a.txt: " + data);
});
let sum = 0;
for(let i = 0; i < 10000000000; ++i)
    sum += i;

// function readPromise()
// {
//     return new Promise(function(resolve){
//         fs.readFile("a.txt", 'utf8', function(err, data)
//         {
//             resolve(data);
//         })
//     });
// }

// let readP = readPromise();
// readP.then(function(data){
//     console.log(data);
// });