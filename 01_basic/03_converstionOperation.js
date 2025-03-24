//------------Conversitons------------// 
//means number to string , string to boolean etc

let score = 18; //  we want to know the type of this here we know the type but sometime we work on the backend the who work on the frontend he will assign the value to you but that value come from any form*/
 

console.log(typeof score);
console.log(typeof(score)); // we cam also write like this to find the typeof*/

/*if we run it is shows the output as a number and the number will in a lower case  */


let score1 = "18"; //here we write the number as a string

console.log(typeof score1);
console.log(typeof(score1));
 
/* here you get the value in the string now suppose that you want to do the operation 100% on numbers so you do make a new variable as define below*/ 

let valueInNumber = Number(score1)//here we use the capital Number all the datatype have their capital format like this after write we have to pass the variable here we pass score now the score will convert into the number form the string
console.log(typeof valueInNumber); // now if we run this it show the its type number*/

// like here we say convert it into the number and it convert it but what the gurentuee that the 33 is come  what if it is have like this as write below

let score3 = "18abs" // like can it convert as a number 
let valueInNumber1 = Number(score3) // but the abs not will convert into the number but it convert so we run the valueinnumber1
console.log(valueInNumber1); // if we run this it shows the NaN(Not  a number) 


let score4 = null //here we want to run null  
let valueInNumber2 = Number(score4)
console.log(valueInNumber2); // it will return the 0 and we write the undefine then it will give the NaN value in return and we write the boolean value then it will give 1 for true and 0 for false


/*
if we conver number 33 into number so it will easily convert as 33 

if we conver "33abc " then it gives NaN

if we run true and false value then it gives false = 0; True => 1
 */


let isLoggesIn = 1 // here i want to conver the number into the boolean value so we declare the onether variable for that

let booleanIsLoggedIn = Boolean(isLoggesIn)

console.log(booleanIsLoggedIn) // so here we convert the 1 so it gives true value if 0 then false // if we run "" string then it shows false and "yogesh" if we run this then it shows the true


let someNumber = 33; // here i want to convet the number into the string 

let stringNumber = String(someNumber)
console.log(stringNumber); // if we run this it shows 33 as output but it is converted into string or not fo that we check its type

console.log(typeof stringNumber); // it is converted into the string


//---------------Operations--------------//
 
// means we convert like 2+2 , 3+3 operations

let value = 3 ; // here we want to convert it into the negetive value 

let negValue = -value; //here we convert the value negetive

console.log(negValue) // if we run this this is give the output -3

//this is basic operations

/*console.log(2+2) 
console.log(2-2)
console.log(2*2)
console.log(2**2) //power
console.log(2/2)
console.log(2%2)*/

// if you want to add  two variable string then write as below

let str1 = "hello"
let str2 = " yogesh"

let str3 = str1 + str2
console.log(str3);


// some complex problem

//so here if we run this it will give the output 12 

console.log("1"+ 2) // here it will not give the output 3 give the 12
console.log(1+"2"); // here is also the same 

console.log("1"+2+2); // here it give output 122 we think it first add 2+2 and then give the output but not give that

//but if we change the string direction

console.log(1+2+"2"); // here it first add the 1+2=3 and add with the string 2 so the output is a 32 

/* so the ecma script have some guidline that operation toprimitive take the input and decide the type that it will number or string  */


console.log(+true) // it is give the 1 
console.log(+"") // it is give the 0


