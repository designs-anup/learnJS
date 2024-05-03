// if statement
const isUserLoggedIn = true;
const temperature = 45;

// if(temperature < 50){
//     console.log("Temperature is less than 50");
// }else{
//     console.log("Temperature is greater than 50");
// }

const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`); // ReferenceError

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged In");
}