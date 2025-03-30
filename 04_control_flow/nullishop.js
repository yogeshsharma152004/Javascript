// NULLISH COALESCING OPERATOR(??) : null , undefined here we  we see all things on this two operator

let val1;
//val1 = 5 ?? 10 // ao here we use this operater but if we run it will give the value is 5 so here we have one question that if value 5 is directly given so  why we use it so the reason is sometime we call some value from database , or firebase or appwrite so that dont give the direct response they give the two response so chace is that the reaponse will be null  or undefined fot that cases we use this method

//val1 = null ?? 10 // so bascically it will do that it will check that if any null value is come then check it safety if any value will come then assign that other wise assign the null 

//val1 = undefined ?? 15  // it will also like the upper one like null value

val1 = null ?? 10 ?? 20 // so here it will assingn the whateer  first value after the null  
console.log(val1)

//TERNIARY OPERATEOR

//=> condition ? true : flase


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80")

