let currentNumber = "";
let operator = null;
let number = null;

const display = document.getElementById("display");

function updateDisplay(number) {
  display.value = number;
}

function clearDisplay() {
  currentNumber = "";
  operator = null;
  number = null;
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
    switch (operator) {
      case "add":
        number += parseInt(currentNumber);
        currentNumber = "";
        break;
      case "subtract":
        number -= parseInt(currentNumber);
        currentNumber = "";
        break;
      case "multiply":
        number *= parseInt(currentNumber);
        currentNumber = "";
        break;
      case "divide":
        number /= parseInt(currentNumber);
        currentNumber = "";
        break;
      default:
        break;
    }
    updateDisplay(currentNumber);
  }
}

function calculateResult() {
  let calculateResult = parseInt(number) + parseInt(currentNumber);
  updateDisplay(calculateResult);
}
