// array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[1]);

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// Array methods

myArr.push(6)
console.log(myArr);
myArr.pop() // removes last value from the Array 
console.log(myArr);

myArr.unshift(1000) // add value to the start of the array [1000, 1, 2, 3, 4, 5]
console.log(myArr);

myArr.shift() // removed 1st element of the array
console.log(myArr);

console.log(myArr.includes(9)); // returns true/false
console.log(myArr.indexOf(19)); // returns index value if present else -1ve value

const newArr = myArr.join() // converted to string
console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // [1, 2]
console.log(myn1);

const myn2 = myArr.splice(1, 3) // [1, 2, 3] also modify the original array
console.log(myn2);