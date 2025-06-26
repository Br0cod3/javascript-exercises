const repeatString = function(string, num) {
    let concatenated_str = ""
    if (num < 0) return "ERROR";
    for (let i = 0; i < num; i++) {
        concatenated_str += string
    }
    return concatenated_str
};

repeatString("hey", 8)

// Do not edit below this line
module.exports = repeatString;
