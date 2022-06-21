let display = document.querySelector('.display');
const keyList = document.querySelectorAll('.number');
const signList = document.querySelectorAll('.sign');
let expression = document.querySelector('.expression');
let num1 = 0;
let num2 = 0;
let operator;
let tempOperator = "";
let count = 0;


keyList.forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
        if (e.target.classList[0] === "number") {
            if(tempOperator != ""){
                deleteDisplay();
                tempOperator = "";
            }
            display.value += parseFloat(e.target.textContent);
        } else if (e.target.classList[0] === "sign") {
            operator = e.target.value;
            tempOperator = operator;
            count++;
            if (count > 1){
                num2 = parseFloat(display.value);
                display.value = parseFloat(calculate(num1, num2, operator));
                num1 = parseFloat(display.value);
            }else{
                num1 = parseFloat(display.value);
            }
        } else if (e.target.classList[0] === "especial") {
            if (e.target.textContent === "=") {
                if (count >= 1){
                    num2 = parseFloat(display.value);
                }
                console.log(num1, num2, operator)
                display.value = parseFloat(calculate(num1, num2, operator));
            }
            else if (e.target.textContent === "C") {
                count = 0;
                num1 = 0;
                num2 = 0;
                deleteDisplay();
                deleteExpression();
            }
        }
    })
})

function deleteDisplay() {
    display.value = "";
}

function deleteExpression() {
    expression.innerHTML = "";
}

function calculate(num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "/") {
        return num1 / num2;
    } else if (operator == "*") {
        return num1 * num2;
    }
}