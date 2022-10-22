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