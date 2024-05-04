const userEmail = "jhon@hotmail.com"

if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email");
}

// falsy values list: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values list: "0", 'flase', " ", [], {}, function(){}

// const emptyArray = []
// if(emptyArray.length === 0){
//     console.log("Empty Array");
// }

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Empty Object");
}

// Nullish Coalescing Operater (??): null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
val1 = undefined ?? 15;

console.log(val1);

// Terniary Operator ( condition ? true : false )

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less tahn 80") : console.log("more than 80");

