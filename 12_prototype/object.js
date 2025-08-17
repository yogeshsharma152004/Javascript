//new keyword used in the prototype or in object 

function mutiplyBy5(num){

    return num*5
}

mutiplyBy5.power = 2

console.log(mutiplyBy5(5))
console.log(mutiplyBy5.power);
console.log(mutiplyBy5.prototype);//we can access the prototype and it will give the empty prenthisis {}

//in the upper case we understand that in js the function will also the function and it will also the object in this the functionality behave like the function but if we want to it behave like object then we can behave it like object

//here we see the conscept of the this keyword that how it will use in the current context 

function createUser(username , score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)//it will return the current context value 
}

//here we declare the two variable with the same username so find that which context value will be increas we use the this keyword so it will give the value of the current context value 

const chai  = new createUser("chai", 25)//here if we dont declare the new keyword then it will not work it will give the error in the code and if we use it it will work properly beacuse like in here the funcitons prototype the properties will go but the here we  pass the value from the function but we don declare that here we have the additonal properties so that will given by the new keyword 
const tea =  createUser("tea", 250)

chai.printMe()