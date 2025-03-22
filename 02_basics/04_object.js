// 2. Object declare using constructor and it is a singletone


//Singletone => it means that whenever we make object using constructore it is singletone object it means it only one object like this 

//const tinderUser = new Object() // it is a singleton object
const tinderUser = {} //we can also declare like this it s non singleton object like we use in our first method to declare the object 
tinderUser.id = "1234yus"
tinderUser.name = "megs"
tinderUser.isLoggedIn = false

console.log(tinderUser)

//if we want to declare the object inside the object 

//here we put the object inside the object the we aceess by the dot method 
const regularUser = {

    email : "sum@gmail.com",
    fullname :{ 
        userfullname : {
            firstname: "yogesh",
            lastname : "shrama",
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname) // this is the way we can access the object inside the object 


// how to combine the two object inside the one object 

const obj1 = {0:"y" , 2:"m"}
const obj2 = {3:"s" , 4:"n"}

//const obj3 = Object.assign({} ,obj1,obj2) //we use assign method mostly rare {} here we give this it is a optionl parameter if we give it or not the output will be the same 

const obj3   = {...obj1 , ...obj2} // it is a spread method 
console.log(obj3) 

// it is a syntax mostly we use when the data will come from the database
//data come from the database will come in the form of the array of objects 

const users = [ // the data will come like this 
    {
        id : 1,
        email : "m@gmail.com"
    },
    {
        id : 1,
        email : "m@gmail.com"
    },
    {
        id : 1,
        email : "m@gmail.com"
    },
    {
        id : 1,
        email : "m@gmail.com"
    },
    {
        id : 1,
        email : "m@gmail.com"
    }

]
//if we want to access any object value from that array then we access like this 

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser)) // if we want the only key of the any object then we use this method and it will give the key in the array

console.log(Object.values(tinderUser)) //if we want the only value of the any object then we use this method 

console.log(Object.entries(tinderUser)) // convert the all key and value into the indivisuale array

console.log(tinderUser.hasOwnProperty('name')) // it is used to chcek the value are avilable in object or not if available then give true if not then give the false 


// destructiong object 

const course = {
    coursename : "js",
    price:"999",
    courseInstructore:"hitesh"
}

//course.courseInstructore  => it is first method that we can write everytime variabele name and key we want to access  it but if we dont want to do that then we will use the deconstructore method 

const {courseInstructore} = course // it is the syntax of the deconstruct the any value from the object her the course is a object name and in the curley brases we write the value we want to access from the object 
console.log(courseInstructore)

const {courseInstructore:instructore} = course // in the brases we give the any name want here we change it to the instructore 
console.log(instructore)


