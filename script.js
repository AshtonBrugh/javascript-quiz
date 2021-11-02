var btnStart = document.getElementById("btn-start");
var timer = document.getElementById("timer");
var count = 4;

btnStart.addEventListener('click', function() {
   var intervalId = setInterval(function () {

    if(count === 0){
        clearInterval();

    } else {
        count -= 1;
        timer.textContent = count; }
        
    }, 1000)

    

});

    














