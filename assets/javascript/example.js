
// to randomly select questions without repeating
var randomAnswersArray = [1,2,3,4,5,6,7,8];
randomAnswersArray.sort(function (a, b) { return 0.5 - Math.random() });

console.log(randomAnswersArray);

//================================

function randomTotalArray (x) {
    var randomArray =  x.sort(function (a, b) { return 0.5 - Math.random() });
    index = randomArray[index];
};

var how = randomTotalArray(randomAnswersArray);
console.log(how);