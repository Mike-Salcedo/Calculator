function add(numberOne, numberTwo) {
  return parseInt(numberOne) + parseInt(numberTwo);
}
function subtract(numberOne, numberTwo) {
  return parseInt(numberOne) - parseInt(numberTwo);
}
function multiply(numberOne, numberTwo) {
  return parseInt(numberOne) * parseInt(numberTwo);
}
function divide(numberOne, numberTwo) {
  return parseInt(numberOne) / parseInt(numberTwo);
}

// Operate function takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, numberOne, numberTwo) {
  switch (operator) {
    case "+":
      return add(numberOne, numberTwo);

    case "-":
      return subtract(numberOne, numberTwo);

    case "x":
      return multiply(numberOne, numberTwo);

    case "÷":
      return divide(numberOne, numberTwo);

    default:
      return "Not a valid operation";
  }
}

// Targeting the buttons for the calculator

const numberButtons = document.querySelectorAll(".calculatorBtn");

// we use the .forEach method to iterate through each button
numberButtons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", (e) => {
    // console.log(e.target.id); // Get ID of Clicked Element
    updateCalculatorScreen(e);
    getNumberOne(e);
  });
});

//Functions that populate the display when you click the number buttons

// Target numbersOperated p tags
let calculatorScreenOutPut = [];
let storeOperation;
let numberOne; // Variables for the calculator
let numberTwo;
let operatorSelected = ["+", "-", "*", "/"];
let indexOfOperator;

const numbersOperated = document.querySelector(".numbersOperated");

function updateCalculatorScreen(e) {
  calculatorScreenOutPut.push(e.target.id);

  storeOperation = calculatorScreenOutPut;
  numbersOperated.textContent = calculatorScreenOutPut.join(""); // Output to calculator screen
}

// Getting the index of the operator so i can know where to cut the numbers at

// Function to get the numbers

function getNumbers(e) {
  if (
    (e.target.id === "*" ||
      e.target.id === "+" ||
      e.target.id === "-" ||
      e.target.id === "/") &&
    numberOne == undefined
  ) {
    numberOne = storeOperation.slice(0, -1).join("");
    return (indexOfOperator = storeOperation.length);
  }

  if (numberOne !== undefined) {
    return (numberTwo = storeOperation.slice(indexOfOperator).join(""));
  }
}
