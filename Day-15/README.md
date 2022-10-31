# Classe

JavaScript is an object oriented programming language. Everything in JavaScript is object, with it's properties and methods. We create class to create an object. A class is like an object constructor, or a "blueprint" for creating objects. We instantiate a class to create an object. The class defines attributes and the behaviour of the object, while the object, on the other hand, represents the class.

Creating an object from a class is called ***class instantiation***.

Object literal is a singleton. If we want to get a similar object, we have to write it. However, class allows to create many objects. This helps reduce the amount of code and repetition of code.

## Defining a classes
To define a class in JavaScript we need the keyword *class*, the name of a class in *camelCase* and block code(two curly brackets).

```
// syntax
class ClassName {
    // code goes here
}
```

## Class instantiation
Instantiating class means creating an object from a class. We need the keyword *new* and we call the name of the class after the keyword.

```
class Person {
    // code goes here
}
const person = new Person()
console.log(person)
```

## Class Constructor
The constructor is a builtin function which allows us to create a blueprint for our object. The constructor function starts with a keyword followed by a parenthesis. We use the *this* keyword to attach the constructor parameters with the class.

## Default Values with Constructor
The constructor function properties may have a defualt value like other regular functions.
```
class Person {
    constructor(
        firstName = 'Alhassan',
        lastName = 'Joshua',
        age = 25,
        country = 'Nigeria',
        city = 'Lokoja'
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
    }
}
```