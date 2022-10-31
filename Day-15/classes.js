// Test
class Person {
    // code goes here
}
const person = new Person()
console.log(person)

// Class constructor
console.log('Class Constructor')
class PersonClass {
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

const personConstructor = new PersonClass('Alhassan', 'Joshua', 25, 'NIgeria', 'Kog State' )
console.log(personConstructor)
const person1 = new PersonClass('Jerry', 'Able', 20, 'Finland', 'Lokoja');
// const person2 = new PersonClass('Ruth', 'Alhassan');

console.log(person1)
// console.log(person2)

// Default values with constructor

const person3 = new PersonClass()
console.log(person3)