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

console.log(loginUserMessage("yogesh")) // here we give the argument value so it print 
console.log(loginUserMessage(""))//here we just give the empty string so it will only return the return value  just logged in

//console.log(loginUserMessage())//if we dont give any argumets or empty string then it will print the undefined not the null

// how we use the if else in function it is for the when the value is true 

function loginUserMessage(username){
     if(username === undefined){console.log("please enter the value ")
        return //so here we give the return so it will dont print the any value after that 
     }//here we  check that the our user name is eual to undefined or not if undefinef then print this consle


    return`${username}  just logged in` 
}
//console.log(loginUserMessage())

// ! = > this is called as exmetry it a not symbol it will convert the true into the false and false into the true wwe use in this js lik this 

function loginUserMessage(username = "meg")//so here we give the default value 
{
    if(!username){console.log("please enter the value ")
       return  
    }


   return`${username}  just logged in` 
}
console.log(loginUserMessage()) //like here we dont give the any arguments in this we can give the defalut value in the parameter 

//like we some time build the shopping carts in the webpage so we now how many time user will add items so we dont know that how many numbers or itms come in  we dont know that how many arguments are comeing for that we give the parameter like this 

function calculateCartPrice(...num1)//here we pass the parameter (...) => it is a rest oprater 
{
    return num1

}
console.log(calculateCartPrice(200,400,500))//if we print this without rest oprater it will give the only first value 200 so in the paramter we use the rest oprater so it will collect the all value in place give it inside the array 

//how can we pass the object in the function 

const user ={
       username:"yogesh",
       price : 200
}

function handleObject(anyobject) {
    console.log(`Username is a ${anyobject.username} and the price is a ${anyobject.price}`)
}
handleObject(user)

//we can pass it the direct without object 

handleObject({
    username:"megs",
    price:799
})


//how we can pass the array in the function 

const newArray = [200, 400, 600, 500]

function returnSecondArray(getArray){
     return getArray[1]
}

//console.log(returnSecondArray(newArray))

console.log(returnSecondArray([100,200,500,800])) // we can aso pass the calue like this 