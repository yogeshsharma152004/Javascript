//FOR LOOP

//=>SYNATX OF FOR LOOP
 
//=> So here we first decalare the variable then we check the condition and then it will going into the loop part after that it will print that last index++ part

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/


//ex
//=> so here first it will check the variable then it will check its condition if condition is true then it will execute the scope part 
for (let  i=0; i <= 10; i++) {
    const element = i;
    //console.log(element)

}

//if else condition in for  loop 


for (let  i=0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is my lucky number");
                     
    } 
   // console.log(element)

}


//Loop inside the Loop

for (let i= 0; i <= 10; i++) {
    //console.log(`outer loop : ${i}`)
   for (let j = 0; j <= 10; j++) {
     //console.log(`Inner Loop :${j} and inner loop :${i}`) //here inner lop will print all ten value after one outer loop value
    //console.log(i + '*' + j + '= ' + i*j); //mathemetical operations
    
   }
    
}


//ARRAY IN LOOPS

let myArray = ["Virat" , "Rohit" , "Hardik" , "Bumrah"]
 // console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
    
}


// some time we dont want to print the whole loop we want to stop that loop in some point so there are two keyword BREAL AND CONTINUE

//BREAK

/*for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`)
        break // in this we want that the whole loop not print till the 20 we want it to end at 5 so we use this key word here we give the condition that if value is equal to 5 then break the loop
        
    }
    console.log(`value of is a : ${index}`)
    
}*/

//CONTINUE

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        //console.log(`detected 5`)
        continue // sue it o here it will print the all value but where we put the condition it will not print that vlaue so here it will pritn that condition  value 
        
    }
    //console.log(`value of is a : ${index}`)
    
}
