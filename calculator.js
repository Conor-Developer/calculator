function add(a, b) {
    total = Number(a) + Number(b);
}

function subtract(a, b) {
    total = Number(a) - Number(b);
}

function multiply(a, b) {
    total = Number(a) * Number(b);
}

function divide(a, b) {
    if (Number(a) == 0 || Number(b) == 0) {
        total = "Error";
    } else
    total = Number(a) / Number(b);
}

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

let firstNumber;
let operator;
let secondNumber = undefined;
let total;


const btn9 = document.querySelector("#nine");
btn9.addEventListener("click", () => {
    if (typeof operator === "undefined") {
        firstNumber = document.getElementById("screen").textContent += 9;
    } else {
        secondNumber = document.getElementById("screen").textContent += 9;
    }   
});

const btn8 = document.querySelector("#eight");

btn8.addEventListener("click", () => {
    if (typeof operator === "undefined") {
        firstNumber = document.getElementById("screen").textContent += 8;
    } else {
        secondNumber = document.getElementById("screen").textContent += 8;
    }  
});


const btn7 = document.querySelector("#seven");
btn7.addEventListener("click", () => {
    if (typeof operator === "undefined") {
        firstNumber = document.getElementById("screen").textContent += 7;
    } else {
        secondNumber = document.getElementById("screen").textContent += 7;
    }  
});

const btn6 = document.querySelector("#six");
btn6.addEventListener("click", () => {
    if (typeof operator === "undefined") {
        firstNumber = document.getElementById("screen").textContent += 6;
    } else {
        secondNumber = document.getElementById("screen").textContent += 6;
    }  
});

const btn5 = document.querySelector("#five");
btn5.addEventListener("click", () => {
    if (typeof operator === "undefined") {
        firstNumber = document.getElementById("screen").textContent += 5;
    } else {
        secondNumber = document.getElementById("screen").textContent += 5;
    }  
});

const btn4 = document.querySelector("#four");
btn4.addEventListener("click", () => {
    if (typeof operator === "undefined") {
        firstNumber = document.getElementById("screen").textContent += 4;
    } else {
        secondNumber = document.getElementById("screen").textContent += 4;
    }    
});

const btn3 = document.querySelector("#three");
btn3.addEventListener("click", () => {
    if (typeof operator === "undefined") {
        firstNumber = document.getElementById("screen").textContent += 3;
    } else {
        secondNumber = document.getElementById("screen").textContent += 3;
    }  
});

const btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => {
    if (typeof operator === "undefined") {
        firstNumber = document.getElementById("screen").textContent += 2;
    } else {
        secondNumber = document.getElementById("screen").textContent += 2;
    }  

});

const btn1 = document.querySelector("#one");
btn1.addEventListener("click", () => {

    if (typeof operator === "undefined") {
        firstNumber = document.getElementById("screen").textContent += 1;
    } else {
        secondNumber = document.getElementById("screen").textContent += 1;
    }  
});

const btn0 = document.querySelector("#zero");
btn0.addEventListener("click", () => {
  
    if (typeof operator === "undefined") {
        firstNumber = document.getElementById("screen").textContent += 0;
    } else {
        secondNumber = document.getElementById("screen").textContent += 0;
    }  
});

// window.addEventListener("keydown", (e) => {
//     if (e.key == 9) {
//         if (typeof operator === "undefined") {
//             firstNumber = document.getElementById("screen").textContent += 9;
//         } else {
//             secondNumber = document.getElementById("screen").textContent += 9;
//         } 
//     } else if (e.key == 8) {
//         if (typeof operator === "undefined") {
//             firstNumber = document.getElementById("screen").textContent += 8;
//         } else {
//             secondNumber = document.getElementById("screen").textContent += 8;
//         } 
//     } else if (e.key == 7) {
//         if (typeof operator === "undefined") {
//             firstNumber = document.getElementById("screen").textContent += 7;
//         } else {
//             secondNumber = document.getElementById("screen").textContent += 7;
//         } 
//     } else if (e.key == 6) {
//         if (typeof operator === "undefined") {
//             firstNumber = document.getElementById("screen").textContent += 6;
//         } else {
//             secondNumber = document.getElementById("screen").textContent += 6;
//         } 
//     } else if (e.key == 5) {
//         if (typeof operator === "undefined") {
//             firstNumber = document.getElementById("screen").textContent += 5;
//         } else {
//             secondNumber = document.getElementById("screen").textContent += 5;
//         } 
//     } else if (e.key == 4) {
//         if (typeof operator === "undefined") {
//             firstNumber = document.getElementById("screen").textContent += 4;
//         } else {
//             secondNumber = document.getElementById("screen").textContent += 4;
//         } 
//     } else if (e.key == 3) {
//         if (typeof operator === "undefined") {
//             firstNumber = document.getElementById("screen").textContent += 3;
//         } else {
//             secondNumber = document.getElementById("screen").textContent += 3;
//         } 
//     } else if (e.key == 2) {
//         if (typeof operator === "undefined") {
//             firstNumber = document.getElementById("screen").textContent += 2;
//         } else {
//             secondNumber = document.getElementById("screen").textContent += 2;
//         } 
//     } else if (e.key == 1) {
//         if (typeof operator === "undefined") {
//             firstNumber = document.getElementById("screen").textContent += 1;
//         } else {
//             secondNumber = document.getElementById("screen").textContent += 1;
//         } 
//     } else if (e.key == 0) {
//         if (typeof operator === "undefined") {
//             firstNumber = document.getElementById("screen").textContent += 0;
//         } else {
//             secondNumber = document.getElementById("screen").textContent += 0;
//         } 
// }});

const btnc = document.querySelector("#c");
btnc.addEventListener("click", () => {
  firstNumber = document.getElementById("screen").textContent = "";
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
  total = undefined;
  document.getElementById("decimalpoint").disabled = false;
});

/////////////////////  <----BACKSPACE----> /////////////////////////////////////////////
const btnb = document.querySelector("#backspace");
btnb.addEventListener("click", () => {

    
    if (!(secondNumber === undefined)) {
    console.log(secondNumber = secondNumber.slice(0, -1));
    document.getElementById("screen").textContent = firstNumber;

  //  firstNumber = secondNumber;
    } else if (!(operator === undefined)) {
        document.getElementById("screen").textContent = firstNumber;
        operator = undefined;
    } else if (!(firstNumber === undefined)) {
        console.log(firstNumber = firstNumber.slice(0, -1));
        document.getElementById("screen").textContent = firstNumber;
    }

    console.log(typeof secondNumber);
    console.log(`firstNumber: ${firstNumber}`);
    console.log(`secondNumber: ${secondNumber}`);
    console.log(`Operator: ${operator}`);
    console.log(`Total: ${total}`);

});
/////////////////////////////////////////////////////////////////////////////////////
const btnadd = document.querySelector("#add");
btnadd.addEventListener("click", () => {
    document.getElementById("screen").textContent += "+";
    operator = "+";
    document.getElementById("decimalpoint").disabled = false;
});

const btnsubtract = document.querySelector("#subtract");
btnsubtract.addEventListener("click", () => {
    document.getElementById("screen").textContent += "−";
    operator = "−";
    document.getElementById("decimalpoint").disabled = false;
});

const btnmultiply = document.querySelector("#multiply");
btnmultiply.addEventListener("click", () => {
    document.getElementById("screen").textContent += "×";
    operator = "×";
    document.getElementById("decimalpoint").disabled = false;
});

const btndivide = document.querySelector("#divide");
btndivide.addEventListener("click", () => {
    document.getElementById("screen").textContent += "÷";
    operator = "÷";
    document.getElementById("decimalpoint").disabled = false;
});

const btnDecimalPoint = document.querySelector("#decimalpoint");
btnDecimalPoint.addEventListener("click", () => {
    if (operator === undefined) {
        firstNumber = document.getElementById("screen").textContent += ".";
        document.getElementById("decimalpoint").disabled = true;

    } else {
        secondNumber = (document.getElementById("screen").textContent += ".");
        document.getElementById("decimalpoint").disabled = true;

    }
});

function roundNumber(num) {
    return +(Math.round(num + "e+9") + "e-9")
}

const btne = document.querySelector("#equal");
btne.addEventListener("click", () => {
    secondNumber = secondNumber.split("");
    for (let i = 0; i < secondNumber.length; i++) {
        if (secondNumber[i] === "+" || secondNumber[i] === "÷" || secondNumber[i] === "+" || secondNumber[i] === "×" || secondNumber[i] === "−") {
            secondNumber = secondNumber.splice(i+1);
            secondNumber = secondNumber.join("");
        }
    };

    operate(firstNumber, operator, secondNumber);
    document.getElementById("screen").textContent = roundNumber(total);

    console.log(`firstNumber: ${firstNumber}`);
    console.log(`secondNumber: ${secondNumber}`);
    console.log(`Operator: ${operator}`);
    console.log(`Total: ${total}`);

    console.log(typeof firstNumber);
    console.log(typeof secondNumber);
    firstNumber = total;
});





// const btnb = document.querySelector("#backspace");
// btnb.addEventListener("click", () => {
//     if ((!operator === undefined) && (secondNumber === undefined)) {
//         firstNumber = firstNumber.slice(0, -1);
//         document.getElementById("screen").textContent = firstNumber;
//         console.log("If");  
//     } else if (secondNumber == undefined || secondNumber == null) {
//         document.getElementById("screen").textContent = firstNumber;
//         console.log("hola");
//     } else if (!(operator === undefined)) {
//         secondNumber = secondNumber.slice(0, -1);
//         document.getElementById("screen").textContent = secondNumber;
//         console.log("what up");
//     } else if (operator === undefined && secondNumber === undefined) {
//         firstNumber = firstNumber.slice(0, -1);
//         document.getElementById("screen").textContent = firstNumber;
//         console.log("hey");
//         secondNumber = undefined;
//     } else if (!(secondNumber === undefined)) {
//         secondNumber = secondNumber.slice(0, -1);
//         document.getElementById("screen").textContent = firstNumber;
//         console.log("Heya");
//     } else if (operator === undefined) {
//         document.getElementById("screen").textContent = firstNumber;
//         console.log("halo");
//     } else if (secondNumber === undefined) {
//         document.getElementById("screen").textContent = firstNumber;
//         console.log("hola");
//     } else {
//         document.getElementById("screen").textContent = "";
//         firstNumber = undefined;
//         console.log("Lets go")
//     }

