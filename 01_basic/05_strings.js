const name = "joe"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount} `);

const gameName = new String("free-fire-game");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Joe "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://businessexpress.co.in/odi%20pages"
console.log(url.replace('%20', '-'));
console.log(url.includes('odi'));

console.log(gameName.split('-'));