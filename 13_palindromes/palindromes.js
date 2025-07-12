const palindromes = function (str) {
  let newStr = str.replace(/[^a-zA-Z0-9]/g, "");
  let modStr = newStr.split("").reverse().join("");
  if (newStr.toLowerCase() === modStr.toLowerCase()) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
