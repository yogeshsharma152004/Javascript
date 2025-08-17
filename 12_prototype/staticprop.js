class User {
    constructor(username){
      this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return`123`
    }

}

const yogesh = new User("yogesh")
//console.log(yogesh.createId())

class Teacher extends User {
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new  Teacher("iphone","i@p.com")
console.log(iphone.createId());
