
alert("This is a calculator, it will ask you for a number, an operator, and another number, in that order, then perform the arithmetic operation on those two numbers. Click 'OK' to start.");

var firstNum;
var secondNum;
var operator;
var result;
var validOperators = ["+", "-" , "*", "/"];


function getValidInput (inputType) {
  var userInput
  switch (inputType) {
    case "number":
    userInput = prompt("Choose enter a number.");
    while ( isNaN(Number(userInput)) ) {
      userInput = prompt("Please enter a number!");
    }
    return Number(userInput);
    break;

    case "operator":
    userInput = prompt("Please enter an operator.");
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

    default:
    console.log("doBasicMath has invalid arguments!");
  }
}

firstNum = getValidInput("number");
operator = getValidInput("operator");
secondNum = getValidInput("number");
result = doBasicMath (operator, firstNum, secondNum);



alert(firstNum + operator + secondNum + " = " + result);

// var operator = prompt("Please choose '+' for addition, '-' for subtraction")

// var validOperator = 

// var op = prompt('choose an operation');
// console.log('op', op)

// var num = prompt('choose a number');
// console.log('num', num)

// alert('Why is your console not open?');