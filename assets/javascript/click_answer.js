


var lengthOfQuiz = 9;
var missedAnswerArray = [1,2,3];


//  var grade = Math.floor((Number(lengthOfQuiz/(lengthOfQuiz - missedAnswerArray.length)))*100);
//  console.log("this is grade: " + grade + "%");


 var grade = Math.floor(Number(missedAnswerArray.length / lengthOfQuiz) * 100);
 console.log("this is grade: " + grade + "%");