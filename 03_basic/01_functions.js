function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(3, 4);

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(4, 5)
// console.log("result", result);

function loginUserMessage(username = "Jhon"){
    //if(username === undefined){
        if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log( loginUserMessage("Hitesh") ); 
// console.log( loginUserMessage() );

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "Hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 1000, 500]));