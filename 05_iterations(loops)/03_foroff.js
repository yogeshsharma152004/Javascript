//HERE ARE SOME OTHER TYPES OF LOOPS THEY ARE MOSTLY ARRAY SPECIFIED

//1. FOR OF 
//array method in for of
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

//string method in for of

const greetings = "Hello World"
for (const greet of greetings) {
   // console.log(`each char is ${greet}`)
}

//Maps  => it will hold the key:value pairs , in this the value will be unique and the value will be execute  in the order we given

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr' , "France")

//console.log(map)

//how can we iterate the loop on the maps

for (const [key,value] of map) {
    console.log(key, ':-' ,value); // if we print this it will give the outuput in the array form but we need the each single value so we put the [key,value] like this in that place
    
}

//we not ietrate the for of loop on the object it dont work on it 

/*const myObj = {
    'Game1' : 'NFS',
    'Game2' : 'Spiderman'
}

for (const [key,value] of myObj) {
    console.log(key , value);
    
}*/