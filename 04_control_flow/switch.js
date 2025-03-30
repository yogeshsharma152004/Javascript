// like we see in the if else we want to check the one value in  multiple condtiton so for that we also use the SWITCH CASE statement

/*=> SYNTAX = > switch(key means the value we want to check the every time){
case value:
    break; // it means that if we run any any condition and it will match at point then it will not check the value after that if we dont write it it will execute  the value after that value we want but dont execute the default
   default : // it is like else if any value will not execute then it will obvisuley execute
    break; 
} here we check the multiple values*/

//ex

const month = 3

switch (month) {
    case 1: //here we chceck that our value equal to one or not
        console.log("jan");
        break;
    case 2: //here we chceck that our value equal to two or not
        console.log("feb");
        break;
    case 3: //here we chceck that our value equal to three or not
        console.log("march");
         break;
    case 4: //here we chceck that our value equal to four or not
        console.log("april");
        break;

    default:
        console.log("it is not matched")
        break;
}


// so in upper case we see fot the number what if string or ay other type will come for that 


const mont = "feb"

switch (mont) {
    case "jan": //here we chceck that our value equal to one or not
        console.log("jan");
        break;
    case "feb": //here we chceck that our value equal to two or not
        console.log("feb");
        break;
    case "march": //here we chceck that our value equal to three or not
        console.log("march");
         break;
    case "april": //here we chceck that our value equal to four or not
        console.log("april");
        break;

    default:
        console.log("it is not matched")
        break;
}