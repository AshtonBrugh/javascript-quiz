var btnStart = document.getElementById("btn-start");
var timer = document.getElementById("timer");
var count = 60;
var questions = [
    {
question: "What does DOM stand for?",
choiceA: "Data Optics Management",
choiceB: "Document Object Model",
choiceC: "Directionally Orchestrated Money",
choiceD: "Dynamic Optional Modem",
correct: "B"
},

{
question: "What is NOT an example of a logical operator?",
choiceA: "^^",
choiceB: "&&",
choiceC: "||",
choiceD: "!",
correct: "A"
},

{
question: "What is NOT an example of a HTML DOM mouse event?",
choiceA: "onclick",
choiceB: "mousedown",
choiceC: "mouseover",
choiceD: "mickeymouse",
correct: "D"
},
{
question: "Where does the Javascript tag go on your HTML page?",
choiceA: "In the <head> under the stylesheet ref",
choiceB: "In the <body> above the header",
choiceC: "At the bottom of the <body>",
choiceD: "After the </html> tag at the bottom of the page",
correct: "C"
}
];

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



    














