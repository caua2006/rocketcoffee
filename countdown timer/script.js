const countdownTime = new Date("02/04/2023 00:00:00").getTime()
let stop = setInterval(()=>{
    let today = new Date().getTime()
    let timeLuiz= document.querySelector(".time")
    let gap = countdownTime - today


    let days = Math.floor(gap / (1000 * 60 * 60 * 24));
   
    
    let hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    
    let minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

    
    let seconds = Math.floor((gap % (1000 * 60)) / 1000);


    
    if (days <10 ){
        days="0"+days
    }
    if (hours <10 ){
        hours="0"+hours
    }
    if (minutes <10 ){
        minutes="0"+minutes
    }
    if (seconds <10 ){
        seconds="0"+seconds
    }

     
    if (gap < 0) {
        timeLuiz.innerHTML =  "00: " + "00 "+  ":00" + ":00";
        timeLuiz.innerHTML = "ACABOU"
        clearInterval(stop);
        
        
    } else {
        timeLuiz.innerHTML = days + " : " + hours + " : "+ minutes + " : " + seconds
    }

},1000)

