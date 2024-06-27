let currentNumber = "";
let operandOperator = null;
let operandNumber = null;
let result = null;

const display = document.getElementById("display");

function updateDisplay(number) {
  display.value = number;
}

function clearDisplay() {
  currentNumber = "";
  operandOperator = null;
  operandNumber = null;
  updateDisplay(currentNumber);
}

function appendNumber(number) {
  currentNumber += number;
  updateDisplay(currentNumber);
}

function performOperation(operator) {
  if (currentNumber === "") {
    return;
  } else {
    operandOperator = operator;
    operandNumber = parseInt(currentNumber);
    currentNumber = "";
    updateDisplay(currentNumber);
  }
}

function calculate() {
  if (operandOperator === null || currentNumber === "") {
    return;
  }

  let currentNum = parseInt(currentNumber);

  switch (operandOperator) {
    case "add":
      result = operandNumber + currentNum;
      break;
    case "subtract":
      result = operandNumber - currentNum;
      break;
    case "multiply":
      result = operandNumber * currentNum;
      break;
    case "divide":
      if (currentNum === 0) {
        alert("Cannot divide by zero");
        clearDisplay();
        return;
      }
      result = operandNumber / currentNum;
      break;
    default:
      return;
  }
  updateDisplay(result);
  currentNumber = result.toString();
  operandOperator = null;
  operandNumber = null;
}
