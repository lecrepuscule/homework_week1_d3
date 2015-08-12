
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
var principal;
var interestRate;
var numberOfPayments;
var monthlyPayment;
//////////////////////////////////////////////////////////////////

function runCalculator () {
  alert("This is a calculator with multiple features, please choose from " + validCalculatorTypes + ".");
  var calculatorType = getInput("Calculator Type");
  var validCalculatorType = getCalculatorType(calculatorType);

  switch (validCalculatorType) {
    case "Arithmetics":
    runArithmeticCalculator();
    break;
    case "Morgage":
    runMorgageCalculator();
    break;
  }
}

runCalculator();

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

function doMorgageCalculation (p, ir, n) {
  var m = p * ir * Math.pow( ( 1 + ir ), n )/( Math.pow( 1 + ir, n ) - 1);
  return m;
}

function runMorgageCalculator () {
  principal = getValidInput("number", "Principal");
  interestRate = getValidInput("number", "Monthly Insterest Rate");
  numberOfPayments = getValidInput("number", "Total Number of Payments");
  monthlyPayment = doMorgageCalculation (principal, interestRate, numberOfPayments);
  alert("The monthly payment is " + monthlyPayment);
}

function getValidInput (inputType, inputName) {
  var userInput
  switch (inputType) {
    case "number":
    userInput = getInput(inputName);
    while ( isNaN(Number(userInput)) ) {
      userInput = prompt("Please enter an actual number!");
    }
    return Number(userInput);
    break;

    case "operator":
    userInput = getInput(inputName);
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

function runArithmeticCalculator () {

  alert("This is an Arithmetic calculator, it will ask you for a number, an operator, and another number, in that order, then perform the arithmetic operation on those two numbers. Click 'OK' to start.");

  firstNum = getValidInput("number", "first number");
  operator = getValidInput("operator", "operator");
  operator === "sqrt" ? secondNum = "" : secondNum = getValidInput("number", "second number"); 
  result = doBasicMath (operator, firstNum, secondNum);

  alert(firstNum + operator + secondNum + " = " + result);
}





// var operator = prompt("Please choose '+' for addition, '-' for subtraction")

// var validOperator = 

// var op = prompt('choose an operation');
// console.log('op', op)

// var num = prompt('choose a number');
// console.log('num', num)

// alert('Why is your console not open?');