
alert("This is a calculator, it will ask you for a number, an operator, and another number, in that order, then perform the arithmetic operation on those two numbers. Click 'OK' to start.");

var firstUserInput = prompt("Choose the first number.");
var firstNum;

while ( isNaN(Number(firstUserInput)) ) {
  firstUserInput = prompt("Please enter a number.");
}

firstNum = Number(firstUserInput);


// var operator = prompt("Please choose '+' for addition, '-' for subtraction")

// var validOperator = 

// var op = prompt('choose an operation');
// console.log('op', op)

// var num = prompt('choose a number');
// console.log('num', num)

// alert('Why is your console not open?');