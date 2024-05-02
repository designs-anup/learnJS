const user = {
    username : "John",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website.`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "Rohit"
// user.welcomeMessage()

// console.log(this); // create empty object {}

// function chai(){
//     let username = "Jhon"
//     console.log(this.username);
// }
// chai() // undefined 'contex works with in object'

const chai = () => {
    let username = "Jhon"
    console.log(this.username);
}
// chai() // undefined 'contex works with in object'

// const addTwoNum = (num1, num2) => {
//     return num1 + num2
// }

const addTwoNum = (num1, num2) => num1 + num2

console.log(addTwoNum(3, 4));