const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, curval)=>{

    console.log(`acc value ${acc} && current value i s ${curval}`);

    return acc + curval
}, 0)

console.log(myTotal);