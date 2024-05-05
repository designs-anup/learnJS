// for of

// ["", "", ""]
// [{}, {}, {}]

let myArray = ["superman", "spiderman", "heman", "batman", "saktiman", "flash", "hulk", "ironman"]

for (const i of myArray) {
    console.log(i);
}

let greetings = "hello world"

for (const i of greetings) {
    console.log(`each char is ${i}`);
}

// Maps ( removed duplicate values )

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('IN', "India")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value );
}

const myObj = {
    "game1" : "NFS",
    "game2" : "Contra",
    "game3" : "free fire",
    "game4" : "mummy",
    "game5" : "spiderman"
}

/*
for (const [key, value] of myObj) {
    console.log(key, ":-", value);
}
// this loop does not work on objects
*/

