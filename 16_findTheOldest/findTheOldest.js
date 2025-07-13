const findTheOldest = function (arr) {
  arr.forEach((element) => {
    if (element.yearOfDeath === undefined) {
      const date = new Date();
      element.yearOfDeath = parseInt(date.getFullYear());
    }
  });
  let max = arr.sort((a, b) => {
    return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
  });
  return max[max.length - 1]

};

// Do not edit below this line
module.exports = findTheOldest;
