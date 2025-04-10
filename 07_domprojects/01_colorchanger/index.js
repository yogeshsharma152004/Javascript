/*const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click' , function(e){ 
      console.log(e)
      console.log(e.target)
      if(e.target.id === 'grey'){
        //body.style.backgroundColor = 'grey'
        body.style.backgroundColor = e.target.id //it is a give the same color because of the id 
      }
      if(e.target.id === 'white'){
        //body.style.backgroundColor = 'white'
        body.style.backgroundColor = e.target.id //it is a give the same color because of the id 
      }
      if(e.target.id === 'blue'){
        //body.style.backgroundColor = 'blue'
        body.style.backgroundColor = e.target.id //it is a give the same color because of the id 
      }
      if(e.target.id === 'yellow'){
        //body.style.backgroundColor = 'yellow'
        body.style.backgroundColor = e.target.id //it is a give the same color because of the id 
      }
  })
})*/


//in swith case 

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click' , function(e){ 
      console.log(e)
      console.log(e.target)
      /*switch(e.target.id){
           case 'grey':
           body.style.backgroundColor = "grey";
           break;
           case 'white':
           body.style.backgroundColor = "white";
           break;
           case 'blue':
           body.style.backgroundColor = "blue";
           break;
           case 'yellow':
           body.style.backgroundColor = "yellow";
           break;

           default :
           //console.log('give the right  value ')
           break;
    
      }*/

      //other method in switch case 

      switch(e.target.id){
        case 'grey':
        case 'white':
        case 'blue':
        case 'yellow':
        
        body.style.backgroundColor = e.target.id;

        break;

        default:
        break;
      }
  })
})