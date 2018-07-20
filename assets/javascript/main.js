




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





//--------------variables -----------
var selected;
var haveSelected = false;

var num = new Array();
var randomIndexArray = [];

// copy the quiz array to create one to use for the program
// clear the "tempGameArray" upon reset;
var tempGameArray = quiz;

// var randomNumber = 0; // this will be the index value
var index = Math.floor(Math.random() * tempGameArray.length - 1);
// var index = 0;
var arrayIndex = tempGameArray[index];  // this will be the array with index

function displayQuestion(index) {
    var x = tempGameArray[index];
    // console.log(x);
    console.log("this is the answer: "+ x.correctAnswer);
    console.log("question: " + x.question);
    $(".display-question").text(x.question);

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
        // console.log(num[i])
        var j = num[i];
        // console.log("this is J: " + j);
        randomIndexArray.push(allAnswersArray[j]);
        // console.log("answers array: " + randomIndexArray);
    };

    // add the correct answer to the array, randomIndexArray
    randomIndexArray.push(x.correctAnswer);

    // put the random .sort() here ==============

    randomIndexArray.sort(function(a, b){return 0.5 - Math.random()});
    // console.log("this should have a random index: " + randomIndexArray);

    //=============================================

    // this loop put the answers to select from in the dom
    // for (var i = 0; i < 4; i++) {
    //     // console.log("");
    //     var answers = randomIndexArray[i];
    //     $("#selection" + i).text(answers);
    // };

    // create radio buttons and populate with random answers
    for (var i = 0; i < 4; i++) {
        var answers = randomIndexArray[i];
        $("#selection-area").append("<input type='radio' class='radio-button' onclick='radioBtnVal(this.value)' name='questions' value='"+answers+"' text='" + answers + "'>").append("<span> " + answers + "</span>").append("<br>");

        // var radioBtn = $("<input/>");
        // radioBtn.attr("type", "radio").attr("class", "radio-button").attr("name", "questions").attr("value", answers);
        // radioBtn.attr("onclick", "radioBtnVal(this.value)").text(answers);
        // $("#selection-area").append(radioBtn);
    };

   
    index++;
    //===============================

};


displayQuestion(index);

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
        arrayIndex.usersAnswer = selected;
     
        console.log(tempGameArray);
        // $('.radio-button').attr('checked', false);
        $("#selection-area").empty();
        displayQuestion(index);

    } else {
        console.log("nope");
        alert("Please make a selection");
    }


});


