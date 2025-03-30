// truthy value 

//=> for ex we run any query in the database we ask that return the useremail so here database give the user email on that bases we want to print the user email

const userEmail = "megs@1502"

if(userEmail){
    console.log("got user email")
}else{
    console.log("dont get the user email")
}// so here we dont give the any condition  or comparision to the useremail but it will give the true output so here it will consider the string as a true value it is called as a truthy value

//for empty string it will false 

const userEmail1 = ""

if(userEmail1){
    console.log("got user email")
}else{
    console.log("dont get the user email")
}// so here we give the empty string so it will false value because nothing in the string


//but for the empty array it will give the true value

const userEmail2 = []

if(userEmail2){
    console.log("got user email")
}else{
    console.log("dont get the user email")
}

//for check the empty array
if(userEmail2.length === 0){
     console.log("Array is empty")
}

// for empty object

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("objet is empty")
}


//FALSY VALUE => false , 0(zero) , -0(negetive zero) , BigInt 0n , ""(empty string) , null , undefined, NaN

//=> TRUTHY VALUE => [](empty array) , "0"(if we write the zero inside the string then it will truthy value) , "false" (it will also truthy value because it will aslo string) , " "(if we give the space between the empty string it will aso truthy value), {}(empty object) , function(){} (empty function)