//here we see the how we can create the promises 

const promiseOne = new Promise(function(resolve, reject){
    // here we do the async task
    //database calles , networks 

    setTimeout(function(){
         console.log('Aync task is complete');
         resolve() //here we use it becuse if we dont use it then it dont give the value of the whatever value we consume 
         
    },1000)
})//promise have the function that function have the two things resolve and reject 

//like here we create the promise so we have to consume it 
//so here resolve have the  direct connection with the .then()

promiseOne.then(function(){
    console.log("Promise consume");  
})

//-------------------------------------//

//other method to write the promise and consume it 

new  Promise(function(resolve , reject){

    setTimeout(function(){
       console.log("Async Task 2");
       resolve()
    },1000)
}).then(function(){
    console.log('aync 2 is resolved');
    
})

///-----------------------/////

//if we want to pass the any data from the over created promise to the consume then we use like this 




const promiseThree = new Promise(function(resolve, reject){
setTimeout(function(){
    resolve({username : "chai" , email :"uldjj@gmail.com"} ) //in this we can pass the data in the parameter mostly we pass the object data but we can also pass the array or any function will also pass
},1000)
})

promiseThree.then(function(user){
  console.log(user) //so here we get the consume data 
}) 


////------------//////

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true//so here the value is true for error if here is false then it will give the value 
        if(!error){
            resolve({username: "Yogesh"  , password : "123"})
        }else{
            reject('ERROR :Something went wrong')
        }

    },1000)
})

//here we use the then multiple time it is called as a chaining and we can use whatever time we want 

promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
})//it is connected with the reject to catch the errors 
.finally(() => console.log("The promise is either resolved or rejected ") ) //some time we want to know that in the end that whatever work you want to do is completed like resolved or rejected 


//----------------------//

//promises handle using the async and await 

const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript"  , password : "123"})
        }else{
            reject('ERROR :Js went wrong')
        }

    },1000)
});


//aync and await is also like the .then and .catch it wait some time to complete the task if task is complete then it will move forward other wise give the error that place 

//async and await cant handle the error directly thats why we use here the try and catch for that 

async function consumePromiseFive(){
  try{
     const response =  await promiseFive
     console.log(response);

  } catch (error){
    console.log(error);
    
  }
   
}

consumePromiseFive()


//------------------//

/*async function getAllUsers(){
    try{
        const response = await fetch('https://api.github.com/users/yogeshsharma152004')
        const data = await response.json()
        console.log(data);
    } catch(error){
        console.log("E:" ,error);
        
    }
}

getAllUsers()*/

//-------------------//

fetch('https://api.github.com/users/yogeshsharma152004').then((response) =>{

    return response.json()
 
}).then((data) => {
    console.log(data)
})
.catch((error) => console.log(error) )