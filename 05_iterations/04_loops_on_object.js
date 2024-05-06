const myObject = {
    js : "Java Script",
    cpp : "c++",
    rb : "rubby",
    swift : "swift by apply"
}

for (const key in myObject) {
    //console.log(key);
    console.log(`extention of ${myObject[key]} is ${key}`);
}

const programming = ["js", "cpp", "rb", "swift", "java", "py"]

for (const key in programming) {
    console.log(programming[key]);
}