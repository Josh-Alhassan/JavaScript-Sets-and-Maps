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