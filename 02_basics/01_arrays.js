//ARRAYS

//=> In array  you can store the mutiple elements in the single variable
//Js array will be resizebale means after the declaration array you able to add new elements

//=> Array also have the prototype that we can check in the browser console

const myArr = [0,1,2,3,4] // In array the elemets can be number, string, boolean etc..
console.log(myArr[0])
//another way to declare the array

const myHeros = ["Viart" , "ABDivilier"]
console.log(myHeros[1])
//another way to declare the array

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[2])


//=> Array Methods 

//=> PUSH METHOD = it will add the value in the array

myArr.push(5)
console.log(myArr) // here it will add the value in the array

//=> POP METHOD =. it will delet the last value of the array 

myArr.pop() // in this we dont give any parameter in the parentheses 

console.log(myArr) // here it will remove the last vlaue of the array


//=> UNSHIFT METHOD  = it will add the value in the starting of tha array

myArr.unshift(7)
console.log(myArr)

//=> SHIFT METHOD = it will remove the starting element from the array

myArr.shift() // in this we dont give any parameter in the parentheses
console.log(myArr)


console.log(myArr.includes(8)) // it will check that it will include that vlaue in that array or not if add then give true if not then give false

console.log(myArr.indexOf(4)) //it will give the index value of the element

//=> JOIN METHOD = it will convert the array into the string

const  newArr = myArr.join()
console.log(myArr);
console.log(newArr);


//SLICE METHIOD  AND SLCIE METHOD

console.log("A" , myArr) // it print our whole array it is our original array

const myn1 = myArr.slice(1 , 3)  // it not print the last parameter value 
console.log("B" , myArr) // it will give the whole array copy 
console.log(myn1) // it will give the value that we give in the parameter
 //here we use 


const myn2 = myArr.splice(1 , 3)  // it print the all  parameter value 
console.log("c" , myArr) // it will manipulate the array for here it will not print the parameter value in the array it will give the array without that value 
console.log(myn2) // it will give the value that we give in the parameter inclide the last one

//=> THE MAIN DIEEFERNCE BETWEEN THE SLICE AND SPLICE IS NOT THAT IT WILL SLICE NOT PRINT THE LAST PARAMETER VALUE AND SPLICE PRINT THE LAST PARAMETER VALUE THE MAIN DIFF IS THAT IS THAT AFTER GIVING THE PARAMETER VALUE TO BOTH WE IF WE CHECK OUR ORIGINAL ARRAY THE SLICE WILL GIVE THE SAME ARRAY AS OUR ORIGINAL ONE BUT THE SPLICE WILL NOT GIVE THE SAME AS A ORIGINAL ARRAY IT WILL MANIPULATE THE ORIGINAL ARRAY AND GIVE THE VALUE WITHOUT WE PUT IN THE PARAMETER 



    
