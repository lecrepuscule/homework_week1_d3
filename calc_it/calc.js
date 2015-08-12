
alert("This is a calculator, it will ask you for a number, an operator, and another number, in that order, then perform the arithmetic operation on those two numbers. Click 'OK' to start.");

var firstNum;
var secondNum;
var operator;


function getValidNumber () {
  var userInput = prompt("Choose the first number.");
  while ( isNaN(Number(userInput)) ) {
    userInput = prompt("Please enter a number.");
  }
  return Number(userInput);
}

firstNum = getValidNumber();

// var operator = prompt("Please choose '+' for addition, '-' for subtraction")

// var validOperator = 

// var op = prompt('choose an operation');
// console.log('op', op)

// var num = prompt('choose a number');
// console.log('num', num)

// alert('Why is your console not open?');