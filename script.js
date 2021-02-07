const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator")
const equals = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const factorialButton = document.querySelector("#factorial");
let displayNumber = display.textContent;
let firstOperand = "";
let clearScreen = false;
let operation;

numbers.forEach(e => {
    e.addEventListener("click", function(){
        if(clearScreen == true){
            display.textContent = 0;
            clearScreen = false;
        }
        display.textContent = parseInt(display.textContent) * 10 + parseInt(e.getAttribute("value"));
        displayNumber = parseInt(display.textContent);
    });
});

operators.forEach(e => {
    e.addEventListener("click", function(){
        if(firstOperand != ""){
            display.textContent = operate(operation, firstOperand, parseInt(display.textContent));
        }
        operation = e.textContent
        firstOperand = parseInt(display.textContent);
        clearScreen = true;
    });
});

factorialButton.addEventListener("click", function(){
    display.textContent = factorial(parseInt(display.textContent));
});

equals.addEventListener("click", function(){
    display.textContent = operate(operation, firstOperand, parseInt(display.textContent));
    firstOperand = "";
});

clearButton.addEventListener("click", function(){
    display.textContent = 0;
    displayNumber = 0;
});

deleteButton.addEventListener("click", function(){
    display.textContent = parseInt(display.textContent / 10);
});

function operate(string, a, b){
    switch(string){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '×':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
        default:
            return "What???";
    }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return (parseFloat(a)/b == a/b)? (a/b) : (parseFloat(a)/b);
}

function factorial(a){
    let result = 1;
    for(let i = 1; i <= a; i++){
        result *= i;
    }
    return result;
}