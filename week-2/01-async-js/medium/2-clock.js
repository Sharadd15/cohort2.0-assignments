function printDateIn12HrFormat(date)
{
    let hours = date.getHours();
    let merediem = (hours >= 12) ? " PM" : " AM";
    if(hours > 12 )
        hours = hours - 12;
    else if(hours === 0)
        hours = 12;
    console.log(hours + ":" + date.getMinutes() + ":" + date.getSeconds() + merediem);
}

function printDateIn24HrFormat(date)
{
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

setInterval(function(){
    let date = new Date();
    printDateIn12HrFormat(date);
    printDateIn24HrFormat(date);
}, 1000);