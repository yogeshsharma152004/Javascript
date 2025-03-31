// WHILE LOOP
//=>syntax 

/*while(condition){

}*/

//EX 

//so in the for loop we write the variable , condirion and our itration at place in this we first declare the variable then declare the loop and inside that we declare the our condition

let index = 0 //variable declare 
while (index <= 10/*condition declare*/ ) {
    console.log(`Value of index is a ${index}`)
    index = index + 2 // our iteration (like ++ or -- )
}

//ARRAY IN WHILE LOOP

let myArray = ["virat" , "rohit" ,"hardik"]
let arr = 0 

while (arr < myArray.length) {
    console.log(`Value is a ${myArray[arr]}`)
    arr = arr + 1
}


//DO WHILE LOOP 

//=> syntax 
/*do {
    
} while (condition); in this the conditipn will be check at the last */  

//ex

let score = 1

do {
    console.log(`score is a ${score}`);
    score ++
} while (score <= 10); // if we run this it ill give the value from 1 to 10 

//but here we change the our variable to the 11 then it will give this result

let score1 = 11

do {
    console.log(`score is a ${score1}`);
    score ++
} while (score1 <= 10); // so here it will give the 11 but because it will not check the condition first if it will check the condition first so it will give the error but it will first execute then check the condition so it will give that vlaue