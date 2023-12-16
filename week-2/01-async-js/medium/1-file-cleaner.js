const fs = require('fs');

let filePath = "a.txt";

function fileCleaner(file)
{
    fs.readFile(file, 'utf8', function(err, data){
        if(err)
        {
            console.log("got error while reading the file: " + toString(err));
            return;
        }

        console.log("read contents of the file a.txt: " + data);
        updatedData = data.split(/\s+/).join(' ');
        fs.writeFile(file, updatedData, 'utf8', function(err){
            if(err)
            {
                console.log("Error while writing to the file " + file + " " + toString(err));
                return;
            }

            fs.readFile(file, 'utf8', function(err, data){
                if(err)
                {
                    console.log("got error while reading the file: " + toString(err));
                    return;
                }
                console.log("read contents of the file a.txt: " + data);
            })
        })
    })
}

fileCleaner(filePath);