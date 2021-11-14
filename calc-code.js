//calculator variables
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let number1;
let number2;

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.textContent) {
            case "AC":
                display.textContent = " ";
                break;
            case "DEL":
                if (display.textContent) {
                    display.textContent = display.textContent.slice(0, -1);
                }
                break;
            case "=":
                display.textContent = (display.textContent);
                break;
            default:
                display.textContent += e.target.textContent;
        }
    });
});


//user input - operator
operator = ("enter: +,-,/,*");


//user input - numbers
number1 = parseFloat(("enter a number: "));
number2 = parseFloat(("enter a number: "));


//calculation
let total;

if (operator === "+") {
    total = number1 + number2;
} else if (operator === "-") {
    total = number1 - number2;
} else if (operator === "*") {
    total = number1 * number2;
} else if (operator === "/") {
    total = number1 / number2;
}

display.textContent = total;




//test

