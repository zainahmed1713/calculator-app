const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const bracketsButton = document.querySelector('[data-brackets]');
const decimalButton = document.querySelector('[data-decimal]');
const clearScreenButton = document.querySelector('[data-clear-screen]');
const screen = document.querySelector('.display');
let str;
let count = 1;

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
    count = 1;
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


bracketsButton.addEventListener('click', function() {
    if (count % 2 === 0) {
        const btnValue = ')';
        str = screen.innerText.concat("", btnValue);
        screen.innerText = str;
        count++;
    }
    else {
        const btnValue = '(';
        str = screen.innerText.concat("", btnValue);
        screen.innerText = str;
        count++;
    }
});

