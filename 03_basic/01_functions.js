/*
JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

Example:
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}

let result = myFunction(4, 3);
document.getElementById("demo").innerHTML = result;

<p id="demo"></p>

/////////////////////////////

JavaScript Function Syntax

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)
The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Function parameters are listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked.
Inside the function, the arguments (the parameters) behave as local variables.

Function Invocation

The code inside the function will execute when "something" invokes (calls) the function:
- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)

Function Return

When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
Functions often compute a return value. The return value is "returned" back to the "caller":

Example:

//Calculate the product of two numbers, and return the result:

// Function is called, the return value will end up in x
let x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

<p id="demo"></p>

///////////////////////////////////////

Why Functions?
With functions you can reuse code
You can write code that can be used many times.
You can use the same code with different arguments, to produce different results.

The () Operator

The () operator invokes (calls) the function:
Example:

//Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
document.getElementById("demo").innerHTML = value;

<p id="demo"></p> // output : 25

/////////////////////////////////

Functions Used as Variable Values

Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
Example:

//Instead of using a variable to store the return value of a function:
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

// You can use the function directly, as a variable value:
let text = "The temperature is " + toCelsius(77) + " Celsius.";
document.getElementById("demo").innerHTML = text;

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 

<p id="demo"></p> // output : 25


*/


// function keyword "function" function name "sayMyName()" function scope "{  }" total is function Defination
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// function refference "sayMyName" function execution "()"
// sayMyName()

/*
JavaScript Function Definitions

JavaScript functions are defined with the function keyword.
You can use a function declaration or a function expression.

Function Declarations
Earlier in this tutorial, you learned that functions are declared with the following syntax:
function functionName(parameters) {
  // code to be executed
}
note : Declared functions are not executed immediately. They are "saved for later use", and will be executed later, 
       when they are invoked (called upon).

Example : 

<p>Call a function which performs a calculation and returns the result:</p>
<p id="demo"></p>

let x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}


Function Expressions
A JavaScript function can also be defined using an expression.
A function expression can be stored in a variable:

const x = function (a, b) {return a * b};

Example: 
<p>A function can be stored in a variable:</p>
<p id="demo"></p>

const x = function (a, b) {return a * b};
document.getElementById("demo").innerHTML = x;

After a function expression has been stored in a variable, the variable can be used as a function:

const x = function (a, b) {return a * b};
let z = x(4, 3);

// output : function (a, b) {return a * b}

Example
<p>After a function has been stored in a variable, the variable can be used as a function:</p>
<p id="demo"></p>

const x = function (a, b) {return a * b};
document.getElementById("demo").innerHTML = x(4, 3);

// output : 12


*/


/*
// parameters "num1, num2"
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

// addTwoNumbers(3, 4)  // arguments 3, 4

const result = addTwoNumbers(3, 5) // output 8

console.log("Result: ", result);  // undefined

*/

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;

    return num1 + num2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);  // 8


function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Jhon"));

// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function calculateCartPrice(...num1){
  return num1
}

// console.log(calculateCartPrice(200, 300, 400)); // output as array [ 200, 300, 400 ]

/*
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

document.getElementById("demo").innerHTML = x;

<p>The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:</p>
<p id="demo"></p> // 326
*/

const user = {
  username: "Jhon",
  price: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// pass direct object in a function
handleObject({
  username: "Sam",
  price: 180
})

const myNewArray = [200, 400, 600]

function handleArray(getArray){
  return getArray[1] // return 2nd value from array
}

// console.log(handleArray(myNewArray));
// pass direct Array in a function
console.log(handleArray([100, 200, 300]));
 
