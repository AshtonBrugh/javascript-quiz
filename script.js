var btnStart = document.getElementById("btn-start");
var timer = document.getElementById("timer");
var count = 45;
var tracker = 10;



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

    //question ONE
document.querySelectorAll('.answersOne').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-one").style.display = "none";
        document.getElementById("question-two").style.display = "inherit";
    })
});

    //question TWO
document.querySelectorAll('.answersTwo').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-two").style.display = "none";
        document.getElementById("question-three").style.display = "inherit";

    })
});

    //question THREE
document.querySelectorAll('.answersThree').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-three").style.display = "none";
        document.getElementById("question-four").style.display = "inherit";

    })
});

    //question FOUR
document.querySelectorAll('.answersFour').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-four").style.display = "none";
        document.getElementById("question-five").style.display = "inherit";

    })
});

    //question FIVE
document.querySelectorAll('.answersFive').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-five").style.display = "none";
        document.getElementById("question-six").style.display = "inherit";

    })
});

    //question SIX
document.querySelectorAll('.answersSix').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-six").style.display = "none";
        document.getElementById("question-seven").style.display = "inherit";

    })
});

    //question SEVEN
document.querySelectorAll('.answersSeven').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-seven").style.display = "none";
        document.getElementById("question-eight").style.display = "inherit";

    })
});

    //question EIGHT
document.querySelectorAll('.answersEight').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-eight").style.display = "none";
        document.getElementById("question-nine").style.display = "inherit";

    })
});

    //question NINE
document.querySelectorAll('.answersNine').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-nine").style.display = "none";
        document.getElementById("question-ten").style.display = "inherit";

    })
});

    //question TEN
document.querySelectorAll('.answersTen').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-ten").style.display = "none";

    })
});

var A1 = document.getElementById("A1")
          
    A1.onclick = function() {
        count -= 4;
    };

 var B1 = document.getElementById("B1")
          
    B1.onclick = function() {
        console.log("correct")
    };

var C1 = document.getElementById("C1")

    C1.onclick = function() {
        count -= 4;
    }

var D1 = document.getElementById("D1")

    D1.onclick = function() {
        count -=4;
    }




    














    














