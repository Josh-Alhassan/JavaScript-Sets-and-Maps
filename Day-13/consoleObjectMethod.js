// Console.log()
// Showing output on browser console
console.log('30 Days of Code')

// Substitution
console.log('%d %s of JavaScript', 30, 'Days');

// CSS: Adding style to logging message
console.log('%c30 Days of JavaScript', 'background-color:green') // log output is green
console.log(
    '%c30 Days%c %cof%c %cJavaScript%c',
    'color:green',
    '',
    'background-color:red; color: white',
    '',
    'color:yellow'
) // log output green red and yellow text

// console.warn()
console.warn('This is a warning')
console.warn(
    '%cYou are using React%c. Do not touch the DOM. Virtual DOM will take care of handling the DOM!',
    'background-color: orange',
    ''
)
console.log('Warning is different from error')

// console.error()
console.error('This is an error message')
console.error('We all make mistakes')

// console.table()
const names = ['Joshua', 'Alhassan', 'Naomi', 'Jerry'];
console.table(names);

const user = {
    name: 'Joshua',
    title: 'Developer',
    country: 'Nigeria',
    city: 'Lokoja',
    age: 24
}
console.table(user)

const countries = [
    ['Nigeria', 'Abuja'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries);

const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users)