//we have two methods to declare the object 

//1.object literals => we declare the object in key:value pair and this method is not the singleton


//how to declare the symbol in the object 

const mySym = Symbol("mykey")

const user = {

    name : "yogesh",
    "full name" : "Yogesh Sharma", // we dont access this value my dot method we can only access this by square method
    mySym : "mykey1", //we dont declare symbol in object like this it is if we run this it is give the output but if we check its datatype it will not the symbol
    [mySym]:"mykey1", //we declare the symbol in the square brackets 
    age : 22,
    location : "vadodara",
    email : "yogesh@g.com",
    isLoggedIn : true ,
    lastLoginDays : ["Monday" , "Saturday"]
}

console.log(user.email) //it  is the first method dot method to print the object

 //mostly we access the value by the dot method in some cased we use the square method 

console.log(user["name"] ) // this is the second method to print the object using square brackets 

console.log(user["full name"])

console.log(user.mySym) 
console.log(user[mySym])

//if we want  to change any value 

user.email = "yooo@gmail.com"
//Object.freeze(user)// it we want to lock the value then we use this it will dont allow anyone to change the value 

user.email = "ydhdhd@gmail.com" //after freeze the value here we try to change the value but it is not change 

console.log(user) // here we print the value then it will give the give the value that we change before freeze it not that value we change after the frezze


// if we want to add any function in the object 

user.greetings = function(){
console.log("hello users ")
}

console.log(user.greetings())

// here we want to refer the name from the object in the function

user.greetingsTwo = function(){
    console.log(`hello users , ${this.name}`)// here we refer the name from the objct 
    }

    console.log(user.greetingsTwo())


   