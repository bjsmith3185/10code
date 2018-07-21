

// array for holding the answers to choose from in the dom
var allAnswersArray = [];
function getIndexes(newArr, lengthOfQuiz) {

    for (var i = 0; i < lengthOfQuiz; i++) {
        allAnswersArray.push(newArr[i].correctAnswer);
    };
};

getIndexes(randomNumberQuestionArray, lengthOfQuiz);
console.log("this is array with all possible answers:");
console.log(allAnswersArray);
//----------------------------

// function to select the question and display answers in dom
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
        randomAnswersArray.push(allAnswersArray[j]);
    };
    randomAnswersArray.push(x.correctAnswer);

    // // put the random .sort() here ==============

    randomAnswersArray.sort(function (a, b) { return 0.5 - Math.random() });
    // console.log("this is answer array: " + randomAnswersArray);
    //=============================================

    // create radio buttons and populate with random answers
    for (var i = 0; i < 4; i++) {
        var answers = randomAnswersArray[i];
        $("#selection-area").append("<input type='radio' class='radio-button' onclick='radioBtnVal(this.value)' name='questions' value='" + answers + "' text='" + answers + "'>").append("<span> " + answers + "</span>").append("<br>");
    };

};


displayQuestion(index, randomNumberQuestionArray);
