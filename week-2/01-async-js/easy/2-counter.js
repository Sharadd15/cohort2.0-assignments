function LogCount(count)
{
    console.log(count);
    setTimeout(function(){
        ++count;
        LogCount(count);
    }, 1000)
}
count = 1;
LogCount(count);
