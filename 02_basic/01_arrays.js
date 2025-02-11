// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Saktiman", "Nagraj", "chota Bhem"]

const myArry2 = new Array(1,2,3,4,5)

// console.log(myArr[1]);
// console.log(myHeros[2]);
// console.log(myArry2[4]);


// Array Method

/*
Popping and Pushing
When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array.
*/

// myArr.push(6)   
// The push() method adds a new element to an array (at the end):
// The push() method returns the new array length:

// console.log(myArr);

// myArr.pop()
// The pop() method removes the last element from an array:
// The pop() method returns the value that was "popped out":
// console.log(myArr.pop());


// myArr.unshift(9)
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// The unshift() method returns the new array length:

// myArr.shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the value that was "shifted out":
// console.log(myArr.shift());


// console.log(myArr.includes(9));
/*
JavaScript Array includes()

The includes() method returns true if an array contains a specified value.
The includes() method returns false if the value is not found.
The includes() method is case sensitive.
A boolean	true if the value is found, otherwise false.

Syntax
array.includes(element, start)
** element	:: Required.The value to search for.
** start	:: Optional.Start position. Default is 0.
*/

// Check if fruit[] contains "Banana", starting the search from position 3:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Banana", 3)); // false

/*
JavaScript Array join()

The join() method returns an array as a string.
The join() method does not change the original array.
Any separator can be specified. The default is comma (,).

Syntax
array.join(separator)
** separator   :: Optional.The separator to be used.Default is a comma.
*/

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let newFruits = fruits.join();
// let newFruits = fruits.join(' and ');
// console.log(newFruits);


// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// console.log(myArr);


// slice, splice

/*
JavaScript Array slice()

The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.

Syntax
array.slice(start, end)
** start	:: Optional.Start position. Default is 0.Negative numbers select from the end of the array.
** end	    :: Optional.End position. Default is last element.Negative numbers select from the end of the array.

Return Value
A new array containing the selected elements.
*/

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log("fruits ", fruits);
// console.log("citrus fruits", citrus);

// // Select elements using negative values:
// const myBest = fruits.slice(-3, -1);
// console.log("myBest fruits", myBest);

/*
JavaScript Array splice()

The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.

Syntax
array.splice(index, count, item1, ....., itemX)
** index	    :: Required.The index (position) to add or remove items.A negative value counts from the end of the array.
**count	        :: Optional.Number of items to be removed.
**item1, ...,	:: Optional.The new elements(s) to be added.

Return Value
Array	An array containing the removed items (if any).
*/

/*
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("OriginalArray", fruits);

// At position 2, remove 2 items
const spliceFruits = fruits.splice(2, 2);
console.log("spliceFruits", spliceFruits);
console.log("OriginalArray", fruits);
*/

/*
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);
*/


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);
