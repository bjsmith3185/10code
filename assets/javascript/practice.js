//====== function for radioButton value =======
var selected;
var haveSelected = false;

function radioBtnVal(x) {
    $("#display-selected").text(x);
    selected = x;
    // console.log(selected);
    haveSelected = true;
};
//=============================================

$(document).ready(function(){
    $(".welcome").show()
    $(".quiz-screen").hide();
    $(".result-screen").hide();
    var allAnswersArray = [];
    var lengthOfQuiz;
    var index = 0;
    var tempGameArray = [];
    var num = new Array();
    var randomNumberQuestionArray = [];
    var missedAnswerArray = [];

//========= welcome on click 
    $("#quiz-length-submit").on("click", function () {
        lengthOfQuiz = Number($("#quiz-length").val());
        // console.log(typeof (lengthOfQuiz));
    
        if (!lengthOfQuiz > 10) {
            alert("Choose a number greater than 10");
        } else {
      
            // console.log("this is lengthSelected: " + lenghtSelected);
            // console.log("this is the value entered: " + lengthOfQuiz);
            // startQuiz();
            newLengthArray();  // array with quiz = to the selected length
            answerChoices(quiz); // array with answers to select from
            displayQuestion(index, randomNumberQuestionArray);
            $(".welcome").hide()
            $(".quiz-screen").show();

         }
    });
// ======================

//========= new function to let user pick length of quiz ===
      function newLengthArray() {
        var num = new Array();
        

        for (i = 0; i < lengthOfQuiz; i++) {
            num[i] = Math.floor(95 * Math.random()); 
            if (num[1] == num[0]) {
                while (num[1] == num[0]) {
                    num[1] = Math.floor(95 * Math.random()); 
                };
            };

            if (num[2] == num[1] || num[2] == num[0]) {
                while (num[2] == num[1] || num[2] == num[0]) {
                    num[2] = Math.floor(95 * Math.random()); 
                };
            };
            var j = num[i];
            randomNumberQuestionArray.push(quiz[j]); // copied quiz[j]
        };
        // console.log("this is randomNumberQuestionArray below");
        // console.log(randomNumberQuestionArray);
    };
    //===== end of function to pick length of quiz =======

    //===== function to create an array of correct answers===
    function answerChoices(newArr) {

        for (var i = 0; i < newArr.length; i++) {
            allAnswersArray.push(newArr[i].correctAnswer);
        };
        // console.log("all answers array");
        // console.log(allAnswersArray);
    };

    //======================================================

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
        var randomAnswersArray = [];
        for (i = 0; i < 3; i++) {
            num[i] = Math.floor(lengthOfQuiz * Math.random());
            if (num[1] == num[0]) {
                while (num[1] == num[0]) {
                    num[1] = Math.floor(lengthOfQuiz * Math.random());
                };
            };

            if (num[2] == num[1] || num[2] == num[0]) {
                while (num[2] == num[1] || num[2] == num[0]) {
                    num[2] = Math.floor(lengthOfQuiz * Math.random());
                };
            };
            var j = num[i];
            randomAnswersArray.push(allAnswersArray[j]); // removed allAnswersArray[j]
        };
        randomAnswersArray.push(x.correctAnswer);

      
        randomAnswersArray.sort(function (a, b) { return 0.5 - Math.random() });
        // console.log("this is answer array: " + randomAnswersArray);
        //=============================================

        // create radio buttons and populate with random answers
        for (var i = 0; i < 4; i++) {
            var answers = randomAnswersArray[i];
            $("#selection-area").append("<input type='radio' class='radio-button' onclick='radioBtnVal(this.value)' name='questions' value='" + answers + "' text='" + answers + "'>").append("<span> " + answers + "</span>").append("<br>");
        };

    };
    //====== end of new function to display answers in the dom =====

    //======= on click to submit your answer ============
    $("#submit-button").on("click", function () {
        if (haveSelected) {
            haveSelected = false;
            $("#display-selected").empty();
            // console.log("this is selected: " + selected);
          
            // push the selected answer to the tempArray
            tempGameArray[index].selectedAnswer = selected;
            // console.log("this is the temp game array");
            // console.log(tempGameArray);
            // console.log("==================");
            //==================================
    
            if (tempGameArray.length === lengthOfQuiz) {
    
                checkAnswers();
            } else {
                //==================================
                // empty the radio button area
                // increase index++
                // call displayQuestion()
                index++;
                $("#selection-area").empty();
                displayQuestion(index, randomNumberQuestionArray);
            }
    
    
    
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
        selected;
        haveSelected = false;
        missedAnswerArray = [];
        tempGameArray = [];
        allAnswersArray = [];
        index = 0;
        num = new Array();
        tempGameArray = [];
        lengthOfQuiz;
        randomNumberQuestionArray = [];
       
        $(".display-question").empty();
        $("#display-selected").empty();
        $("#selection-area").empty();
        $(".display-results").empty();
    
        $(".welcome").show();
        $(".quiz-screen").hide();
        $(".result-screen").hide();
    
    };
    //==================================


});