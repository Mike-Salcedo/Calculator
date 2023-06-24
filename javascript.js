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
    getNumbers(e);
    getOperator();
    makeTheMath(e);
    getIndexOfOperator();
  });
});

//Functions that populate the display when you click the number buttons

// Target numbersOperated p tags
let calculatorScreenOutPut = [];
let storeOperation;
let numberOne; // Variables for the calculator
let numberTwo;
let operatorSelected;
let indexOfOperator;
let result;

const numbersOperated = document.querySelector(".numbersOperated");

function updateCalculatorScreen(e) {
  if (e.target.id !== "=") calculatorScreenOutPut.push(e.target.id);

  storeOperation = calculatorScreenOutPut;
  numbersOperated.textContent = calculatorScreenOutPut.join(""); // Output to calculator screen
}

// Getting the index of the operator so i can know where to cut the numbers at

// Function to get the numbers

function getNumbers(e) {
  if (
    e.target.id === "*" ||
    e.target.id === "+" ||
    e.target.id === "-" ||
    e.target.id === "/"
  ) {
    numberOne = storeOperation.slice(0, indexOfOperator).join("");
  }

  if (
    numberOne !== undefined &&
    (storeOperation[indexOfOperator] === "*" ||
      storeOperation[indexOfOperator] === "/" ||
      storeOperation[indexOfOperator] === "+" ||
      storeOperation[indexOfOperator] === "-")
  ) {
    numberTwo = storeOperation
      .slice(indexOfOperator)
      .join("")
      .replace(/\D/g, "");
  }


}

// function to get the index of the operator symbol

function getIndexOfOperator() {
  if (numberOne !== undefined) {
    indexOfOperator = storeOperation.indexOf(operatorSelected);
  }

  // return (indexOfOperator = storeOperation
  //   .map((element) => {
  //     if (
  //       element === "*" ||
  //       element === "/" ||
  //       element === "+" ||
  //       element === "-"
  //     ) {
  //       return operatorSelected.indexOf(element);
  //     }
  //   })
  //   .filter((element) => {
  //     return element != undefined;
  //   }));
}

// function to get operator

const getOperator = () => {
  if (storeOperation != undefined)
    storeOperation.filter((element) => {
      if (
        element === "*" ||
        element === "/" ||
        element === "+" ||
        element === "-"
      )
        return (operatorSelected = element);
    });
};

operatorSelected = getOperator();

// grab the result element

const outputResult = document.querySelector(".result");
// function to do the operation

function makeTheMath(e) {
  if (e.target.id === "=" && numberOne != undefined && numberTwo != undefined) {
    result = operate(operatorSelected, numberOne, numberTwo);
    outputResult.textContent = `${result}`;
    // numberOne = result;
    calculatorScreenOutPut = [result];

    numberTwo = storeOperation
      .slice(indexOfOperator)
      .join("")
      .replace(/\D/g, "");
  }
}

// Clear the whole calculator

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", (e) => clear(e));

function clear(e) {
  if (e.target.classList.contains("clear")) {
    outputResult.textContent = "";
    numbersOperated.textContent = "0";
    calculatorScreenOutPut = [];
    storeOperation = undefined;
    numberOne = undefined; // Variables for the calculator
    numberTwo = undefined;
    indexOfOperator = undefined;
  }
}
