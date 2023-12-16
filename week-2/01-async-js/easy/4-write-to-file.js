const fs = require('fs');

let filePath = "write.txt";
let content = "Write this content to the file.";

fs.writeFile(filePath, content,'utf8' , function(err){
    if(err)
    {
        console.log("Error while writing to the file " + filePath + " " + toString(err));
        return;
    }

    console.log("written to file " + filePath + " successfully");
    fs.readFile(filePath, 'utf8', function(err, data){
        if(err)
        {
            console.log("Error while Reading the file " + filePath + " error: " + toString(err));
            return;
        }

        console.log("Content of the file: " + data);
    });
});