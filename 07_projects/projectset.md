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