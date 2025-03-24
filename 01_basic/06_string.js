// so here we learn the some advance Strings how it actually write in production and all the things 


const name = "Yogesh"
const repoCount = 4 

console.log(name + repoCount ); // so this the the not the good method if you want to add any string together it is the one method but not the right way

 // ``(back ticks) this is the right way to add the string and it will creates the string interpolation that creates the placeholder where we can directly inject the variable => so here for the inject the variable we use the ${} and inside the {} this bracket we write the variable name like here we want to print the name and repocount so write like this and the code is below 

  

 console.log(`Hello my name is ${name} and my repocount is ${repoCount} `);

//Onther method to write the string

 const gameName = new String('yogeshme') // here the new is keyword(objet of the js we use) if we run it on the browser console it will give the string and give the index number of the each letter in form of the key :value pair like 0:y , 1:o ...etc and it will give the lots of other method 

 console.log(gameName[0]); //here we access the key value of the string 

 console.log(gameName.__proto__); // we can also access the prototype by this but it is only give the object {} not the value like browser console but it is not empty the simple way to see them is a browser console 

 console.log(gameName.length) // here we find the length of the string we access the all the prototype like this 

 console.log(gameName.toUpperCase()); // it convert the string into the uppercase

 console.log(gameName.charAt(2)) // it used to check for that which character has placed that position

 console.log(gameName.indexOf('s')) // here we check that the what is the index position of the character


 // SOME INTERSTING METHOD

//1.=> substring
const gameName1 = new String('yogesh-sh')

 const newString  = gameName1.substring(0,4) // here we want tp print the subtring of the string if we run this it give the output as a yoge here the value write last 4 that will not include
 console.log(newString)

 //2.=> Slice method
 

 const anotherString = gameName1.slice(-8, 4) // in the slice we can write the value in -(minus) so it give the revese so here we write the -8 so it gives oge 
console.log(anotherString)

//TRIM METHOD


const newStringOne = "   yogesh  "
console.log(newStringOne) 
console.log(newStringOne.trim()) //so basically this methdod is to remove the starting and ending space that we given in our string  


// REPLACE METHOD

const url = "https://yogesh.com/yogesh%20sharma" // in this i want to remove the %20 and replae it with other value 

console.log(url.replace('%20', '=')) // so this will replae the %20 in the =

console.log(url.includes("yogesh")) // it will check that the value you give it is available or not their if available then give true and not then give false

