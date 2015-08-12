
var validCalculatorTypes = ["Arithmetics", "Morgage"];
var calculatorType;

////variable declarations for Arithmetic calculations////////////
var firstNum;
var secondNum;
var operator;
var result;
var validOperators = ["+", "-" , "*", "/", "power", "sqrt"];
/////////////////////////////////////////////////////////////////

/////variable declarations for Morgage calculations///////////////
var principle;
var interestRate;
var repayments;
//////////////////////////////////////////////////////////////////

function getCalculatorType (userInput) {
  while (validCalculatorTypes.indexOf(userInput) === -1)
  {
    userInput = prompt("Please choose from " + validCalculatorTypes + "!");
  }
  return userInput;
}

function getInput (inputName) {
  var userInput = prompt("Choose enter the " + inputName);
  return userInput;
}


// function runMorgageCalculator () {

// }


function getValidInput (inputType) {
  var userInput
  switch (inputType) {
    case "number":
    userInput = getInput("number");
    while ( isNaN(Number(userInput)) ) {
      userInput = prompt("Please enter an actual number!");
    }
    return Number(userInput);
    break;

    case "operator":
    userInput = getInput("operator");
    while (validOperators.indexOf(userInput) === -1 ) {
      userInput = prompt("Please enter a valid operator!")
    }
    return userInput;
    break;

    default:
    console.log("getValidNumber has invalid arguments!");
  }
}

function doBasicMath (operator, firstNum, secondNum) {
  switch (operator) {
    case "+":
    return (firstNum + secondNum);
    break;

    case "-":
    return (firstNum - secondNum);
    break;

    case "*":
    return (firstNum * secondNum);
    break;

    case "/":
    return (firstNum / secondNum);
    break;

    case "power":
    return Math.pow(firstNum, secondNum);
    break;

    case "sqrt":
    return Math.sqrt(firstNum, secondNum);
    break;

    default:
    console.log("doBasicMath has invalid arguments!");
  }
}

function runBasicCalculator () {

  alert("This is a calculator, it will ask you for a number, an operator, and another number, in that order, then perform the arithmetic operation on those two numbers. Click 'OK' to start.");

  firstNum = getValidInput("number");
  operator = getValidInput("operator");
  operator === "sqrt" ? secondNum = "" : secondNum = getValidInput("number"); 
  result = doBasicMath (operator, firstNum, secondNum);

  alert(firstNum + operator + secondNum + " = " + result);
}

runBasicCalculator();



// var operator = prompt("Please choose '+' for addition, '-' for subtraction")

// var validOperator = 

// var op = prompt('choose an operation');
// console.log('op', op)

// var num = prompt('choose a number');
// console.log('num', num)

// alert('Why is your console not open?');