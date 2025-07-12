const palindromes = function (str) {
  let newStr = str.replace(/[^a-zA-Z0-9]/g, "");
  let modStr = newStr.split("").reverse().join("");
  return newStr.toLowerCase() === modStr.toLowerCase()
};

// Do not edit below this line
module.exports = palindromes;
