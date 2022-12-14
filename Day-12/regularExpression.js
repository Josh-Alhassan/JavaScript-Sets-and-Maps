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

// Square Brackets
let squarePattern = /[Aa]pple/g // This means either A or a
moreTxt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ';
let matches = moreTxt.match(squarePattern)

console.log(matches)

// If we want to look for banana aswell
squarePattern = /[Aa]pple|[Bb]anana/g
matches = moreTxt.match(squarePattern)

console.log(matches)

// Escape character(\) in RegExp
let escapePattern = /\d/g // "d" is a special charater which means digit.
moreTxt = 'This reguar expression example was made in January 12, 2020.'
matches = moreTxt.match(escapePattern)

console.log(matches)

// more Example
escapePattern = /\d+/g
matches = moreTxt.match(escapePattern)
console.log(matches)

// One or more times (+)
let oneOrMorePattern = /\d+/g;
matches = moreTxt.match(escapePattern)
console.log(matches)

// Period(.)
let periodPattern = /[a].+/g // this square bracket means 'a' and '.' means any character excepts new line
moreTxt = 'Apple and banana are fruits';
matches = moreTxt.match(periodPattern)

console.log(matches)

// Zero or More times(*)
periodPattern = /[a].*/g // any character, + any character one or more times
console.log(moreTxt);
matches = moreTxt.match(periodPattern)
console.log(matches)

// Zero or one times(?)
moreTxt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
let zeroOrOnePattern = /[Ee]-?mail/g // ? means optional
matches = moreTxt.match(zeroOrOnePattern)

console.log(matches)

// Quantifier in RegExp
// We can specify the length of the substring we look for in a text, using a curly bracket
moreTxt = 'This regular expression example was made in December 6, 2019.'
let regPattern = /\\b\w{4}\b/g // exatly four words
matches = moreTxt.match(regPattern)
console.log(matches)

// Starts with ^
moreTxt = 'This regular expression example was made in December 6,  2019.'
regPattern = /^This/ // ^ means starts with
matches = txt.match(regPattern)
console.log(matches)  // ['This']

// async function getData() {
//     return await Promise.resolve(123);
//   }
//   const data = getData()
//   console.log(data)

function resolveAfter10Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            ('rejected');
        }, 10000)
    })
}