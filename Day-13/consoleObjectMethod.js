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
    'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.log('Warning is different from error')