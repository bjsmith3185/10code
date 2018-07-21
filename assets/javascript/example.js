
// to randomly select questions without repeating/ shuffle array
// var randomAnswersArray = [1,2,3,4,5,6,7,8];
// randomAnswersArray.sort(function (a, b) { return 0.5 - Math.random() });

// console.log(randomAnswersArray);

// //================================

// function randomTotalArray (x) {
//     var randomArray =  x.sort(function (a, b) { return 0.5 - Math.random() });
//     // index = randomArray[index];
// };

// var how = randomTotalArray(randomAnswersArray);
// console.log(how);


//==================================================================
// uses lengthOfQuiz to make a random array of questions from quiz array;

// var lengthOfQuiz = 15;
// var num = new Array();
// var randomNumberQuestionArray = [];

// // display the possible answers in dom
// for (i = 0; i < lengthOfQuiz; i++) {
//     num[i] = Math.floor(99 * Math.random());
//     if (num[1] == num[0]) {
//         while (num[1] == num[0]) {
//             num[1] = Math.floor(99 * Math.random());
//         };
//     };

//     if (num[2] == num[1] || num[2] == num[0]) {
//         while (num[2] == num[1] || num[2] == num[0]) {
//             num[2] = Math.floor(99 * Math.random());
//         };
//     };
//     var j = num[i];
//     randomNumberQuestionArray.push(quiz[j]);
// };
// console.log("this is randomNumberQuestionArray below");
// console.log(randomNumberQuestionArray);

//====================================================

$(".welcome").show()
$(".quiz-screen").hide();
$(".result-screen").hide();

var lengthOfQuiz;
$("#quiz-length-submit").on("click", function() {
    lengthOfQuiz = $("#quiz-length").val()
    console.log("this is the value entered: " + lengthOfQuiz);
    $(".welcome").show()
    $(".quiz-screen").hide();
    // getIndexes(randomNumberQuestionArray, lengthOfQuiz);
    // displayQuestion(index, randomNumberQuestionArray);
});
