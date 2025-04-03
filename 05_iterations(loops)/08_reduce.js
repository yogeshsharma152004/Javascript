//REDUCE METHOD 
//=> in the reduce method in the callback function we have the two values accumlator and current value 

//=> so the accumlater will provide the empty variable 
//=> currentvalue means it is a current value of our array we declare 

const myNums  = [1,2,3,]

const myTotal = myNums.reduce(function (accmulator , currentvalue ) // so here we give the callback function 
{
    console.log(`acc:${accmulator} and curr:${currentvalue}`) //here we want to chekc that how it will work //so here the first the acc value is 0 beacuse we give that if we give any other then it will be take that value and in the our first currval is 1 so after that the additon will happen that two value and whatever output will come that will be oue next acc value so in the second time 1 will become our acc value and our curr value is a 2 and additon of that is 3 and next the 3 will become the acc vlaue and our curr value is a 3 so th final output of the our array is a 6 like this the acc and curr value will work
    return accmulator + currentvalue // here we want to rerurn this value 
},0) // so problem is that the accumlaater is dont know that where to the start so for that we give the (,) coma after the function and give the value here we can give the whatever value we want to  give the accumlater so here we give the vlaue 0
    
console.log(myTotal)//it will give the final additon value of the array is 6

//reduce in the arrow function 

const myNums1  = [1,2,3,]

const myTotal1 = myNums1.reduce( (accumlaater , currentvalue) => accumlaater + currentvalue , 0)

console.log(myTotal1)


//EX

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : " py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    },
    
]

//like here we want to add the all price into the shopping cart 

const priceTopay = shoppingCart.reduce((accmulator,item) => accmulator + item.price, 0)

console.log(priceTopay)