
alert("This is a calculator, it will ask you for a number, an operator, and another number, in that order, then perform the arithmetic operation on those two numbers. Click 'OK' to start.");

var firstNum = prompt('Choose the first number.');

while ( isNaN(Number(firstNum)) ) {
  firstNum = prompt('Please enter a number.');
}


// var op = prompt('choose an operation');
// console.log('op', op)

// var num = prompt('choose a number');
// console.log('num', num)

// alert('Why is your console not open?');