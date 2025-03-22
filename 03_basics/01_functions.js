// Functiin simply means like you write the 10-20 line code that we pack into one packege. and we can use that package copy as many time we want we can use anywhere

function sayMyname(){
    console.log("y");
    console.log("o");
    console.log("g");
    console.log("e");
    console.log("s");
    console.log("h");
}//so here the funtion is the syntax to define the function 

sayMyname() // if we want to excute the function we have to call that function like these 

//here we want to add the two number in the function 
function addTwoNumber(num1 , num2)//when we make the make the function defination then it is called as parameter so this num1 and num2 called as parameter 
{
    console.log(num1 + num2);
    
}

addTwoNumber(3,4) // when we call the function and pass the value that is call as a arguments so here 3 and 4 are argiments 

// this method that when we store the argument as a variable 

function addTwoNumber1(num1 , num2){
   console.log(num1 + num2)
}
   
const result = addTwoNumber1(3,4) // if we run this will give the output 7 but if we check the value inside the result it will give the undefined like we run that below 

console.log("result" , result)

//this method will give the result as a undefined 


//for this we write this code as a diffrent method  in this we store the result as a variable  amd return the result 

function addTwoNumber2(num1 , num2){
    let result1 = num1 + num2 ; 
    return result1 ;
    //console.log("hitesh")if we print the any value after return in the funciton then it will not print that 
}

const result1 = addTwoNumber2(3,4) // 

console.log("result" , result1) // now if we print this it will give the result value as a 7


//we have the onther method to print that result in this method we directly return that value so we dont store that value in any other variable 

function addTwoNumber3(num1 , num2){
    return num1 + num2
}
const result2 = addTwoNumber3(3,4)

console.log("result" , result2)

// this for the in how many types we take the value in the parameter and arguments 

function loginUserMessage(username){

    return`${username}  just logged in` 
}

console.log(loginUserMessage("yogesh"))


