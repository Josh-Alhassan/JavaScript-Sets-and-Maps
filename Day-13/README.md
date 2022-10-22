# Console Object Methods
We use console object methods to show output on the browser console and we use <code>document.write()</code> to show output on the browser document (view port). Both methods used only for testing and debugging purposes.

The console method is the most popular testing and debugging tool on the browser. The <code>document.getElementById()</code> when we like to intereact with DOM using JavaScript.

In addition to the famous, <code>console.log()</code> method, the console provides other more methods.

## Console.log()
We use console.log() to show output on the browser console. We can substitue values and also we can style the logging output using %c.

+ Showing output on browser console
<code>console.log('30 Days of JavaScript') </code>

+ substitution
<code>console.log('%d %s Days of JavaScript', 30, 'Days')</code>

+ CSS
We can add style loggin message using css.
```
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text
```

## console.warn()
We use <code>console.warn()</code> to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices.

```
console.warn('This is a warning')
console.warn(
    'You are using React. do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')
```

## console.error()
The <code>console.error()</code> method shows an error messages.
```
console.error('This is an error message')
console.error('We all make mistakes')
```

## console.table()
The <code>console.table()</code> method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.

```
const names = ['Joshua', 'Alhassan', 'codescript', 'Jerry'];
console.table(names)
```

The result of the code above displays a table with two coloumns. An index column to display the index and Value column to display the names items.