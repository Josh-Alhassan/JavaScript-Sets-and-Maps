# JavaScript: Destructuring and Spreading
Destructuring is a way of unpacking arrays and objects and assigning them to a distinct variable.

In destructuring, if we like to skip values in an array, we use additional comma. The comma helps to omit the value at that specific index. We can use default value in case the value of array for that index is 'undefined'.

**Warning** We can not assign variable to all the elements in the array. We can destucture few of the first and we can get the remaining using 'spread' operator(...).

## Destructuring Object
When we destructure an object, the name of the variable we use should be exactly the same as the key or property of the object. If key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in this case, we can give a default value during declaration.

***obeservation*** Destructuring in Arrays use square brackets '[]', while in objects, curly brackets '{ }'.

## Spread or Rest Operator
When we destructure an array, we ue the *spread* operator (...) to get the rest elements as arrays. We also use spread operator to spread array elements to another array.

### Spread operator with arrow function
Whenever we like to write an arrow function which takes unlimited number of arguments, we use a *spread* operator. *When we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array*.