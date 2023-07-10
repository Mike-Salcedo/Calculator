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
    // getNumbers();
    // getOperator();
    // getIndexOfOperator();
    makeTheMath(e);
  });
});

//Functions that populate the display when you click the number buttons

// Target numbersOperated p tags
let calculatorScreenOutPut = [];
let storeOperation = [];
let numberOne = []; // Variables for the calculator
let numberTwo = "";
let operatorSelected = "";
let indexOfOperator = "";
let result = "";

const numbersOperated = document.querySelector(".numbersOperated");

function updateCalculatorScreen(e) {
  deleteANumber(e);

  const buttonClicked = e.target.id;

  // Push values onto calculatorScreenOutPut
  if (buttonClicked !== "=") calculatorScreenOutPut.push(buttonClicked);

  storeOperation = calculatorScreenOutPut.filter((value) => value != ""); // Removes empty strings

  /* update screen function
   * Currently working on having it separate the variables and have it look better
   */

  numbersOperated.textContent = calculatorScreenOutPut.join(""); // Output to calculator screen
  getNumbers();
  getOperator();
  getIndexOfOperator();
}

function deleteANumber(e) {
  // Deletes a number if the the user clicks on the delete button
  const buttonClicked = e.target.classList;

  if (buttonClicked.contains("delete")) {
    calculatorScreenOutPut = calculatorScreenOutPut.slice(
      0,
      calculatorScreenOutPut.length - 1
    );

    storeOperation = storeOperation.slice(0, storeOperation - 1);

    storeOperation = storeOperation.filter((value) => value != ""); // Removes empty strings by filtering through them
  }
}

function getNumbers() {
  // Function to get the numbers checks if certain variables have values and updates the numbers according to if they do or don't
  if (operatorSelected !== "") {
    numberOne = storeOperation.slice(0, indexOfOperator).join("");
  } else {
    numberOne = storeOperation.join("").replace(/\D/g, "");
  }

  if (numberOne !== [] && indexOfOperator !== "") {
    numberTwo = storeOperation
      .slice(indexOfOperator)
      .join("")
      .replace(/\D/g, "");
  }
}

function getIndexOfOperator() {
  // function to get the index of the operator symbol
  if (numberOne !== []) {
    indexOfOperator = storeOperation.indexOf(operatorSelected);
  }
}

// function to get operator

const getOperator = () => {
  if (storeOperation != "")
    storeOperation.find((element) => {
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

// filter through the stored operation

function makeTheMath(e) {
  // Second if condition test works if the user clicks on equals

  const buttonClicked = e.target.id;

  if (buttonClicked === "=" && numberTwo === "") {
    return (outputResult.textContent = "Missing Numbers");
  } // Incase user clicks on equals without having an operator or second number

  /* Trying to set it up so multiple operations can be stringed together without messing it up*/

  if (
    (buttonClicked === "/" ||
      buttonClicked === "*" ||
      buttonClicked === "-" ||
      buttonClicked === "+" ||
      buttonClicked === "=") &&
    numberOne !== [] &&
    numberTwo !== "" &&
    operatorSelected !== ""
  ) {
    result = operate(operatorSelected, numberOne, numberTwo);

    outputResult.textContent = `${result}`;

    const tempVariable = Array.from(result.toString());

    calculatorScreenOutPut = [];

    for (
      let i = 0;
      i < tempVariable.length;
      i++ // Loops through result and pushes the values onto Calculator screen output
    ) {
      calculatorScreenOutPut.push(tempVariable[i]);
    }
    if (buttonClicked !== "=") calculatorScreenOutPut.push(buttonClicked);
    // numbersOperated.textContent = calculatorScreenOutPut.join(""); // Output to calculator screen

    // numberOne = [];
    indexOfOperator = "";
    numberTwo = "";
    operatorSelected = "";

    result = "";
  }

  /* Trying to set it up so multiple operations can be stringed together without messing it up*/
}

// Clear the whole calculator

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", (e) => clear(e));

function clear(e) {
  if (e.target.classList.contains("clear")) {
    outputResult.textContent = "0";
    numbersOperated.textContent = "";
    calculatorScreenOutPut = [];
    storeOperation = "";
    numberOne = ""; // Variables for the calculator
    numberTwo = "";
    indexOfOperator = "";
    operatorSelected = "";
    result = "";
  }
}

/*Function to delete a part of the operation without deleting the whole thing*/
const deleteButton = document.querySelector(".delete");

deleteButton.addEventListener("click", (e) => deleteANumber(e));
