// ## Creating a pattern with RegExp constructor
let pattern = 'love';
let flag = 'gi'
let regEx = new RegExp(pattern, flag);
console.log(regEx)

// Writing the pattern and flag inside the RegExp constructor
let regExFlag = new RegExp('love', 'gi')
console.log(regExFlag) // Result, same as above