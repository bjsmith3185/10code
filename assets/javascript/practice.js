

$(".welcome").show()
$(".quiz-screen").hide();
$(".result-screen").hide();
var lenghtSelected = false;

$("#quiz-length-submit").on("click", function () {
    lengthOfQuiz = $("#quiz-length").val()
    lenghtSelected = true;
    console.log("this is the value entered: " + lengthOfQuiz);
    $(".welcome").hide()
    $(".quiz-screen").show();

    if (lenghtSelected) {
        lenghtSelected = false;


        //========= new function to let user pick length of quiz ===
        // var lengthOfQuiz;
        var num = new Array();
        var randomNumberQuestionArray = [];
       
        

        // display the possible answers in dom  // may need to adjust this, the 99 may need to be a variable-length of quiz
        for (i = 0; i < lengthOfQuiz; i++) {
            num[i] = Math.floor(99 * Math.random());
            if (num[1] == num[0]) {
                while (num[1] == num[0]) {
                    num[1] = Math.floor(99 * Math.random());
                };
            };

            if (num[2] == num[1] || num[2] == num[0]) {
                while (num[2] == num[1] || num[2] == num[0]) {
                    num[2] = Math.floor(99 * Math.random());
                };
            };
            var j = num[i];
            randomNumberQuestionArray.push(quiz[j]);
        };
        console.log("this is randomNumberQuestionArray below");
        console.log(randomNumberQuestionArray);
      
        //===== end of function to pick length of quiz =======

        //===========new array for holding all answers ======
        var allAnswersArray = [];
        function getIndexes(newArr, lengthOfQuiz) {

            for (var i = 0; i < lengthOfQuiz; i++) {
                allAnswersArray.push(newArr[i].correctAnswer);
            };
        };

        getIndexes(randomNumberQuestionArray, lengthOfQuiz);
        console.log("this is array with all possible answers:");
        console.log(allAnswersArray);
        //======= end of new arrray for holding all answers ======

        // === new function to select the question and display answers in dom
        var index = 1;
        var tempGameArray = [];
        var num = new Array();

        function displayQuestion(i, inputArray) {

            // display question in dom
            var x = inputArray[i];
            console.log("question: " + x.question);
            console.log("this is the answer: " + x.correctAnswer);
            $(".display-question").text(x.question);

            // push the question and correct answer to the temp object
            var objectForArray = new Object();
            objectForArray.question = x.question;
            objectForArray.correctAnswer = x.correctAnswer;
            tempGameArray.push(objectForArray);

            console.log("this is tempGameArray below");
            console.log(tempGameArray);


            // //==================================

            // // display the possible answers in dom
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
                randomAnswersArray.push(allAnswersArray[j]);
            };
            randomAnswersArray.push(x.correctAnswer);

            // // put the random .sort() here ==============

            randomAnswersArray.sort(function (a, b) { return 0.5 - Math.random() });
            console.log("this is answer array: " + randomAnswersArray);
            //=============================================

            // create radio buttons and populate with random answers
            for (var i = 0; i < 4; i++) {
                var answers = randomAnswersArray[i];
                $("#selection-area").append("<input type='radio' class='radio-button' onclick='radioBtnVal(this.value)' name='questions' value='" + answers + "' text='" + answers + "'>").append("<span> " + answers + "</span>").append("<br>");
            };

        };

        //====== end of new function to display answers in the dom =====

        displayQuestion(index, randomNumberQuestionArray);


        // function for radio button value
        var selected;
        var haveSelected = false;

        function radioBtnVal(x) {
            $("#display-selected").text(x);
            selected = x;
            // console.log(selected);
            haveSelected = true;
        };



        $("#submit-button").on("click", function () {
            if (haveSelected) {
                haveSelected = false;
                $("#display-selected").empty();
                console.log("this is selected: " + selected);

                // push the selected answer to the tempArray
                tempGameArray[index].selectedAnswer = selected;
                console.log("this is the temp game array");
                console.log(tempGameArray);
                console.log("==================");
                //==================================

                if (tempGameArray.length > 4) {

                    checkAnswers();
                } else {
                    //==================================
                    // empty the radio button area
                    // increase index++
                    // call displayQuestion()
                    index++;
                    $("#selection-area").empty();
                    displayQuestion(index);
                }



            } else {
                console.log("nope");
                alert("Please make a selection");
            };
        });




        var missedAnswerArray = [];

        function checkAnswers() {
            alert("hit");

            for (var i = 0; i < tempGameArray.length; i++) {

                console.log("this is tempgamearray " + tempGameArray[i].correctAnswer);
                console.log("this is tempgamearray " + tempGameArray[i].selectedAnswer);
                if (tempGameArray[i].selectedAnswer !== tempGameArray[i].correctAnswer) {
                    var wrongObj = new Object();
                    wrongObj.question = tempGameArray[i].question;
                    wrongObj.correctAnswer = tempGameArray[i].correctAnswer;
                    wrongObj.selectedAnswer = tempGameArray[i].selectedAnswer;
                    missedAnswerArray.push(wrongObj);
                }
            };
            console.log(missedAnswerArray);
            $(".quiz-screen").hide();
            $(".result-screen").show();
            results();

        };


        function results() {
            if (missedAnswerArray.length === 0) {
                console.log("this is missing" + missedAnswerArray);
                alert("good job");
                var correct = $("<div>");
                correct.attr("class", "all-correct").text("Great Job. 100% Correct");
                $(".display-results").append(correct);
            } else {
                for (var i = 0; i < missedAnswerArray.length; i++) {
                    var questionDiv = $("<div>");
                    questionDiv.text(missedAnswerArray[i].question);
                    var correctDiv = $("<div>");
                    correctDiv.text(missedAnswerArray[i].correctAnswer);
                    var userSelectedDiv = $("<div>");
                    userSelectedDiv.text(missedAnswerArray[i].selectedAnswer);

                    questionDiv.append(correctDiv).append(userSelectedDiv);
                    $(".display-results").append(questionDiv);
                };

            };
            $("#reset").on("click", function () {
                reset();
            })
        };

        function reset() {
            missedAnswerArray = [];
            tempGameArray = [];
            allAnswersArray = [];
            index = 0;
            num = new Array();
            tempGameArray = [];
            $(".display-question").empty();
            $("#display-selected").empty();
            $("#selection-area").empty();
            $(".display-results").empty();

            $(".quiz-screen").show();
            $(".result-screen").hide();

        };

    };
});



