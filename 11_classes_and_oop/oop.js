//---object literales -----//

//=> this simply means the it is a object 


const user = {
    username : "Yogesh", /*this all is our properties  */
    loginCount : 7,
    signedIn : true,

      getUserDetails: function(){
        //console.log("got user detailes from databases ");
       // console.log(`Username : ${this.username}`);
        console.log(this); //give the current context value 
        
      }
}

//console.log(user);
//console.log(user.getUserDetails());




//----- Constructor function -------//

// it means that it allow you to form one object you can make multiple instances 

//const promiseOne = new Promise() //so here the new is a constructer function 
//new keyword is used to create the new context 

//here we see the how constructer function will work

function User(username ,loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    
    this.greeting = function(){
        console.log((`welcome${this.username}`));
        
    }

    return this ;
}

const userOne = new User("yogesh" , 12, true)
const userTwo = new User("ChaiorCode",12, false)

 console.log(userOne);
 console.log(userTwo);
 