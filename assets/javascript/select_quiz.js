

//==== overAll pick array function ===

var startLength;
var endLength;
var ordered = true; // in order if true, random order if false (set true as default)
var examArray = [];
var index = 0; // used to display question in the dom
var tempGameArray = [];
var lengthOfQuiz;
var allAnswersArray = [];


// on load, create an array with all correct answers
function answerChoices(arr) {

    for (var i = 0; i < arr.length; i++) {
        allAnswersArray.push(arr[i].correctAnswer);
    };
    // console.log("all answers array");
    // console.log(allAnswersArray);
};

answerChoices(quiz);
console.log("below is all answers array" );
console.log(allAnswersArray);
//===================================================

// fuction for getting value of radio button
function radioValue() {
        var radioValue = $("input[name='sorted']:checked").val();
        console.log("this is radioValue: " + radioValue);
        if (radioValue === "ordered") {
            ordered = true;
        } else {
            ordered = false;
        }
        console.log("this is ordered status: " + ordered);
};

//===============================

//   makequizarray with random after length is defined
function makeQuizArray(startLength, endLength, examArray, ordered) {
    
  if (ordered) {
    for (i = startLength; i < endLength; i++) {
        examArray.push(quiz[i]);
    }
    // console.log("ordered array");
    // console.log(examArray);
  } else {

    for (i = startLength; i < endLength; i++) {
        examArray.push(quiz[i]);
    }
    var examArray = shuffle(examArray);
    // console.log("shuffled array");
    // console.log(examArray);
  }
}; // end of makequizar


//====== function to shuffle the array ====

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


//===== function to make new array 0 - 9 ====

function choiceOfTen(value) {
    if (value === "10") {
        startLength = 0;
        endLength = 9;
    } else if(value === "20") {
        startLength = 10;
        endLength = 16;
    } else if(value === "30") {
        startLength = 17;
        endLength = 26;
    } else if(value === "40") {
        startLength = 27;
        endLength = 35;
    } else if(value === "50") {
        startLength = 35;
        endLength = 45;
    } else if(value === "60") {
        startLength = 46;
        endLength = 55;
    } else if(value === "70") {
        startLength = 56;
        endLength = 64;
    } else if(value === "80") {
        startLength = 65;
        endLength = 74;
    } else if(value === "90") {
        startLength = 75;
        endLength = 84;
    } else if(value === "90") {
        startLength = 85;
        endLength = 94;
    } 
};

//===========================================


//======== select full quiz=======
$("#quiz-full-submit").on("click",function() {
  
    startLength = 0;
    endLength = 95;
    // console.log("this is ordered: " + ordered);
    // console.log("start: " + startLength + " end: " + endLength);
    makeQuizArray(startLength, endLength, examArray, ordered);
    displayQuestion(index, examArray);
    // console.log(examArray);
});

//=============================================

//====== select from by 10's drop down ====

$("#quiz-tens-submit").on("click",function() {
    
    var y = $("#by-ten-Exam").val();
    // console.log(y);
    choiceOfTen(y);
    // console.log("start: " + startLength + " end: " + endLength);
    makeQuizArray(startLength, endLength, examArray, ordered);
    displayQuestion(index, examArray);
    // console.log(examArray);
});


//==========================================


//===== select quiz length area ===

$("#quiz-length-submit").on("click", function () {
    lengthOfQuiz = Number($("#quiz-length").val());
    startLength = 0;
    endLength = lengthOfQuiz;
    // console.log("start: " + startLength + " end: " + endLength);
    makeQuizArray(startLength, endLength, examArray, ordered);
    displayQuestion(index, examArray);
    // console.log(examArray);
});