//Comperision means that compare the value 

//Basic comparision operater

console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2!=1); //not equal
console.log(2>=1);
console.log(2<=1);


//some problemetic things

console.log("2" > 1); //it is give the true because 2 is greater then 1 here js autometically convert your string into the number the problem is that conversion like this sometime not give the predictable result so whenever you compare the any value remember  that the datatype will be same
console.log("02" > 1); 

//new problem for null

 
console.log(null > 0) // if we run this it will give false
console.log(null == 0) // if we run this it will also give the false 
console.log(null >= 0) // if we run this it will give the true  

// for undefined

/* fot this it will  give the false for the all */
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);


// strict check means we have the check through the === 

/* === will the check the value and its datatype also */

console.log("2" === 2) // here the both the value have the diffrent dtatypes 
