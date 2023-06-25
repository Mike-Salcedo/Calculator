function add(numberOne, numberTwo) {
  return +(parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(3);
}
function subtract(numberOne, numberTwo) {
  return +(parseFloat(numberOne) - parseFloat(numberTwo)).toFixed(3);
}
function multiply(numberOne, numberTwo) {
  return +(parseFloat(numberOne) * parseFloat(numberTwo)).toFixed(3);
}
function divide(numberOne, numberTwo) {
  return +(parseFloat(numberOne) / parseFloat(numberTwo)).toFixed(3);
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
    getNumbers();
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
let newOrderOfOperation;

const numbersOperated = document.querySelector(".numbersOperated");

function updateCalculatorScreen(e) {
  // Attempting to delete a number from the input

  if (e.target.classList.contains("delete")) {
    // Updates the Screen of the calculator
    calculatorScreenOutPut = calculatorScreenOutPut.filter(
      (value) => value != ""
    ); // Removes empty strings by filtering through them

    calculatorScreenOutPut = calculatorScreenOutPut.slice(
      0,
      calculatorScreenOutPut.length - 1
    );

    storeOperation = storeOperation.slice(0, storeOperation - 1);

    storeOperation = storeOperation.filter((value) => value != ""); // Removes empty strings by filtering through them
  }

  // Push values onto calculatorScreenOutPut
  if (e.target.id !== "=") calculatorScreenOutPut.push(e.target.id);

  storeOperation = calculatorScreenOutPut;

  // Second test for the number one variable

  storeOperation = storeOperation.filter((value) => value != ""); // Removes empty strings

  /* update screen function
   * Currently working on having it separate the variables and have it look better
   */

  numbersOperated.textContent = calculatorScreenOutPut.join(""); // Output to calculator screen
  deleteANumber(e);
}

// Deletes a number if the the user clicks on the delete button

function deleteANumber(e) {
  if (e.target.classList.contains("delete") && operatorSelected === undefined) {
    numberOne = storeOperation.join(""); // Updates the numberOne variable immediately with the new value of storeOperation
  }

  if (e.target.classList.contains("delete") && operatorSelected !== undefined) {
    numberTwo = storeOperation
      .slice(indexOfOperator)
      .join("")
      .replace(/\D/g, ""); // Updates the numberOne variable immediately with the new value of storeOperation
  }
}

// Output to calculator screen

// Getting the index of the operator so i can know where to cut the numbers at

// Function to get the numbers

function getNumbers() {
  if (operatorSelected !== undefined) {
    numberOne = storeOperation.slice(0, indexOfOperator).join("");
  } else if (operatorSelected === undefined) {
    numberOne = storeOperation.join("").replace(/\D/g, "");
  }

  if (numberOne !== undefined && operatorSelected !== undefined) {
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
    operatorSelected = undefined;
  }
}

/*Function to delete a part of the operation without deleting the whole thing*/
const deleteButton = document.querySelector(".delete");

deleteButton.addEventListener("click", (e) => updateCalculatorScreen(e));
