# Projects related DOM

## project 1 color changer

```javascript

const bodyBg = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){

        // If statement
        
        if(e.target.id === 'grey'){
            bodyBg.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            bodyBg.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            bodyBg.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            bodyBg.style.backgroundColor = e.target.id;
        }

        // Switch statement

        switch (e.target.id) {
            case "grey":
                bodyBg.style.backgroundColor = e.target.id
                break;
            case "white":
                bodyBg.style.backgroundColor = e.target.id
                break;
            case "blue":
                bodyBg.style.backgroundColor = e.target.id
                break;
            case "yellow":
                bodyBg.style.backgroundColor = e.target.id
                break;    
            default:
                console.log("no color selected");
                break;
        }

    })
})

```

## project 2 BMI calculator

```javascript

const form = document.querySelector('form')

        form.addEventListener('submit', function(e){
            e.preventDefault()

            const height = parseInt(document.querySelector('#height').value)
            const weight = parseInt(document.querySelector('#weight').value)
            const result = document.querySelector('#results')

            if(height === '' || height < 0 || isNaN(height)){
                result.innerHTML = `Please provide a valid height ${height}`
            }else if(weight === '' || weight < 0 || isNaN(weight)){
                result.innerHTML = `Please provide a valid weight ${weight}`
            }else{
                const bmi = (weight / ((height * height)/10000)).toFixed(2)
                // show the result
                result.innerHTML = `<span>${bmi}</span>`
            }
            
            
        })

```