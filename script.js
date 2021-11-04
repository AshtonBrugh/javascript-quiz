var btnStart = document.getElementById("btn-start");
var timer = document.getElementById("timer");
var count = 45;
var tracker = ("turn this variable into an array of correct answers");

                 


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
    
    }, 1000)

     //timer appears
     document.getElementById("timer").style.visibility = "visible";

     //home page disappears
     document.getElementById("home-page").style.display = "none";
 
     //question one appears
     document.getElementById("question-one").style.display = "inherit";

});

document.querySelectorAll('.answersOne').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-one").style.display = "none";
        document.getElementById("question-two").style.display = "inherit";

    })
});

document.querySelectorAll('.answersTwo').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-two").style.display = "none";
        document.getElementById("question-three").style.display = "inherit";

    })
});

document.querySelectorAll('.answersThree').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-three").style.display = "none";
        document.getElementById("question-four").style.display = "inherit";

    })
});

document.querySelectorAll('.answersFour').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-four").style.display = "none";
        document.getElementById("question-five").style.display = "inherit";

    })
});

document.querySelectorAll('.answersFive').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-five").style.display = "none";
        document.getElementById("question-six").style.display = "inherit";

    })
});

document.querySelectorAll('.answersSix').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-six").style.display = "none";
        document.getElementById("question-seven").style.display = "inherit";

    })
});

document.querySelectorAll('.answersSeven').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-seven").style.display = "none";
        document.getElementById("question-eight").style.display = "inherit";

    })
});

document.querySelectorAll('.answersEight').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-eight").style.display = "none";
        document.getElementById("question-nine").style.display = "inherit";

    })
});

document.querySelectorAll('.answersNine').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-nine").style.display = "none";
        document.getElementById("question-ten").style.display = "inherit";

    })
});
document.querySelectorAll('.answersTen').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-ten").style.display = "none";

    })
});











    














