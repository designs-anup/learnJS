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