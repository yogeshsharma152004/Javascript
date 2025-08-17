function SetUsername(username){
    this.username = username
    
}


function createUser(username,email,password){

    SetUsername.call(this , username)//for hold the refrence we use the call method and here we hold the refrence of the setusername and here we use the this for the give the current context

    this.email = email
    this.password = password

}

const chai = new createUser("chai","chai@fn.com" ,"123")
console.log(chai);
