//=> MAPS 

const myNumbers = [1,2,3,4,5,6,7,8,9,10] 
//like here we want to add the 10 in every value 
const newNums = myNumbers.map((num) => num + 10) //here alos we use the callback function in the parameter 
console.log(newNums);

//CHAINNING METHOD => means that we can use the two three method at a same time we can use the any number of methods 

const newNum = myNumbers.map((num) => num * 10) //here it will mulitply the vakue from the array
.map((num) => num +1) // in this we dont get the value of the array 1,2 etc here we get the value form the upper map of multiplication value
.filter((num) => num >=40)
console.log(newNum)