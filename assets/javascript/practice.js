

//==== overAll pick array function ===

var startLength;
var endLength;
var ordered = true; // in order if true, random order if false (set true as default)
var examArray = [];
var index = 0; // used to display question in the dom
var tempGameArray = [];
var lengthOfQuiz;
var allAnswersArray = [];
var selected;
var haveSelected = false;
var missedAnswerArray = [];
var randomAnswersArray = [];



// on load, create an array with all correct answers = allAnswersArray
function answerChoices(arr) {

    for (var i = 0; i < arr.length; i++) {
        allAnswersArray.push(arr[i].correctAnswer);
    };
    // console.log("all answers array");
    // console.log(allAnswersArray);
};

answerChoices(quiz);
// console.log("below is all answers array" );
// console.log(allAnswersArray);
//===================================================

// fuction for getting value of radio button
function radioValue() {
        var radioValue = $("input[name='sorted']:checked").val();
        // console.log("this is radioValue: " + radioValue);
        if (radioValue === "ordered") {
            ordered = true;
        } else {
            ordered = false;
        }
        // console.log("this is ordered status: " + ordered);
};

//===============================

//==== answer value from radio buttons in quiz ===

function radioBtnVal(x) {
    $("#display-selected").text(x);
    selected = x;
    // console.log(selected);
    haveSelected = true;
};

//===============================================

$(document).ready(function(){
    $(".welcome").show()
    $(".quiz-screen").hide();
    $(".result-screen").hide();



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
  
    $(".welcome").hide()
    $(".quiz-screen").show();
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
 
    $(".welcome").hide()
    $(".quiz-screen").show();
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

    $(".welcome").hide()
    $(".quiz-screen").show();
    // console.log(examArray);
});

//===========================================================================================

//===== function to display questions in the dom =====
function displayQuestion(i, inputArray) {   
   
    // display question in dom
    // console.log("right here: " + i);
    //  console.log(randomNumberQuestionArray);
    var x = inputArray[i];
    console.log("question: " + x.question);
    console.log("this is the answer: " + x.correctAnswer);
    $(".display-question").text(x.question);

    // push the question and correct answer to the temp object
    var objectForArray = new Object();
    objectForArray.question = x.question;
    objectForArray.correctAnswer = x.correctAnswer;
    tempGameArray.push(objectForArray);

    // console.log("this is tempGameArray below");
    // console.log(tempGameArray);

    //==================================
    // display the possible answers in dom
   answersWithoutCorrect(index, examArray);

   if (randomAnswersArray.length === 0) {
        answersWithoutCorrect(index, examArray);
        console.log("it is 0")
        randomAnswersArray.push(x.correctAnswer);
        randomAnswersArray.sort(function (a, b) { return 0.5 - Math.random() });
    } else {
        randomAnswersArray.push(x.correctAnswer);
        randomAnswersArray.sort(function (a, b) { return 0.5 - Math.random() });
    }



console.log("this is $$$$$$$$$$$$: " + randomAnswersArray);

    //=============================================

    // create radio buttons and populate with random answers
    for (var i = 0; i < 4; i++) {
        var answers = randomAnswersArray[i];
        $("#selection-area").append("<input type='radio' class='radio-button' onclick='radioBtnVal(this.value)' name='questions' value='" + answers + "' text='" + answers + "'>").append("<span> " + answers + "</span>").append("<br>");
    };

};
//====== end of new function to display answers in the dom =====

//==== select random answers to display==============

function answersWithoutCorrect(i, inputArray) {
    randomAnswersArray = [];
    var x = inputArray[i];
    
    do {
        randomAnswersArray[randomAnswersArray.length] = allAnswersArray.splice(Math.floor(Math.random() * allAnswersArray.length), 1)[0];
        } while (randomAnswersArray.length < 3);
  
        for (var i = 0; i < randomAnswersArray.length; i++) {
        if (x.correctAnswer === randomAnswersArray[i]) {    //000000000000000
            console.log("in there twice");
            randomAnswersArray = [];
           
        }
    };
};
//===================================================


//===================================================================================================================
//======= on click to submit your answer ============
$("#submit-button").on("click", function () {
    if (haveSelected) {
        haveSelected = false;
        $("#display-selected").empty();
        // console.log("this is selected: " + selected);
      
        // push the selected answer to the tempArray
        tempGameArray[index].selectedAnswer = selected;
        console.log("this is the temp game array");
        console.log(tempGameArray);
        console.log("==================");
        //==================================
        console.log("current: " + tempGameArray.length + " game: " + examArray.length);
        if (tempGameArray.length === examArray.length) {
            alert("checking answers")
            $(".quiz-screen").hide()
            $(".result-screen").show()

            checkAnswers();
        } else {
            //==================================
            // empty the radio button area
            // increase index++
            // call displayQuestion()
            index++;
            $("#selection-area").empty();
            displayQuestion(index, examArray);
        };



    } else {
        // console.log("nope");
        alert("Please make a selection");
    };
});
//===================================================


//===== function for checking answers ========
function checkAnswers() {
     
       
    for (var i = 0; i < tempGameArray.length; i++) {

        // console.log("this is tempgamearray " + tempGameArray[i].correctAnswer);
        // console.log("this is tempgamearray " + tempGameArray[i].selectedAnswer);
        if (tempGameArray[i].selectedAnswer !== tempGameArray[i].correctAnswer) {
            var wrongObj = new Object();
            wrongObj.question = tempGameArray[i].question;
            wrongObj.correctAnswer = tempGameArray[i].correctAnswer;
            wrongObj.selectedAnswer = tempGameArray[i].selectedAnswer;
            missedAnswerArray.push(wrongObj);
        }
    };
    // console.log(missedAnswerArray);
    $(".quiz-screen").hide();
    $(".result-screen").show();
    results();

};
//=====================================

//===== function to display results ====
function results() {
    if (missedAnswerArray.length === 0) {
        // console.log("this is missing" + missedAnswerArray);
       
        var correct = $("<div>");
        correct.attr("class", "all-correct").text("Great Job. 100% Correct");
        $(".display-results").append(correct);
    } else {
        for (var i = 0; i < missedAnswerArray.length; i++) {
            var questionDiv = $("<div>").attr("class", "result-question");
            questionDiv.text("Code: " + missedAnswerArray[i].question);
            var correctDiv = $("<div>").attr("class", "result-correct-answer");
            correctDiv.text("Correct Answer: " + missedAnswerArray[i].correctAnswer);
            var userSelectedDiv = $("<span>").attr("class", "result-selected-answer-title");
            userSelectedDiv.text("Your Answer: ");
            var userAnswer = $("<span>").attr("class", "result-selected-answer");
            userAnswer.text(missedAnswerArray[i].selectedAnswer);
            userSelectedDiv.append(userAnswer);

            // questionDiv.append(correctDiv).append(userSelectedDiv);
            $(".display-results").append(questionDiv).append(correctDiv).append(userSelectedDiv);
        };

    };
    $("#reset").on("click", function () {
        reset();
    })
};
//=============================================

//====== function to reset ========
function reset() {
    startLength;
    endLength;
    ordered = true;
    examArray = [];
    index = 0;
    tempGameArray = [];
    lengthOfQuiz;
    allAnswersArray = [];
    selected;
    haveSelected = false;
    missedAnswerArray = [];
    randomAnswersArray = [];
    answerChoices(quiz);
    // num = new Array();
    console.log("This is a new quiz");
      
    $(".display-question").empty();
    $("#display-selected").empty();
    $("#selection-area").empty();
    $(".display-results").empty();

    $(".welcome").show();
    $(".quiz-screen").hide();
    $(".result-screen").hide();

};
//==================================
//===================================================================================================================


});  // end of document ready


