// singleton

// object.create

// object litrals

const jsUser = {
    name : "Hitesh",
    "full name" : "Hitesh Choudhary",
    age : 18,
    location : "Mumbai",
    email : "hitesh@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);

console.log(jsUser["full name"]);

/////////////////////////////////

// singleton

//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "John",
            lastname : "Doe"
        }
    }
}

// console.log(regularUser.fullname); // { userfullname: { firstname: 'John', lastname: 'Doe' } }

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

//const obj3 = {obj1, obj2}
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // get all the keys in an array format [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // get all the values in an array format [ '123abc', 'Sammy', false ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // return true/false depends on key exist in an object


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructure : "Hitesh"
}

// corse.courseInstructure
const {courseInstructure : instructure} = course  // destructuring object

// console.log(courseInstructure); // Hitesh
console.log(instructure);

/* ********************* Learn more */

// JavaScript Object Literal

const User = {
    name: "John",
    age: 21,
    email: "john@gmail.com",
    location: "Bhopal",
    isLogedIn: true,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(User.email);
// console.log(User["email"]);

// console.log(User.lastLoginDays);
// console.log(User["lastLoginDays"][1]); 

// overwrite vules
User.email = "john.doe@hotmail.com"
console.log(User["email"]);

User.greeting = function(){

    // this.name means the name property of user.
    console.log(`Hello ${this.name} my age is ${this.email} and my email address is ${this.email}`);
}

console.log(User.greeting());



/*
JavaScript Object Definition

How to Define a JavaScript Object
**Using an Object Literal
**Using the new Keyword
**Using an Object Constructor
*/


/*
JavaScript Object Literal

An object literal is a list of name:value pairs inside curly braces {}.
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

Note:
name:value pairs are also called key:value pairs.
object literals are also called object initializers.

*/