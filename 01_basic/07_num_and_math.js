//NUMBER IN JAVASCRIPT

const number = 400; //this is a basic metod to write the number in js and if we run it it will automatically detect that it is a number 

console.log(number) // here younsee this we only print the number 400

//=> this is the method where we want the value with the datatype 

const score = new Number(100)
console.log(score)//here you that it will print the datatype and the number we given if we run this in the chrome then it will give the number prototype methods 

//for conver into the string method

console.log(score.toString().length) //here it will convert the number into the string and give the length of it 

console.log(score.toFixed(2))//it is give the point value after the we given the value like here we give 100 and we give the point value 2 so it will retuen the this value  100.00 if we give 1 then it will give 100.0


const otherNUmber = 123.154545
console.log(otherNUmber.toPrecision(3)) //it will return the string type value here so here we give the 3 then it will give output 123 it round fighure the value and give it

const hundreds = 10000000 //some times this zeros wil be difficul to calculate and see so  in the js have some methods that will make easy to represenent them

console.log(hundreds.toLocaleString()); // so it will give comas(,) the value in the us based standererd

console.log(hundreds.toLocaleString('en-IN')) // it we use this then it will give the comas(,)indian based standard value



//-----------------MATHS IN JAVASCRIPT---------------//

//=> IT will come the js by default


console.log(Math.abs(-2)) // it is abs(absolute) property that converts the negetive(-) value into  the positive(+) value and it will only convert the negetive value into the positive not the positive into negetive

console.log(Math.round(4.2)) // it will give the round of value

console.log(Math.ceil(4.2)) // it will give the top value of it like here it will give 5

console.log(Math.floor(4.2)) // it will give the lower value of it like here it will give 4 

console.log(Math.max(3,5,7,9)) // give the max value from the list

console.log(Math.min(3,5,7,9)) // give the min value from the list

console.log(Math.random()) // it will give the random value between 0 to 1 

console.log((Math.random()*10)+1) // avoid the value like the 0.045 


//Ex for the some time we define the min and max value together

const min = 10
const max = 20
//=> so here we want o print the value between 10 and 20 so below we use one  formula that is very important

console.log(Math.floor(Math.random() * (max - min)) + min) // it is the formula for that and it will give the value between 10-20.