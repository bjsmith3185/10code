
$(document).ready(function(){
  
var index = 0;
var correct = 0;
var incorrect = 0;

var array = [
    { q: "Are hamburgers good?", a: "true" },
    { q: "Is JavaScript fun?", a: "true" },
    { q: "Is the homework easy?", a: "false" },
    { q: "Is Kevin an instructor?", a: "true" },
    { q: "Does the class meet on friday?", a: "false" },
    { q: "Is pizza good?", a: "true" },
    { q: "Are responsive homework assignments fun?", a: "false" },
    { q: "Does class begin at 6:45pm?", a: "false" },
    { q: "Everyone gets an 'A' for trying", a: "false" },
    { q: "CookOut burgers rock!", a: "true" },
];
console.log(array[0].q);
console.log(array.length);

function askQuestion() {
    $("#display").text(array[index].q);
}

askQuestion();


$(".button").on("click", function() {
    var trueOrFalse = $(this).attr('value');
    
    console.log(trueOrFalse);

    if (trueOrFalse === array[index].a) {
        console.log("correct answer");
       correct++;
    } else {
        console.log("incorrect answer");
        incorrect++;
    }

   index++;
    console.log("index: " + index);
    if (index === array.length) {
        // alert("end of game");
        $("#display").text("Game Over! Correct: " + correct + "   Incorrect: " + incorrect);
    } else {
        askQuestion();
    }
    
});

$("#reset").on("click", function() {
    index = 0;
    correct = 0;
    incorrect = 0;
    askQuestion();
});

});