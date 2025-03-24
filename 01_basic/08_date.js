//DATES (the typeof the date in js is a Object)

//=> the all the method we use below it will it the date in the diffrent diffrent format

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())

console.log(typeof myDate)


// for declare the specific date

//let myCreateDate = new Date(2025 , 2 , 21)
//let myCreateDate = new Date(2025 , 2 , 21 , 4 , 25)
//let myCreateDate = new Date("2025-03-21") // for the dd-yy-mm method

let myCreateDate = new Date("03-21-2025")//for mm-dd-yy
console.log(myCreateDate.toLocaleString())



//----------TimeStamp In Dtae --------//

let myTimeStamp = Date.now()
console.log(myTimeStamp) // it will give the output in miliseconds
console.log(myCreateDate.getTime()) // get the current time of the given date in miliseconds
console.log(Math.round(Date.now()/1000)) //fot the convert miliseconds to seconds so divide by 1000


let NewDate = new Date()
console.log(NewDate)
console.log(NewDate.getDate())
console.log(NewDate.getDay())
console.log(NewDate.getFullYear())



// using localstirng ,odify the value

NewDate.toLocaleString('default' ,{
    weekday:"long",
    
})
