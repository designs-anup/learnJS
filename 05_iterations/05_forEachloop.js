const programming = ["js", "cpp", "rb", "swift", "java", "py"]

// programming.forEach(function(val){
//     console.log(val);
// })

// programming.forEach((val) => {
//     console.log(val);} 
// )

// function printMe(item){
//     console.log(item);
// }
// programming.forEach(printMe)

// programming.forEach((item, index, arr)=>{
//     // console.log(`${item} index of [${index}] and array list is ${arr}`);
//     console.log(item, index, arr);
// })

const myObject = [
    {
        languageExt : "js", 
        languageName : "Java Script"
    },
    {
        languageExt : "cpp",
        languageName : "c++"
    },
    {
        languageExt : "rb", 
        languageName : "rubby"
    },
    {
        languageExt : "swift", 
        languageName : "swift by apply"
    }
]

myObject.forEach((item) => {
    console.log(item.languageName);
})