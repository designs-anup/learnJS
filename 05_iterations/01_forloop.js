// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(`[${index}] of  ${element}`);
// }

// for (let i = 0; i <= 10; i++) {

//     console.log(`outer loop value: ${i}`);

//     for (let j = 0; j <= 10; j++) {

//     //    console.log(`inner loop value: ${j} and outer loop value: ${i}`);

//         console.log(`${i} * ${j} = ${i*j}`);

//     }
// }

let myArray = ["superman", "spiderman", "heman", "batman", "saktiman", "flash", "hulk", "ironman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  //  console.log(element);
}

// break and continue

// for (let i = 0; i <= 20; i++) {

//     if(i === 5){
//         console.log("detected no 5");
//         break;
//     }

//     console.log(`value of i : ${i}`);
    
// }

for (let i = 0; i <= 20; i++) {

    if(i === 5){
        console.log("detected no 5");
        continue;
    }

    console.log(`value of i : ${i}`);
    
}