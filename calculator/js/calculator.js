window.addEventListener("load", () => {
    const display = document.querySelector(".calculator-display");
    const buttons = document.getElementsByClassName("keypad-button");
    
    const buttonsArray = Array.from(buttons);
    
    buttonsArray.forEach((button) => {
        button.addEventListener("click", () =>{
            calculator(button, display);
        })
    })
});

function calculator(button, display) {
    switch (button.innerHTML) {
        case 'C':
            refresh(display);
            break;
        case "=":
            calculate(display);
            break;
        default:
            update(display, button);
            break;
    }
}

function calculate(display){
    display.innerHTML = eval(display.innerHTML);
}

function update(display, button){
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
    
}

function refresh(display){
    display.innerHTML = 0;
}