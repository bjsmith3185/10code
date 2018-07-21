
// array for holding the answers choose from in the dom
var allAnswersArray = [];
function getIndexes() {
    for (var i = 0; i < quiz.length; i++) {
        allAnswersArray.push(quiz[i].correctAnswer);
    };
};

getIndexes();
// console.log(allAnswersArray);
//----------------------------

// function to select the question index and display answers in dom

var index = 0;
var num = new Array();
var tempGameArray = [];

function displayQuestion(index) {
    var randomAnswersArray = [];
    // display question in dom
    var x = quiz[index];
    console.log("question: " + x.question);
    console.log("this is the answer: " + x.correctAnswer);
    $(".display-question").text(x.question);

    // push the question and correct answer to the temp object
    var objectForArray = new Object();
    objectForArray.question = x.question;
    objectForArray.correctAnswer = x.correctAnswer;
    tempGameArray.push(objectForArray);


    //==================================

    // display the possible answers in dom
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

    // put the random .sort() here ==============

    randomAnswersArray.sort(function (a, b) { return 0.5 - Math.random() });
    // console.log("this is answer array: " + randomAnswersArray);
    //=============================================

    // create radio buttons and populate with random answers
    for (var i = 0; i < 4; i++) {
        var answers = randomAnswersArray[i];
        $("#selection-area").append("<input type='radio' class='radio-button' onclick='radioBtnVal(this.value)' name='questions' value='" + answers + "' text='" + answers + "'>").append("<span> " + answers + "</span>").append("<br>");
    };

};


displayQuestion(index);


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
        console.log("this is selected: " + selected);

        // push the selected answer to the tempArray
        tempGameArray[index].selectedAnswer = selected;
        console.log("this is the temp game array");
        console.log(tempGameArray);
        console.log("==================");
        //==================================

        

        //==================================
        // empty the radio button area
        // increase index++
        // call displayQuestion()
        index++;
        $("#selection-area").empty();
        displayQuestion(index);

    } else {
        console.log("nope");
        alert("Please make a selection");
    };
});



