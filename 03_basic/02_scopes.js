if(true){
    let a = 10
    const b = 20
    var c = 30

    console.log("inner code a = " + a);
    console.log("inner code b = " + b);
    console.log("inner code c = " + c);
}

console.log("outer code c = " + c); // error occors for a nad b

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
//    console.log(website); // error occurs

    two()
}

// one()


if(true){
    const username = "Hitesh"
    if(username === "Hitesh"){
        const website = " youtube "
        console.log(username + website);
    }

 //   console.log(website); // error occurs out of scope
}

// console.log(username); // error occurs out of scope


// ++++++++++++++++++++++ intesrr=esting ++++++++++++++
console.log(addOne(5));
function addOne(num){
    return num + 1
}

console.log(addTwo(5)); // ReferenceError occurs coz of hoisting
const addTwo = function(num){
    return num + 2
}

