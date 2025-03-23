//Scope is the reason because of the let , var and const 

let a = 10
const b = 20
var c = 30

// if we consle this value then we dont have any problem it will easily print that 

console.log(a);
console.log(b);
console.log(c);

// here we see that var is workin perfect then why we use let and const so the reason is block scope but the var is not working like the block scope that the reson we dont use var 

//{} => it is called as a scope in function and any ohter places in object also have the {} but that is for object declaration if it is come with any function or if else then it is called as scope of there program 


//the problem is starting here here we write the inside the scope 

var z = 300 // what ever we write outside the scope {} is called as a gobale scope what ever we write in the globale scope they are available in the block scope but whatever we write in the blockk scope is not available in the globle scope 

//here we what ever we write in the if it is called as a block scope 

if (true){
    let x = 10
    const y = 20
    var z = 30
 
} // here our scope is a from line to 20  25 if it comes in 26 then its problem

//so here if we run this then it will give the x is not defined this a good if we run y then it will same this is not define but if we run the z then it will print that value the problem is that z is print the outside the scope in the line 20 we change the value of the z but if print that again then it will value 30 thats the reason the scope will come in the picture 

//console.log(x)  
//console.log(y);
console.log(z); 




//Nested Scope  => means that the child function will access the parent function

//=> here we create the function inside the function   

//=> so here is one secenerio that the big function will not access the value from the small function but the small function will able access the value from the big one so here one is a big function and two is a small function

function one () {
    const username = "yogesh" 

    function two (){
        const website = "youtube"
        console.log(username) // here we check that we are able to access the username inside this function or not 
    }
    //console.log(website)//if we print this it will give error that it will not define the reason is that because the website is inside the function two and it is block scopeif we access it outisde that then it will show the error 

    two() // it will give the give the output yogesh because we console that value inside that function 
}

one()

// how we can write the nested function in the if else 

if (true){
    const username = "megs"
    if(username === "megs"){
        const website = " Insta"
        console.log(username + website)
    }
    //console.log(website)
}

//console.log(username) 


//------EX-----// It is called as hoisting in js means that how function will declare , where function will store , whats their execution context etc

console.log(addone(5))
function addone(num){
   return num + 1
} // this is our basic function we declare and if here  we dont hold the function in any variable so if print the console like this before the function so it will print the value  

//but here we will hold the function in the any variable and print the console beofe the funciton then it will give the error 

console.log(addTwo(5))//so we dont access the value like this if we store the funtion in the any variable 
const addTwo = function(num){
        return num+ 2 
}

