const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, curval)=>{

    console.log(`acc value ${acc} && current value i s ${curval}`);

    return acc + curval
}, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 1999
    },
    {
        itemName : "java course",
        price : 2999
    },
    {
        itemName : "swift course",
        price : 3999
    }
]

const shoppingCartTotal = shoppingCart.reduce( (acc, cartval) => {
    return acc + cartval.price
},0 )

console.log(shoppingCartTotal);
