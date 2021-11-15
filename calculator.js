function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(number1, operator, number2) {
    if (operator == "+") {
        add(number1, number2);
    } else if (operator === "-") {
        subtract(number1, number2);
    } else if (operator === "*") {
        multiply(number1, number2);
    } else if (operator === "/") {
        divide(number1, number2);
    }
};


