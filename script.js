var btnStart = document.getElementById("btn-start");
var timer = document.getElementById("timer");
var count = 60;


//starting the timer
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

    //timer appears
    document.getElementById("timer").style.visibility = "visible";

    //home page disappears
    document.getElementById("home-page").style.display = "none";

    //question one appears
    var questionOne = document.getElementById("questions").style.display = "inherit";

    
    }, 1000)

});



    














