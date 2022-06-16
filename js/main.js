let display = document.querySelector('.display');
const keyList = document.querySelectorAll('.number');
const signList = document.querySelectorAll('.sign');
let resultado;
let num1;
let num2;
let operator;
let count = 0;

for(let indice=0; indice < keyList.length;indice++){
    let key = keyList[indice];
    
    key.onclick = function(){

        if(key.value == "CE"){
            deleteDisplay();
        }else if(key.value == "="){
            num2 = parseFloat(display.value);
            display.value = calculate(num1, num2, operator);
        }else if(key.value == "+" || key.value == "-" || key.value == "/" || key.value == "*"){
            num1 = parseFloat(display.value);
            operator = key.value;
            deleteDisplay();
        }
        else{
            display.value = display.value + key.value;
        }
    }
}

function deleteDisplay(){
    display.value = "";
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