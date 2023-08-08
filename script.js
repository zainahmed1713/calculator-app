const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const decimalButton = document.querySelector('[data-decimal]');
const clearScreenButton = document.querySelector('[data-clear-screen]');
const screen = document.querySelector('.display');
let str;

numberButtons.forEach(button => {
    button.addEventListener('click', function(){
        const btnValue = button.innerText;
        str = screen.innerText.concat("", btnValue); 
        screen.innerText = str;
    });
});

clearScreenButton.addEventListener('click', function() {
    str = "";
    screen.innerText = "";
});

operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        if(button.innerText === 'x') {
            button.innerText = '*';
        }

        const btnValue = button.innerText;
        str = screen.innerText.concat("", btnValue); 
        screen.innerText = str;
    });
});


equalButton.addEventListener('click', function() {
    const calculate = new Function('return ' + str);
    const result = calculate();
    screen.innerText = result;
});


decimalButton.addEventListener('click', function() {
        const btnValue = decimalButton.innerText;
        str = screen.innerText.concat("", btnValue); 
        screen.innerText = str;
});
