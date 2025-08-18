//here is ex for the interview purpuose like we can change the math.pi value = 3.14 to 3 or 4 if yes then how and not then the why not 

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);//when we run this then it wil give that we cant overwrite this value 


/*console.log(Math.PI);
Math.PI = 5 //so here we try to change the pi value but it will not overwrite the default value of pi and give the only origianl value of the pi
console.log(Math.PI);*/

//here is a ex where we can create our object and changes its property easily 

const chai = {
    name : 'ginger chai',
    price : '250',
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai , 'name',{
    writable : false,
    enumerable: false
})


console.log(Object.getOwnPropertyDescriptor(chai , "name"));
