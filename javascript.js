let numberA = []; // Variables for the calculator
let numberB = [];
let operatorSelected;

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

const numberButtons = document.querySelectorAll(".calculatorBtn");

// we use the .forEach method to iterate through each button
numberButtons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", (e) => {
    // console.log(e.target.id); // Get ID of Clicked Element
    updateCalculatorScreen(e);
  });
});

//Functions that populate the display when you click the number buttons

// Target numbersOperated p tags

let numberAOutput;
let numberOne;
let numberTwo;
let tempNumber = [];

const numbersOperated = document.querySelector(".numbersOperated");

function updateCalculatorScreen(e) {
  if (!e.target.classList.contains("equals")) tempNumber.push(e.target.id);

  numbersOperated.textContent = `${tempNumber.join("")}`;

  if (numberOne === undefined) {
    numberA = tempNumber.join("");
    console.log(numberA);

    return numberA.replace(/^[0-9]*$/, "");
  } else if (numberOne !== undefined) {
    if (!e.target.classList.contains("equals")) numberB.push(e.target.id);

    numberTwo = numberB.join("");

    console.log({ numberTwo });
    return numberTwo.replace(/^[0-9]*$/, "");
  }
}

// Get first numbers to run operations on

function getNumberOne(e) {
  if (e.target.classList.contains("division")) {
    numberOne = numberA.slice(0, -1);
  } else if (e.target.classList.contains("multiplication")) {
    numberOne = numberA.slice(0, -1);
  } else if (e.target.classList.contains("minus")) {
    numberOne = numberA.slice(0, -1);
  } else if (e.target.classList.contains("equals")) {
    numberOne = numberA.slice(0, -1);
  } else if (e.target.classList.contains("plus")) {
    numberOne = numberA.slice(0, -1);
  }
}

// numberA = numberAOutput.split();

// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

const operatorButton = document.querySelectorAll(".operation");

// function operate(numberOne = numberAOutput) {}

operatorButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    getNumberOne(e);
    operate(e);
  });
});

// Make the math work

function operate(e) {
  if (
    e.target.classList.contains("equals") &&
    (numberOne === undefined || numberTwo === undefined)
  ) {
    numberOne = undefined;
    numberTwo = undefined;
    tempNumber = [];
    return (numbersOperated.textContent = `Make sure your operating on two numbers`);
  } else if (
    e.target.classList.contains("equals") &&
    numberOne !== undefined &&
    numberTwo !== undefined
  ) {
    for (i = 0; i < 10; i++) {
      //write code here}
    }
  }
}
