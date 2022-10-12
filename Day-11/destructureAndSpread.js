// === Utility Functions ===

// Function to create a line break in console
function spaceInConsole() {
    console.log(' ')
}

// Function to create title in console
function title(title) {
    console.log(title)
}

// === End of Utility functions ===

// Destructuring Arrays
title('=== Destructuring Arrays ===')

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree)

const names = ['Joshua', 'Jeremiah', 'Esther', 'Shinar'];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

console.log(e, pi, gravity, bodyTemp, boilingTemp);

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd, backEnd)

// =================
spaceInConsole()
title('Skip values using comma(,)')
// =================

const arrayNumbers = [4, 5, 6];
const [numFour, , numSix] = arrayNumbers;

console.log(numFour, numSix)

const stageName = ['codescript', 'Sars', 'Helewud', 'Comrade'];
let [, secondName, , fourthName] = stageName;
console.log(secondName, fourthName)

title('Using default value for undefined Array index')
const sisNames = [undefined, 'Ruth', 'Naomi'];
let [
    firstSis = 'Deborah',
    secondSis,
    thirdSis,
    fourthSis = 'Peace'
] = sisNames

console.log(firstSis, secondSis, thirdSis, fourthSis)

spaceInConsole()
title('Spread Operator')

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3)
console.log(rest)