let previousNum = "";
let currentNum = "";
let operator = "";

const numberBtn = document.querySelectorAll('[data-number');
const operationBtn = document.querySelectorAll('[data-operation]');
const clearBtn = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('[data-equal]');
const deleteBtn = document.querySelector('.delete');
const decimalBtn = document.querySelector('.decimal');

const currentSaveNum = document.querySelector('.currentNum');
const previousSaveNum = document.querySelector('.previousNum');

equalBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteNum);
decimalBtn.addEventListener('click', addDecimal);

numberBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        displayNumber(button.textContent);
    })
})

function displayNumber(number){
    if (currentNum === "0"){
        return;
    }

    if (previousNum !== "" && currentNum !== "" && operator === "") {
        clear();
      }

    if (currentNum.length <= 11){
        currentNum += number;
        currentSaveNum.textContent = currentNum;
    }
}

function addDecimal(){
    if (!currentNum.includes(".")) {
        currentNum += ".";
        currentSaveNum.textContent = currentNum;
      }
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
    if (operator === "" || currentNum === ""){
        return;
    }

    if (operator === "+") {
        previousNum = parseFloat(previousNum) + parseFloat(currentNum);
    }
    else if (operator === "-") {
        previousNum -= currentNum;
    }
    else if (operator === "x") {
        previousNum *= currentNum;
    }
    else if (operator === "/") {
        if (currentNum === "0"){
            return currentSaveNum.textContent = "Can't Divide By Zero";
        }
        previousNum /= currentNum;
    }

    operator = "";
    previousNum = roundNumber(previousNum);
    currentSaveNum.textContent = previousNum;

}

function roundNumber(number){
    return Math.round(previousNum * 10000000) / 10000000;
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