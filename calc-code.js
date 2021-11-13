const numberArray = document.querySelectorAll('button');
const operatorArray = document.querySelectorAll('operator');
const equalButton = document.querySelector('equal');
let display = document.getElementById("display");
const calculator = {
    displayNum: "0",
    value1: 0,
    operation: null,
    value2: 0,
    total: null,

}


calculator.displayNum = display;

