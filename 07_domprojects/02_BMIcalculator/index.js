const form = document.querySelector('form')

form.addEventListener('submit' , function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value) //here we get the input value but the value in in the string so we convert it into tbe int using the parseInt 

    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `please give the valid height ${height}`
    }
 
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `please give the valid height ${weight}`
    } else{
       const bmi  =  (weight / ((height*height)/10000)).toFixed(2)
        //show the result

        //results.innerHTML = `<span>${bmi}</span>`

       let range = '';

        if(bmi < 18.6){
            range = 'Underweight';
        }else if (bmi >=18.6 && bmi<=24.9){
            range = "Normal Range";
        }else{
            range = "Overwight";
        }

        results.innerHTML = `<span>${bmi} (${range})</span>`


        
    }

})