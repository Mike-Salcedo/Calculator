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

let numberA; // Variables for the calculator
let numberB;
let operatorSelected;

// Operate function takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, numberOne, numberTwo) {
  console.log(operator);

  switch (operator) {
    case "+":
      return add(numberOne, numberTwo);

    case "-":
      return subtract(numberOne, numberTwo);

    case "*":
      return multiply(numberOne, numberTwo);

    case "/":
      return divide(numberOne, numberTwo);

    default:
      return "Not a valid operation";
  }
}

// Targeting the buttons for the calculator

const buttons = document.querySelectorAll(".calculatorBtn");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", (e) => {
    console.log(e.target.id); // Get ID of Clicked Element
    updateCalculatorScreen(e);
  });
});

//Functions that populate the display when you click the number buttons

// Target numbersoperated p tags

const numbersoperated = document.querySelector(".numbersOperated");
numbersoperated.textContent = `test`;

function updateCalculatorScreen(e) {
  numbersoperated.textContent = `${e.target.id}`;
}
