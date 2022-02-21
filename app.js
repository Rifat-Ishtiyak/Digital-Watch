function currentTime(){
    const myDate =  new Date();

    const hr = myDate.getHours();
    const min = myDate.getMinutes();
    const sec = myDate.getSeconds();

    const month = myDate.getMonth();
    const year = myDate.getFullYear()
    const date =  myDate.getDate();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if(hr>12){
        document.getElementById('hours').innerText = hr-12;
    }
    else if(hr<12){
        document.getElementById('hours').innerText = hr;
    }

    for(let i=0;i<=month;i++){
        if(month == i){
            document.getElementById('month').innerText = months[i];
        }
    }

    document.getElementById('minutes').innerText = min;
    document.getElementById('seconds').innerText = sec;
    document.getElementById('year').innerText = year;
    document.getElementById('date').innerText = date;
   

    
}

setInterval(currentTime, 10);
