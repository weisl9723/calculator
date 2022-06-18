let previousNum = "";
let currentNum = "";
let operator = "";

const numberBtn = document.querySelectorAll('[data-number');
const operationBtn = document.querySelectorAll('[data-operation]');
const clearBtn = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('[data-equal]');
const deleteBtn = document.querySelector('.delete');

const currentSaveNum = document.querySelector('.currentNum');
const previousSaveNum = document.querySelector('.previousNum');

equalBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteNum);


numberBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        displayNumber(button.textContent);
    })
})

function displayNumber(number){
    currentNum += number;
    currentSaveNum.textContent = currentNum;

}

operationBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        displayOperator(button.textContent);
    })
})

function displayOperator(op){
    if (previousNum === ""){
        operator = op;
        previousNum = currentNum;
        previousSaveNum.textContent = `${previousNum} ${op}`;
    }
    else{
        evaluate();
        operator = op;
        previousSaveNum.textContent = `${previousNum} ${op}`;
    }

    currentNum = "";
    currentSaveNum.textContent = "";
}


function evaluate(){
    if (operator === ""){
        return;
    }

    if (operator === "+") {
        previousNum = parseInt(previousNum) + parseInt(currentNum);
    }
    else if (operator === "-") {
        previousNum -= currentNum;
    }
    else if (operator === "x") {
        previousNum *= currentNum;
    }
    else if (operator === "/") {
        previousNum /= currentNum;
    }

    currentSaveNum.textContent = previousNum;

}

function clear(){
    previousNum = "";
    currentNum = "";
    operator = "";
    previousSaveNum.textContent = "";
    currentSaveNum.textContent = "0";
}

function deleteNum(){
    currentNum = currentNum.slice(0, -1);
    currentSaveNum.textContent = currentNum;
}