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

## console.time()
Starts a timer you can use to track how long an operation takes. Yo give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call <code>console.timeEnd()</code> with the same name, the browser will output the time in milliseconds.

## console.info()
It displays information message on browser console.
```
console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')
```

## console.asset()
The <code>console.assert</code> method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.
```
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4
```

## console.group()
The <code>console.group</code> can help to group different log groups.
```
console.group('Title')
console.log(object)
console.groupEnd()
```

## console.count()
It prints the number of times the <code>console.count()</code> is called. It takes a string label parameter. It is very helpful to count the number of time a function is called.

```
const func = () => {
  console.count('Function has been called')
}
func()
func()
// Function has been called: 2
```