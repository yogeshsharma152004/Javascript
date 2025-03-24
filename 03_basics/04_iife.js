//IIFE => IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//This is use for the we write any function we want to print that immediately 

//=> some time we write the file in that we have only database connection and we need that when our file start then our database connection will start 

function chai (){
 console.log(`DB CONNECTED`)
}
chai();

//iife method => in this method we declare our function inside the () and excute in the ()
//syntax of iife is ()()

(function coffee (){
    console.log(`DB connected`);
})(); //here we execute the function immediate

//iife we use because sometime we face the problem because of the global scope pollution so ehatever globale scope varible or whatever declaration is we want remove that this is the reason we use the iife

// we can write this as a arrow function

(() => {
    console.log(`DB CONNECTED`)
})();

//

((name) => {
    console.log(`DB CONNECTED ${name}` );
    
})('megs')