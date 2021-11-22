// Add function
function add(a, b) {
    total = Number(a) + Number(b);
}

// Subtract function
function subtract(a, b) {
    total = Number(a) - Number(b);
}

// Mulitply function
function multiply(a, b) {
    total = Number(a) * Number(b);
}

// Divide function
function divide(a, b) {
    if (Number(a) == 0 || Number(b) == 0) {
        total = "Error";
    } else
    total = Number(a) / Number(b);
}

// Operate (find relevant function)
function operate(number1, operator, number2) {
    if (operator == "+") {
        add(number1, number2);
    } else if (operator == "−") {
        subtract(number1, number2);
    } else if (operator == "×") {
        multiply(number1, number2);
    } else {
        divide(number1, number2);
    }
};

// Global variables
let firstNumber;
let operator;
let secondNumber;
let total;

// Keypad: 9
const btn9 = document.querySelector("#nine");
btn9.addEventListener("click", () => {
    firstNumber = document.getElementById("screen").textContent += 9;
});

// Keypad: 8
const btn8 = document.querySelector("#eight");
btn8.addEventListener("click", () => {
    firstNumber = document.getElementById("screen").textContent += 8;
});

// Keypad: 7
const btn7 = document.querySelector("#seven");
btn7.addEventListener("click", () => {
    firstNumber = document.getElementById("screen").textContent += 7;
});

// keypad: 6
const btn6 = document.querySelector("#six");
btn6.addEventListener("click", () => {
    firstNumber = document.getElementById("screen").textContent += 6;
});

// Keypad: 5
const btn5 = document.querySelector("#five");
btn5.addEventListener("click", () => {
    firstNumber = document.getElementById("screen").textContent += 5; 
});

// Keypad: 4
const btn4 = document.querySelector("#four");
btn4.addEventListener("click", () => {
    firstNumber = document.getElementById("screen").textContent += 4;
});

// keypad: 3
const btn3 = document.querySelector("#three");
btn3.addEventListener("click", () => {
    firstNumber = document.getElementById("screen").textContent += 3;
});

// Keypad: 2
const btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => {
    firstNumber = document.getElementById("screen").textContent += 2;
});

// Keypad: 1
const btn1 = document.querySelector("#one");
btn1.addEventListener("click", () => {
    firstNumber = document.getElementById("screen").textContent += 1;
});

// Keypad: 0
const btn0 = document.querySelector("#zero");
btn0.addEventListener("click", () => {
    firstNumber = document.getElementById("screen").textContent += 0;
});

// Keyboard Support
window.addEventListener("keydown", (e) => {

    switch (true) {
        case e.key == 9:
            firstNumber = document.getElementById("screen").textContent += 9;
            break;
        case e.key == 8:
            firstNumber = document.getElementById("screen").textContent += 8;
            break;
        case e.key == 7:
            firstNumber = document.getElementById("screen").textContent += 7;
            break;
        case e.key == 6:
            firstNumber = document.getElementById("screen").textContent += 6;
            break;
        case e.key == 5:
            firstNumber = document.getElementById("screen").textContent += 5;
            break;
        case e.key == 4:
            firstNumber = document.getElementById("screen").textContent += 4;
            break;
        case e.key == 3:
            firstNumber = document.getElementById("screen").textContent += 3;
            break;
        case e.key == 2:
            firstNumber = document.getElementById("screen").textContent += 2;
            break;
        case e.key == 1:
            firstNumber = document.getElementById("screen").textContent += 1;
            break;
        case e.key == 0:
            firstNumber = document.getElementById("screen").textContent += 0;
            break;
    }
});

// Keypad: Delete (C)
const btnc = document.querySelector("#c");
btnc.addEventListener("click", () => {
  firstNumber = document.getElementById("screen").textContent = "";
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
  total = undefined;
  document.getElementById("decimalPoint").disabled = false;
});

// Keypad: Backspace (arrow)
const btnb = document.querySelector("#backspace");
btnb.addEventListener("click", () => {

    firstNumber = firstNumber.split("");
    checkOperator = firstNumber.pop();
    if (checkOperator === "+" || checkOperator === "÷" || checkOperator === "×" || checkOperator === "−") {
        operator = undefined;
    }
    firstNumber = firstNumber.join("");
    firstNumber = document.getElementById("screen").textContent = firstNumber;
});

// Keypad: Add
const btnadd = document.querySelector("#add");
btnadd.addEventListener("click", () => {
    
    if (operator === undefined) {
        firstNumber = document.getElementById("screen").textContent += "+";
        operator = "+";
    } else {
        equals();
        firstNumber = document.getElementById("screen").textContent += "+";
        operator = "+";
    }
    document.getElementById("decimalPoint").disabled = false;
});

// Keypad: Subtract
const btnsubtract = document.querySelector("#subtract");
btnsubtract.addEventListener("click", () => {
    if (operator === undefined) {
        firstNumber = document.getElementById("screen").textContent += "−";
        operator = "−";
    } else {
        equals();
        firstNumber = document.getElementById("screen").textContent += "−";
        operator = "−";
    }
    document.getElementById("decimalPoint").disabled = false;
});

// Keypad: Multiply
const btnmultiply = document.querySelector("#multiply");
btnmultiply.addEventListener("click", () => {
    if (operator === undefined) {
        firstNumber = document.getElementById("screen").textContent += "×";
        operator = "×";
    } else {
        equals();
        firstNumber = document.getElementById("screen").textContent += "×";
        operator = "×";
    }
    document.getElementById("decimalPoint").disabled = false;
});

// Keypad: Divide
const btndivide = document.querySelector("#divide");
btndivide.addEventListener("click", () => {
    if (operator === undefined) {
        firstNumber = document.getElementById("screen").textContent += "÷";
        operator = "÷";
    } else {
        equals();
        firstNumber = document.getElementById("screen").textContent += "÷";
        operator = "÷";
    }
    document.getElementById("decimalPoint").disabled = false;
});

// Keypad: Decimal point
const btnDecimalPoint = document.querySelector("#decimalPoint");
btnDecimalPoint.addEventListener("click", () => {
    firstNumber = document.getElementById("screen").textContent += ".";
    document.getElementById("decimalPoint").disabled = true;
});

// Keypad: Equals
const btne = document.querySelector("#equal");
btne.addEventListener("click", () => {
equals();
});

// Round decimal numbers
function roundNumber(num) {
    return +(Math.round(num + "e+9") + "e-9")
}

// Equals function
function equals() {
    if (operator === undefined) {
        document.getElementById("screen").textContent = firstNumber;
    } else {
firstNumber = firstNumber.split("");
for (let i = 0; i < firstNumber.length; i++) {
    if (firstNumber[i] === "+" || firstNumber[i] === "÷" || firstNumber[i] === "×" || firstNumber[i] === "−") {
        secondNumber = firstNumber.splice(i+1, firstNumber.length);
        secondNumber = secondNumber.join("");
        firstNumber = firstNumber.splice(0, i);
        firstNumber = firstNumber.join("");
    }
};

operate(firstNumber, operator, secondNumber);
firstNumber = document.getElementById("screen").textContent = roundNumber(total);

if (total === "Error") {
    document.getElementById("screen").textContent = "Error"
};

firstNumber = total;
operator = undefined;
}};

// Variable check
console.log(`firstNumber: ${firstNumber}`);
console.log(`secondNumber: ${secondNumber}`);
console.log(`operator: ${operator}`);
console.log(`total: ${total}`);