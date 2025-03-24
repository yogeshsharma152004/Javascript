//it is just for the understand it is fictional

/*
SO here we take the secnerio to undertsand the topics of let, var and const that like i want to invite any user to my website and want to tell them to fill reistration form in that form i need to five unique id beacuse whenever he come to website we can identify (it is all only fiction to understand ) it is for the prespetive that why we learn this things. whenever we will come we want his name , city, phone  number that all we will store anywhere we want to store that we have to memory where we store that information there in programming all is to store the data and optomize it for the that first topic is variable ans constant 

let , var and const is the keyword to declare the variable 

here is accounId , accountEmail etc are the variable we declare 
 */

/*
1. => Constant (Const) = once we declare the variable as a const then it will not change.

2. => Let = we can easily change  the value after we declare it 

here is the example there we declare the variable and ex that where we want to register the user
 */

const accountId = 2155400 // it is constant value that not change after we declare in line 26 i change the value of it but it show the error because we dont change it value 
let accountEmial = "Yogesh@g.com";
var accountPassword = "215480";
accountCity = "Vadodra" // we will also declare the variable like this but this is not the ideal way to decalre the variable

let accountState; //in js if we declare the variable like this  then it shows the undefined because we declare the variable not the value of it 

//const accountId = 21554545 

 //here i change the value of the some variable

 
 accountEmial = "yo@fd#.com";
 accountPassword = "212521";
 accountCity = "Bengluru";

 //here is the one problem that if we want to print them all then we write it one by one like line no 37 so insted we use the other method called console.table([])

 console.log(accountId);

 console.table([accountId,accountEmial,accountPassword,accountCity,accountState])

 /*
In the js for the declare the const variable we have only one method like we use in the line no 19
for the variable decalre we have two method var and let

var = > we dont use wer because of the issue of the in block scope and functuona scope
 */
 