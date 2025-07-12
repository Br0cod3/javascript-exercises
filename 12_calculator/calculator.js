const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (const elements of arr) {
    sum += elements;
  }
  return sum;
};

const multiply = function (arr) {
  let multiple = 1;
  for (const element of arr) {
    multiple *= element;
  }
  return multiple;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let n = 1;
  if (a === 0 || a === 1) {
    return 1;
  } else {
    for (let i = a; i > 0; i--) {
      n *= i;
    }
    return n;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
