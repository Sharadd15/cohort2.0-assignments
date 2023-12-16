function LogCount(count)
{
    console.log(count);
}

let count = 1;
setInterval(function(){
    LogCount(count);
    ++count;
}, 1000);