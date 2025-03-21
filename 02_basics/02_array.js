const cricket_heros = ["Kohli" , "Rohit" , "Dhoni"]

const crickt_players = ["Hardik" , "Bumrah" , "Klrahul"]

// here we want to add the both array into the single array 

//first method PUSH it is not the ideal way to add the array 

//cricket_heros.push(crickt_players) // if we use this method it will add the whole array as a element not the all add the all elements as a separate 

//console.log(cricket_heros);
//console.log(cricket_heros[3][0]);// so here if we want to access the element from that added array so we can fetch like this 

//second method CONCAT

const allHeros  = cricket_heros.concat(crickt_players) //it will add the elements in  one array return the new array
//console.log(allHeros )  


//SPREAD METHOD 

const all_new_heros = [...cricket_heros , ...crickt_players] // it will spred the both array give as a all the elements as a single element in the new array // (...) it is a syntax of the spread 

console.log(all_new_heros)

// FLAT METHOD 
const  another_array = [1,2,3 ,[4,5,6] , 7, [6,7 , [4,5]]]

const real_another_array = another_array.flat(2) // it will convert the all sub arrays into the array and in the parenthesis we give the depth value that means how many sub array we want to convert 
console.log(real_another_array)


// this method will used mostly used in the data scrapping  some time we select the data from the web page it will come in sometime node format or in object form or any other form but we need array so we loop upon array so that place we use array like this 

//first we question is that is array or not 

//=> isArray method will check that the value we passed is a array or not
console.log(Array.isArray("yogesh")) // so it is not an array it gives the false if array then give true 


//=> from method 

console.log(Array.from("yogesh")) // it will convert the string into the array

console.log(Array.from({name:"yogesh"})) // convert the object into the array intersting method 

//for the convert the mutiple variable or mutiple array into the array

//=> of method it is create the new array of the given value or parameter

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))

