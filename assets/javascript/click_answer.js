
var allAnswersArray = [1,2,3,4,5,6,7,8,9,0,"answer"];
var correctAnswer = "answer";
var randomAnswersArray = [];
// display the possible answers in dom

function answersWithoutCorrect() {
    randomAnswersArray = [];
    
    do {
        randomAnswersArray[randomAnswersArray.length] = allAnswersArray.splice(Math.floor(Math.random() * allAnswersArray.length), 1)[0];
        } while (randomAnswersArray.length < 3);
  
        for (var i = 0; i < randomAnswersArray.length; i++) {
        if (correctAnswer === randomAnswersArray[i]) {
            console.log("in there twice");
            randomAnswersArray = [];
           
        }
    };
};
answersWithoutCorrect();


if (randomAnswersArray.length === 0) {
    answersWithoutCorrect();
    console.log("it is 0")
    randomAnswersArray.push(correctAnswer);
    randomAnswersArray.sort(function (a, b) { return 0.5 - Math.random() });
} else {
    randomAnswersArray.push(correctAnswer);
    randomAnswersArray.sort(function (a, b) { return 0.5 - Math.random() });
}



console.log("this is $$$$$$$$$$$$: " + randomAnswersArray);