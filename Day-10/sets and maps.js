// ## Creating an empty set
console.log('Creating an empty set')
const companies = new Set()
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