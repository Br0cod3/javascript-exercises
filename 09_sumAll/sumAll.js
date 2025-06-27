const sumAll = function(intOne, intTwo) {
    if (intOne < 0 || intTwo < 0) return "ERROR";
    if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)) return "ERROR";
    let sum = 0;
    let firstNum = null;
    intOne < intTwo ? firstNum = intOne : firstNum = intTwo ;
    for (let x = 0; x < Math.abs(intTwo - intOne) + 1; x++) {
        sum += firstNum;
        firstNum++;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
