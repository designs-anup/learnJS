// Immediately Invoked Function Expressions IIFE

(function chai(){
    console.log("DB CONNECTED");
})();

// arrow function with passing parameters
( (name) => {
    console.log(`AGAIN DB CONNECTED ${name} `);
} )("JHON");