//THIS = > simply 

const user = {

    username : "yogesh",
    price : 699 ,
   
     //here we want that this  message as a function 
    welcomeMessage: function(){
      //here we want that whoever user will come inside here we want that only for that user we will  pass the message so here the user name is a yogesh but in the future it will may be change or any one will change that objedt value that time we want it like this 
      
      console.log(`${this.username} , welcome to website`) // here i want to refer the username but we dont refer it directly whenever we refer the current context (means the all the variable inside this scope ) will be access by the (this) keyword

      console.log(this) // if we print this line is this code then it will give the current context of the scope 
    }

}

user.welcomeMessage()

user.username = "megs"
user.welcomeMessage() // here the value will change so it will change the current context 

console.log(this) // it will give the current context empty {} object because we are in the node enivronment beacuse in th global we dont have  any context thats why it is empty 

//=> in the browser the global object is a window object 

function cricket (){
  console.log(this)// if we run (this) in the any function in the node environment then it will give the lotes of value
}

cricket()

//ARROW FUNCTION

//this is the syntax to declare the arrow fucntion 

const ball = () => {
  let username = "yogesh"
  console.log(this) // in the arrow function (this) it will aslo give the empty {} object
}
//this is the basic
const addTwo = (num1 , num2) => {
      return num1 + num2
}

console.log(addTwo(7,15))

//the another method is implicit return => it means we dont need to use the parenthisis {}

//=> if we use the {} this bracket then we always need to write the return keyword

//const add = (num1 , num2) => num1 + num2 //here we no need to use the rerturn key word beacuse we dont use the {} brackts
const add = (num1 , num2) => (num1 + num2) //we can also write like this using () bracket and here we dont also need to use the return keyword
console.log(add(7,15)) // it will also give the same output and work the same