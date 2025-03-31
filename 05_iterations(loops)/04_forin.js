// LOOP SO IN THE FOR OFF LOOP WE SEE THAT IS NOT WORK ON THE OBJECT SO FOR THE OBJECT WE USE THE FOR IN LOOP

//=> FOR IN on the object

const myObj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObj) {
    //console.log(`${key} shortcut is for ${myObj[key]}`)
}

//=> FOR IN on the array in this if we print the key value the it will give the only key  0,1,2 etc fot the printing the value we write the key like in line no 21

const programming  = ["js" , "py" , "rb" , "java" , "cpp"]

for (const key in programming ) {
    //console.log(programming[key])
}

//FOR IN METHOD ON MAPS we dont iterate this method on the map so if we execute this loop then it will not return any value 

/*const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr' , "France")


for (const key in map) {
  console.log(key)
}*/