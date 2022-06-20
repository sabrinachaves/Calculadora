let display = document.querySelector('.display');
const keyList = document.querySelectorAll('.number');
const signList = document.querySelectorAll('.sign');
let expression = document.querySelector('.expression');
let resultado;
let num1;
let num2;
let operator;
let tempOperator;
let count = 0;

for(let indice=0; indice < keyList.length;indice++){
    let key = keyList[indice];
    
    key.onclick = function(){

        if(key.value == "C"){
            deleteDisplay();
            deleteExpression();
        }else if(key.value == "="){
            num2 = parseFloat(display.value);
            expression.innerHTML += num2 + "=";
            display.value = calculate(num1, num2, operator);
        }else if(key.value == "+" || key.value == "-" || key.value == "/" || key.value == "*"){
            count++;
            if(count > 1){
                num2 = parseFloat(display.value);
                display.value = parseFloat(calculate(num1, num2, operator));
            }
            num1 = parseFloat(display.value);
            operator = key.value;
            tempOperator = operator;
            expression.innerHTML = num1+operator;
        }
        else{
            if(tempOperator == "+" || tempOperator == "-" || tempOperator == "/" || tempOperator == "*"){
                deleteDisplay();
                tempOperator = "";
            }
            display.value = display.value + key.value;
        }
    }
}

function deleteDisplay(){
    display.value = "";
}

function deleteExpression(){
    expression.innerHTML = "";
}

function calculate(num1, num2, operator){
    if(operator == "+"){
        return num1 + num2;
    }else if(operator == "-"){
        return num1 - num2;
    }else if(operator == "/"){
        return num1/num2;
    }else if(operator == "*"){
        return num1*num2;
    }
}