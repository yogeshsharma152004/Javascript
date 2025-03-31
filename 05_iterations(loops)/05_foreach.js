//FOR EACH LOOP THIS METHOD WE WILL USE MOST IN ARRAY

const coding = ["js" , "ruby","py" , "cpp" ,"java"]

coding.forEach(function  (item) {
      //console.log(item)
}) //here we give the function in the parenthisis here we callback the function so it dont have any variable name here we give the parameter name 


//THROUGH THE ARROW FUNCTION

coding.forEach ( (val) => {
    //console.log(val)
})

// ex 

function printMe(item){
    //console.log(item);
}

//coding.forEach(printMe)

coding.forEach((item , index , arr) => {
    //console.log(item , index , arr);
    
}) // it is not only return the item value it also return the index , array value 

//many object inside the array 

const myCoding = [
    {
         languagename : "js",
         languageFilename : "javascript"
    },
    {
         languagename : "java",
         languageFilename : "java"
    },
    {
         languagename : "py",
         languageFilename : "python"
    },
]

myCoding.forEach((item) => {
    console.log(item.languagename)
})