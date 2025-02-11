const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


/*
JavaScript Array concat()

The concat() method concatenates (joins) two or more arrays.
The concat() method returns a new array, containing the joined arrays.
The concat() method does not change the existing arrays.

Syntax
array1.concat(array2, array3, ..., arrayX)
** array1,...	:: Required.The array(s) to be concatenated.

Array	The content from the joined arrays.

*/

/*
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);

console.log(children);
*/

// // sprade operator to join 2 arrays
// const allHeros = [...marvel_heros, ...dc_heros]
// console.log(allHeros);

/*
The Spread Operator (...)

The JavaScript spread operator (...) expands an iterable (like an array) into more elements.
This allows us to quickly copy all or parts of an existing array into another array:

*/

/*
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);
*/

/*
JavaScript Array flat()

The flat() method concatenates sub-array elements.

Syntax
array.flat(depth)

**depth	:: Optional.How deep a nested array should be flattened.Default is 1, infinity.

*/

/*
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(Infinity) //myArr.flat(2);

console.log(newArr);
*/

/*
JavaScript Array.isArray()

The isArray() method returns true if an object is an array, otherwise false.

Syntax
Array.isArray(obj)

**obj	:: Required.An object (or any data type) to be tested.

A boolean	true if the object is an array, otherwise false.

*/
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruits);

console.log(result); // true
*/
/*
let text = "W3Schools";
let result = Array.isArray(text);

console.log(result); // false
*/

/*
JavaScript Array.from()

The Array.from() method returns an array from any object with a length property.
The Array.from() method returns an array from any iterable object.

Syntax
Array.from(object, mapFunction, thisValue)
** object   	:: Required.The object to convert to an array.
** mapFunction	:: Optional.A map function to call on each item.
** thisValue	:: Optional.A value to use as thisfor the mapFunction

An array	The values from the iterable object

*/
/*
let text = "W3Schools";
let result = Array.from(text);

console.log(result);  // [ 'W', '3', 'S', 'c', 'h', 'o', 'o', 'l', 's']
*/

/*
JavaScript Array.of()

The Array.of() method creates a new array from any number of arguments.
The Array.of() method can take any type of arguments.

Syntax
Array.of(element1, element2, ... , elementN)

**elements	:: Optional.Any number of elements regardless of type.

An Array	A new array created from the arguments.
The arguments can be strings, numbers, arrays, or any other allowed type.
*/

let score1 = 100
let score2 = 200
let score3 = 300

let totalScore = Array.of(score1, score2, score3, 400)

console.log(totalScore);
