var btnStart = document.getElementById("btn-start");
var timer = document.getElementById("timer");
var count = 12;

btnStart.addEventListener('click', function() {
   var intervalId = setInterval(function () {

    if(count <= 10){
        document.getElementById("timer").style.background = "red";
        document.getElementById("timer").style.color = "white";
    }

    if(count === 0){
        clearInterval();

    } else {
        count -= 1;
        timer.textContent = count; }

    document.getElementById("timer").style.visibility = "visible";
        
    }, 1000)

    

});

    














