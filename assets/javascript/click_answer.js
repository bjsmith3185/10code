
var missedAnswerArray = [
    {   question: "10-1",
        correctAnswer: "signal weak",
        selectedAnswer: "why this",
    },
    {   question: "10-2",
        correctAnswer: "signal good",
        selectedAnswer: "good job",
    },
    {   question: "10-3",
        correctAnswer: "stop transmitting",
        selectedAnswer: "tom petty",
    },
    {   question: "10-4",
        correctAnswer: "affirmative",
        selectedAnswer: "down south",
    },
];

var examArray = [1,2,3,4,5,6,7,8,9,0]

// $(".grade").text("100%").addClass("correct text-center");

// var correct = $("<div>");
// correct.addClass("all-correct text-center").text("Well Done!");
// $(".display-results").append(correct);


//  for (var i = 0; i < missedAnswerArray.length; i++) {
//     var questionDiv = $("<div>").attr("class", "result-question");
//     questionDiv.text("Code: " + missedAnswerArray[i].question);
//     var correctDiv = $("<div>").attr("class", "result-correct-answer");
//     correctDiv.text("Correct Answer: " + missedAnswerArray[i].correctAnswer);
//     var userSelectedDiv = $("<span>").attr("class", "result-selected-answer-title");
//     userSelectedDiv.text("Your Answer: ");
//     var userAnswer = $("<span>").attr("class", "result-selected-answer");
//     userAnswer.text(missedAnswerArray[i].selectedAnswer);
//     userSelectedDiv.append(userAnswer);

//     // questionDiv.append(correctDiv).append(userSelectedDiv);
//     $(".display-results").append(questionDiv).append(correctDiv).append(userSelectedDiv);
// };

var grade = 100 - (Math.floor((missedAnswerArray.length / examArray.length) * 100));
console.log("this is grade: " + grade + "%");

    $(".grade").text("You scored " + grade + "%");
