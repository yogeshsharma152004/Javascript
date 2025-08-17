//here it is all about the prototype 

//so here we want the true length of the string but here we give the extra space so want to find the truelength using truelength property

/*let myName = "Yogesh      "
let myChannel = "Chai      "
console.log(myName.truelength)*/

let myHeros = ["virat" , "rohit" ]

let heroPower = {
    virat :"drive",
    rohit : "pullshot",

     getViratPower: function( ){
    // console.log(`Virat power is ${this.virat}`);
     
   }
}

//here we add the new propert is yogesh  in the object and it will given to the all function , array and string etc..

Object.prototype.yogesh = function(){
    //console.log(`yogesh is present in all objects `);
    
}

//here we want to see that if we give this power only to the array so it will by defalut go the object or not 

Array.prototype.heyYogesh = function(){
   // console.log(`Yogesh says hello`);
    
}

//heroPower.yogesh()

myHeros.yogesh()
myHeros.heyYogesh()
//heroPower.heyYogesh() //so here the heyyogesh power is not there because we give the power to the array not to the object 


//inheritance 

//this is a old method 

//=>here we see the prototypal inheritance means how we can access the other property

const User = {
    name:"chai",
    email:"chai@gamil.com"
}

const Teacher = {
    makevideo :true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssigment:'JS assigment',
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User //here we access the other properties  

//=>modern method syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "chaiaurcode     "

String.prototype.trueLength = function(){
   console.log(`${this}`);
    
    console.log(`True length is :${this.trim().length}`);
    
    
}

anotherUsername.trueLength()
"yogesh".trueLength()
"iceTea".trueLength()