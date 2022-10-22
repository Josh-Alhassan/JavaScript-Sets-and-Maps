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

  // console.time()
  console.log(countries);
  console.time('Regular for loop')
  for(let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')

  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')

  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')

// console.info()
console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

// console.assert()
for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('The # is ' + i)
  console.assert(i % 2 === 0, {number: i, errorMessage: errorMessage})
}