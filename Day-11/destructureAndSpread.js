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

// ###################
spaceInConsole()
title('=== Destructuring during iteration ===')
// ###################

const countries = [['Finland', 'Helsinki'], ['Swedein', 'stockholm'], ['Norway', 'Oslo'], ['Nigeria', 'Abuja']]

for (const [country, city] of countries) {
    console.log(country, city)
}

console.log(fullStack)
for ([first, second, third] of fullStack) {
    console.log(first, second, third)
}

// Destructuring Object
spaceInConsole()
title('=== Destructuring Object ===')

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}

// let { width: w, height: h, area: a, perimeter: p} = rectangle;
let { width, height, area, perimeter = 60} = rectangle;
console.log(width, height, area, perimeter)
// console.log(w, h, a, p)

// Object parameter without destructuring
spaceInConsole()
title('Object parameter without destructuring')

const rect = {
    width: 20,
    height: 10
}

// const calculateParameter = rectangle => {
//     return 2 * (rectangle.width + rectangle.height)
// }

const calculateParameter = ({width, height}) => {
    return 2 * (width + height)
}

console.log(calculateParameter(rect))

const person = {
    firstName: 'Joshua',
    lastName: 'Alhassan',
    age: 24,
    country: 'Nigeria',
    job: 'Instructor and founder of codescript',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Git',
        'GitHub',
        'Python'
    ],
    langauges: ['Hausa', 'English', 'Igala']
}

// Let us create a function which give information about the person without destructuring
// const getPersonInfo = obj => {
//     const skills = obj.skills;
//     console.log(skills)
//     const formattedSkills = skills.slice(0, -1).join(', ');
//     console.log(formattedSkills)
//     const langauges = obj.langauges
//     console.log(langauges)
//     formattedLanguages = langauges.slice(0, -1).join(', ');

//     let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length -1]}. He speaks ${formattedLanguages} and a little bit of ${langauges[2]}`

//     return personInfo
// }

const getPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    langauges
}) => {
    const formattedSkills = skills.slice(0, -1).join(', ');
    const formattedLanguages = langauges.slice(0, -1).join(', ');

    let personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]}. He speaks ${formattedLanguages} and a little bit of ${langauges[2]}`

    return personInfo
}

console.log(getPersonInfo(person))

// Destructuring Object during iteration
spaceInConsole()
title('Destructuring Object During Iteration')

const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true,
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false,
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
]

for (const {task, time, completed} of todoList) {
    console.log(task, time, completed)
}

// Spead or Rest Operator
spaceInConsole()
title('=== Spread or Rest Operator ===')

const spreadNums = [1, 2, 3, 4, 5, 7, 8, 9, 10]
let [sNum1, sNum2, sNum3, ...others] = spreadNums;
console.log(sNum1, sNum2, sNum3);
console.log(others);

const spreadCountries = [
    'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = spreadCountries
console.log(gem)
console.log(fra)
console.log(nordicCountries)

// Spread operator to copy array
spaceInConsole()
title('### Spread Operator to copy array')

const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers);

const frontend = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue'];
const backend = ['Node', 'Express', 'MongoDB'];
const fullstack = [...frontend, ...backend];

console.log(fullstack)