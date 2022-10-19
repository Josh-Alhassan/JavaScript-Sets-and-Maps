// ## Creating a pattern with RegExp constructor
let pattern = 'love';
let flag = 'gi'
let regEx = new RegExp(pattern, flag);
console.log(regEx)

// Writing the pattern and flag inside the RegExp constructor
let regExFlag = new RegExp('love', 'gi')
console.log(regExFlag) // Result, same as above

// Creating a pattern without RegExp constructor
let withoutRegEx = /love/gi
console.log(withoutRegEx)

// RegExp Object Methods
// Testing for a match
const str = 'I love JavaScript';
const testPattern = /love/g;
const result = testPattern.test(str)
console.log(result)

// Array containing all of the match
console.log(str);
console.log(testPattern);
const matchResult = str.match(testPattern)
console.log(matchResult)

// Search method
const searchResult = str.search(pattern)
console.log(searchResult);

// Replacing a substring
const txt = 'Python is the most beautiful language that a humanbeing has ever created.\
I recommend python for a first programming language';

let matchReplaced = txt.replace(/Python|python/gi, 'JavaScript');
console.log(matchReplaced)

let moreTxt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matchReplaced = moreTxt.replace(/%/g, '')
console.log(matchReplaced)