// ## Creating an empty set
console.log('Creating an empty set')
const companies = new Set() // creating an empty set
console.log(companies)

// Creating set from array
console.log('')
console.log('Creating set from Arrays')
 
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

for (const language of setOfLanguages) {
  console.log(language)
}

// Adding an Element to a set
console.log('')
console.log('Adding an Element to a set')

console.log(companies)
console.log('companies size:', companies.size)

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')

console.log('Companyies size now:', companies.size)
console.log(companies)

// We can use loop to add element to a set
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
console.log('Set of Companies set added:', setOfCompanies)

// Deleting an element of a set
console.log('')
console.log('Deleting an Element of a set')
console.log(companies.delete('Google'))
console.log('companies size after deletion:', companies.size)

// Checking an element in the set
console.log('')
console.log('Checking If element exists in a Set()')
console.log(companies.has('Apple'))
console.log(companies.has('Facebook'))

// Clearing the set
console.log('')
console.log('Clearing the set')

companies.clear()
console.log(companies, companies.size)

const langSet = new Set(languages);
console.log(langSet)
console.log(langSet.size)

const counts = [];
const count = {};

for (const lang of langSet) {
  const filteredLang = languages.filter(function(lng) {
    return lng === lang
  })
  console.log(filteredLang);
  counts.push({lang: lang, count: filteredLang.length})
}
console.log(counts)

// counting unique item in an array
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)

// Union of sets
console.log('Union Of Sets')
console.log('Lets find the union of set A and set B (A U B)')

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// Intersection of Sets
console.log('Intersection of Sets')
console.log(`let's find the intersection of set A and set B (A n B)`)

// var a, b, A, B and C remains the same as in union set
let intersectionC = a.filter((num) => B.has(num))
let intersectionc = new Set(intersectionC)

console.log(intersectionc)

// Difference of sets
console.log('Difference of Sets')
console.log(`let's find the difference of set A and set B (A \ B)`)

// var a, b, A, B and C remains the same as in union set and intersection Set
let difference_c = a.filter((num) => {
  return !B.has(num)
})

let difference_C = new Set(difference_c)

console.log(difference_C)

// ##############
// Map
// ##############
console.log('')
console.log('MAP')
console.log('Creating an empty Map')

let map = new Map()
console.log(map)

// creating a map from array
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
map = new Map(countries)
console.log(map)
console.log(map.size)

// Adding Values to the map
console.log('Adding values to the Map')
const countriesMap = new Map()
console.log(countriesMap.size);
countriesMap.set('Nigeria', 'Abuja')
countriesMap.set('America', 'Washignton DC')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log('Country map size:', countriesMap.size)

// Getting a value from Map
console.log(countriesMap.get('Nigeria'))

// Checking Key in Map
console.log(countriesMap.has('America'))