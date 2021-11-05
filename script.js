var btnStart = document.getElementById("btn-start");
var timer = document.getElementById("timer");
var count = 45;
var score = 10;
var highScorebtn = document.getElementById("btn-highscore")

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

//pressing the highscore btn
highScorebtn.addEventListener('click', function () {

    document.getElementById("home-page").style.display = "none";
    document.getElementById("end").style.visibility = "visible";
})

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

  //end page
  document.querySelectorAll('.answersTen').forEach(item => {
    item.addEventListener('click', event => {

        document.getElementById("question-ten").style.display = "none";
        document.getElementById("end").style.visibility = "visible";

        document.getElementById("placeholder").innerHTML = score;

    })
});

//question ONE button onclick
var A1 = document.getElementById("A1")
          
    A1.onclick = function() {
        count -= 4;
    };

 var B1 = document.getElementById("B1")
          
    B1.onclick = function() {
        score += 10;
 
    };

var C1 = document.getElementById("C1")

    C1.onclick = function() {
        count -= 4;
    };

var D1 = document.getElementById("D1")

    D1.onclick = function() {
        count -=4;
    };

//question TWO button onclick
var A2 = document.getElementById("A2")

    A2.onclick = function() {
        count -=4;
    };

var B2 = document.getElementById("B2")
          
    B2.onclick = function() {
        score += 10;    
    };

var C2 = document.getElementById("C2")

    C2.onclick = function() {
        count -=4; 
    };

var D2 = document.getElementById("D2")

    D2.onclick = function() {
        count -=4;
    };

//question THREE onclick
var A3 = document.getElementById("A3")
          
    A3.onclick = function() {
        score += 10;
       
    };
var B3 = document.getElementById("B3")

    B3.onclick = function() {
        count -=4;
    };

var C3 = document.getElementById("C3")

    C3.onclick = function() {
        count -=4;
    };

var D3 = document.getElementById("D3")

    D3.onclick = function() {
        count -=4;
    };

//question FOUR onclick
var A4 = document.getElementById("A4")

    A4.onclick = function() {
        count -=4;
    };

 var B4 = document.getElementById("B4")

    B4.onclick = function() {
        count -=4;
    };
var C4 = document.getElementById("C4")

    C4.onclick = function() {
        count -=4;
    };

var D4 = document.getElementById("D4")
          
    D4.onclick = function() {
        score += 10;
       
    };

//question FIVE onclick
var A5 = document.getElementById("A5")

    A5.onclick = function() {
        count -=4;
    };

var B5 = document.getElementById("B5")

    B5.onclick = function() {
        count -=4;
    };

var C5 = document.getElementById("C5")
          
    C5.onclick = function() {
        score += 10;   
    };
var D5 = document.getElementById("D5")

    D5.onclick = function() {
        count -=4;
    };

//question SIX onlick
var A6 = document.getElementById("A6")
          
    A6.onclick = function() {
        score += 10;
    };
 var B6 = document.getElementById("B6")

    B6.onclick = function() {
        count -=4;
    };
 var C6 = document.getElementById("C6")

    C6.onclick = function() {
        count -=4;
    };
var D6 = document.getElementById("D6")

    D6.onclick = function() {
        count -=4;
    };

//question SEVEN onclick
var A7 = document.getElementById("A7")

    A7.onclick = function() {
    count -=4;
    };

var B7 = document.getElementById("B7")
          
    B7.onclick = function() {
        score += 10;    
    };

var C7 = document.getElementById("C7")

    C7.onclick = function() {
        count -=4;
    };

var D7 = document.getElementById("D7")

    D7.onclick = function() {
        count -=4;
    };

//question EIGHT onclick
var A8 = document.getElementById("A8")

    A8.onclick = function() {
        count -=4;
    };

var B8 = document.getElementById("B8")
          
    B8.onclick = function() {
        score += 10;    
    };

var C8 = document.getElementById("C8")

    C8.onclick = function() {
        count -=4;
    };

var D8 = document.getElementById("D8")

    D8.onclick = function() {
        count -=4;
    };

//question NINE onclick
var A9 = document.getElementById("A9")

    A9.onclick = function() {
    count -=4;
    };

var B9 = document.getElementById("B9")
          
    B9.onclick = function() {
        score += 10;
    };

var C9 = document.getElementById("C9")

    C9.onclick = function() {
        count -=4;
    };

var D9 = document.getElementById("D9")

    D9.onclick = function() {
        count -=4;
    };

 //question TEN onclick
 var A10 = document.getElementById("A10")

    A10.onclick = function() {
        count -=4;
    };

var B10 = document.getElementById("B10")

    B10.onclick = function() {
        count -=4;
    };

var C10 = document.getElementById("C10")

    C10.onclick = function() {
        count -=4;
    };
    var D10 = document.getElementById("D10")
          
    D10.onclick = function() {
        score += 10;
       
    };













    














    














