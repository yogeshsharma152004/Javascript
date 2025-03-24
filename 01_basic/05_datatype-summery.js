/* Datatypes have the two types premitive and the non-primitive 

=> always remember that how the data will store in the momery and how it wil aceess from the memery that the basis where the data will divide (premetive and non-premitvie)
*/

//* PREMITIVE DATATYPES *//

/*

=> Primitive datatypes have the callbyvalue it means that whenever you will copy that the reference of the original data will not given the copy of the data will given and whatever you will change they will change in the copy

Total have seven types

1. => String
2. => Number 
3. => Boolean
4. => Null
5. => Undefined
6. => Symbol
7. => BigInt
*/ 


let name = "Yogesh"
let number = 18;
let outsideTemp = null;
let useEmail;


//here in the symbol we pass the two variable with the same data and datatype  but if we checkit it gives the false because symbol give the uniqness to the data

const id = Symbol("123")
constanotherId = Symbol ("123")
console.log(id  === constanotherId);


//* NON-PREMITIVE DATATYPES (REFERENCE DATATYPES)// 

/*
=> In Non Primitive datatyes have the callbyreference . It means that the reference of the data will be allow directly in memory

Types:=

1. => Arrys
2. => Objects
3. => Functions

*/

//Array

const heros = ["Virat" , "Rohit" , "Hardik" , "Dhoni"]

//Object(key:valye pair)

let myObj = {

    name:"Yogesh",//it is key:value and the variable can be anything like string,array,number etc..
    age:22,

}

//Functions

const myFUNCTION = function(){
    console.log("hello");
    
}


//----------------  HOW MEMOREY WORKS IN JS -------//

// Here we have two Memory Stack and Heap

/*

Stack => It is used for the primitive datatypes  . It means whatever variable we declare it returns the copy of that variable

Heap => It is used for the non-primitive datatypes .If any variable are in the heap that gives the reference of the original value 

EX are below

*/

//Stack EX

let myName = "Yogesh"

let anotherName = myName
anotherName = "Virat" // here we change the value of the anothername 

console.log(myName)
console.log(anotherName)

//Heap Ex

let user1 = {

    email :"yoggrge@g.com",
    upi:"user@mnh",
}

let user2 = user1 

user2.email = "megh@al.com",
console.log(user1.email);
console.log(user2.email);
