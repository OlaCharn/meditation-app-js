//по нажатию на первую пусть таймер запускается, а по нажатию на вторую - останавливается.
const startTime = document.querySelectorAll("#start"); //кнопка для старт таймера
const stopTime = document.querySelectorAll("#stop"); //кнопка для стоп таймера
const resetTime = document.querySelectorAll("#reset"); //кнопка для ресет таймера

const showTime = document.querySelector("#showTime"); //место для показаний таймера

const playButton5min = document.querySelector("#playButton5min"); //кнорка на 5 минут
const playButton7min = document.querySelector("#playButton7min"); //кнопка на 7 минут
const playButton10min = document.querySelector("#playButton10min"); //конпка на 10 минут



// функция для плеера таймера обратного отсчета на 5 минут
function timeRunFiveMitute(){  

    let timerId;
    const timeInMinutes = 5;
    let amountTimeInSeconds = timeInMinutes * 60  //amount time in seconds

    startTime.forEach(i =>{i.addEventListener("click", beginTimer)});
    stopTime.forEach(i =>{i.addEventListener("click", stopTimer)});
    resetTime.forEach(i =>{i.addEventListener("click", resetTimer)});

    function beginTimer(){
        timerId = setInterval(count,1000);

        function count() { 
            let minutes = Math.floor(amountTimeInSeconds / 60 ); //minutes
            let seconds = amountTimeInSeconds % 60; //seconds
            amountTimeInSeconds--;
            showTime.innerHTML = `${minutes}:${seconds}` ;

            document.querySelector("#player").play() 
            if(amountTimeInSeconds < 0){
                clearInterval(timerId);
                amountTimeInSeconds = 0;
            }
            if (seconds < 10){ //этот блок сделан для того, чтобы при отображении секунд меньше 10, перед стоял 0
                seconds = "0" + seconds;
            };
    }
}

function stopTimer() {
    clearInterval(timerId);
    document.querySelector("#player").pause() 

}

function resetTimer() {
    clearInterval(timerId);
    showTime.innerHTML = "00:00";
    document.querySelector("#player").pause() 

}
}

// функция для плеера таймера обратного отсчета на 7 минут
function timeRunSevenMitute(){  

    let timerId;
    const timeInMinutes = 7;
    let amountTimeInSeconds = timeInMinutes * 60  //amount time in seconds
    
    startTime.forEach(i =>{i.addEventListener("click", beginTimer)});
    stopTime.forEach(i =>{i.addEventListener("click", stopTimer)});
    resetTime.forEach(i =>{i.addEventListener("click", resetTimer)});
        
    function beginTimer(){
        timerId = setInterval(count,1000);
    
        function count() { 
            let minutes = Math.floor(amountTimeInSeconds / 60 ); //minutes
            let seconds = amountTimeInSeconds % 60; //seconds
            amountTimeInSeconds--;
            showTime.innerHTML = `${minutes}:${seconds}` ;
            document.querySelector("#player").play() 

            if(amountTimeInSeconds < 0){
                clearInterval(timerId);
                amountTimeInSeconds = 0;
            }
            if (seconds < 10){ //этот блок сделан для того, чтобы при отображении секунд меньше 10, перед стоял 0
                seconds = "0" + seconds;
            };
        }
    }
    
    function stopTimer() {
        clearInterval(timerId);
        document.querySelector("#player").pause() 

    }
    
    function resetTimer() {
        clearInterval(timerId);
        showTime.innerHTML = "00:00";
        document.querySelector("#player").pause() 

    }
}
    


// функция для плеера таймера обратного отсчета на 10 минут

function timeRunTenMitute(){  

    let timerId;
    const timeInMinutes = 10;
    let amountTimeInSeconds = timeInMinutes * 60  //amount time in seconds
    
    startTime.forEach(i =>{i.addEventListener("click", beginTimer)});
    stopTime.forEach(i =>{i.addEventListener("click", stopTimer)});
    resetTime.forEach(i =>{i.addEventListener("click", resetTimer)});
    
    function beginTimer(){
        timerId = setInterval(count,1000);
    
        function count() { 
            let minutes = Math.floor(amountTimeInSeconds / 60 ); //minutes
            let seconds = amountTimeInSeconds % 60; //seconds
            amountTimeInSeconds--;
            showTime.innerHTML = `${minutes}:${seconds}` ;
            document.querySelector("#player").play() 

            if(amountTimeInSeconds < 0){
                clearInterval(timerId);
                amountTimeInSeconds = 0;
            }
            if (seconds < 10){ //этот блок сделан для того, чтобы при отображении секунд меньше 10, перед стоял 0
                seconds = "0" + seconds;
            };
        }
    }
    
    function stopTimer() {
        clearInterval(timerId);
        document.querySelector("#player").pause() 

    }
    
    function resetTimer() {
        //clearInterval(timerId);
        //showTime.innerHTML = "00:00";
        //document.querySelector("#player").pause() 
        location.reload();

    }
}
    
//нажатие на кнопки с минутами 
playButton5min.addEventListener("click", () => {
    timeRunFiveMitute();
    playButton5min.classList.add("enableBtnColor");
    playButton7min.disabled = true;
    playButton10min.disabled = true;
});

playButton7min.addEventListener("click",() => {
    timeRunSevenMitute();
    playButton7min.classList.add("enableBtnColor");
    playButton5min.disabled = true;
    playButton10min.disabled = true;

} );


playButton10min.addEventListener("click",() => {
    timeRunTenMitute();
    playButton10min.classList.add("enableBtnColor");
    playButton7min.disabled = true;
    playButton5min.disabled = true;

} );
