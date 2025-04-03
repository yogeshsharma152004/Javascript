/*const coding = ["js" , "ruby","py" , "cpp" ,"java"]

// like here we want to sote this into the variable 

const values = coding.forEach( (item) => { 
    //console.log(item)
    return item
})

console.log(values) /// so here now the for loop will return any value or not that we see if we print this so it values will print because of the console of the line no 6 but it will also give the undeifned because it will not return any thing so if we want to return any thing here then we have to manually return that item like in the line no 7 but it will also give the undefined , if we not the run the console of the line no 6 then it will also give the undefined soo that means that the foreach will not return the any value */

//FILTER

//=> first method 

//const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => num > 4) // it will also take the call back function the the parameter like the foreach // so the whenever we use the filter we have the arrow function(callback function) in this each value will access but after that we have to give one condition so the whoever statisfy that condition and the whatever value will be true will  return other wise it will not return
//console.log(newNums)

//second method to write the function

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => {
      return num > 4 // int his we use the scope {} if we dont use the return then it will return the empty array thats why we use the return in the scope 
})

//console.log(newNums)

//like we dont want to use the filter i want to use the forecah instead of that so this is the way we can use 

const newNum = [] // here we first make the empty array variable 

myNums.forEach( (num) => { // here we use the foreach method 
    if(num > 4){ // in for each we have to use if else for the condtiton we dont have any other option
           newNum.push(num) //here we want to push(add) the value in the our empty array
    }
})
//console.log(newNum) // if we run this it will also give the result like the fileter method 

//SOME EXAMPLES FOR FILTER 

//=> here it is a e where we have the mutiple object inside the array and we want to filter the vlaue this type of value we get from the databases 

const books = [
    {title: 'Book One' , genre: 'Fiction' , publish: 1981, edition: 2004},
    {title: 'Book One' , genre: 'Fiction' , publish: 1981, edition: 2004},
    {title: 'Book Two' , genre: 'Non-Fiction' , publish: 1992, edition: 2008},
    {title: 'Book Three' , genre: 'History' , publish: 1999, edition: 2007},
    {title: 'Book Four' , genre: 'Non-Fiction' , publish: 1989, edition: 2010},
    {title: 'Book Five' , genre: 'Science' , publish: 2009, edition: 2014},
    {title: 'Book Six' , genre: 'Fiction' , publish: 1987, edition: 2010},
    {title: 'Book Seven' , genre: 'History' , publish: 1986, edition: 1996},
    {title: 'Book Eight' , genre: 'Science' , publish: 2011, edition: 2016},
];

//const userBooks = books.filter((bk) => bk.genre === "History" ) // we check that the gener of the book will be history so we got the all the books that have the gnere history

let userBooks = books.filter((bk) =>{ return bk.publish >= 1995 && bk.genre=== "History"}  )//here we want that book that will publish after the 200 here we use the scope{} thats why we use the return like here we want to check that the two condition so we use the and operater
console.log(userBooks)


