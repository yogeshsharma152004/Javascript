 //Cotrol flow(logic flow) meaning means that whole code will execute on the conditional base like if / else === loops
 
  //=> (===) -> it will check that the both the comparion have the same value and datatype   (it is called as a stikley checking)

 //1. (IF STATEMENT)

 //=> syntax : - if(condition/true/flase){scope} so here if the the condition will true then it will execute the scope part if it is false then it will skip that part 

 //=> In this we compare the values so the comaparison opearter 
 //=> (>,>,>=,<=,==,!=(not eual), === ,!==(check the negative sign)) 
 //=> single equal is a (=) assigment operter means it will used to assign the value 
 //=> Triple equal (===) it is a check the data and datatype fpr the comparision

// ==(double operater)

if(2=="2"){
    //console.log("executed") //it will only check the data not the data type thats the reason it is executed
}

// ===(triple equal)(stiect check)

if(2==="2") {
    console.log("executed")//so here we use the triple equal so it will chcek that the datatype of one value is a diffrent so it will not execute the value 
}

// != (not eual)

if(2 != 3) {
    console.log("executed")//so here it is a  not equal  condition but the condition we given it is in a question form so here it is like the 2 is not equal to the 3 so the answer of that is true it give the result true or false according to the queston
}


//basic ex 

//so here if we execute this code it will execute the if condition but it will also print the outside value that we dont want so thats why we use the condition code the else 

const temperature = 41 

if (temperature < 50){
    console.log("less then 50")
}
console.log("grater then 50")

//else (so here it will only if value is true then give if value if the value is false then it will execute the else value )

if (temperature < 50){
    console.log("less then 50")
}else{console.log("grater then 50")}


//Some other ex it is related to scopes 

const score = 200 

 if (score > 100){
    const power = "fly"
    console.log(`User power ${power}`)
 } // so here we execute the vlaue in the block scope so it will excute 
 //console.log(`User power ${power}`) //here we execute the that vlaue outside the scope so it will give the value is not defined but if we use the var insted of const then it will execute that vlaue outside the scope thats prpblem thats why we not use the var


 //shorthand notation

 const balance  = 1000

 if(balance > 500) console.log("execute");//so here it dont have any scope so it will automatically think that it is a implisite scope  // {} so sometime we dont use this scope we direct write the value like this 
 if(balance > 500) console.log("execute"),
 console.log("execute2") //we dont write here multiple lines , we have one method like after console using (,) this colne we execute the mutiple console , we dont use this because it is a unredable code


 // Nesting(sometime we need to check the multiple conditions for that we use the else if consdition)

 const balance1 = 1000

 if(balance1  < 500){
    console.log("less then 500")
 }else if (balance1 <750){
    console.log("less then 750")
 }else if (balance1 < 900){
    console.log("less then 900")
 }else{
    console.log("less then 1200")
 } 


 // here we see the one real life example sometime we purchase online courses or any other things for ex we create an account on website  

 const userLoggedIn = true
 const debitCard = true
//so for the writing the multiple condition like whatever conditon we write it will be true or flase  we use the (&&) and condition it will chek the both the conditon that 
 if(userLoggedIn && debitCard) // here and(&&) perater will check the both right and left condition if that is true then it will execute the condtion so wher ever (&&) and operater will come both condition will be true if any any statement will be wong then it will not execute the conditon 
{
    console.log("Allow to shopping ")
 }
 