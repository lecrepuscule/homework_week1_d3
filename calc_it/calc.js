
var validFeatures = ["Arithmetics", "Morgage", "BMI", "Trip"];
var feature;

////variables for Arithmetic calculations////////////
var firstNum;
var secondNum;
var operator;
var result;
var validOperators = ["+", "-" , "*", "/", "power", "sqrt"];
/////////////////////////////////////////////////////////////////

/////variables for Morgage calculations///////////////
var principal;
var interestRate;
var numberOfPayments;
var monthlyPayment;
//////////////////////////////////////////////////////////////////

/////variables for BMI calculations//////////////////////////
var validMeasurements = ["Imperial", "Metric"];
var weight;
var height;
var BMI;
/////////////////////////////////////////////////////////


//main flows section

//Add backout and other navigation options if time permits
function runCalculator () {
  alert("This is a calculator with multiple features, please choose from " + validFeatures + ".");
  var validFeature = getValidInput("feature", "Calculator Feature");

  switch (validFeature) {
    case "Arithmetics":
    runArithmeticCalculator();
    break;

    case "Morgage":
    runMorgageCalculator();
    break;

    case "BMI":
    runBMICalculator();
    break;

    case "Trip":
    runTripCalculatore();
    break;

    default:
    console.log("runCalculator does not have this feature!");
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

function runMorgageCalculator () {
  principal = getValidInput("number", "Principal");
  interestRate = getValidInput("number", "Monthly Insterest Rate");
  numberOfPayments = getValidInput("number", "Total Number of Payments");
  monthlyPayment = doMorgageCalculation (principal, interestRate, numberOfPayments);
  alert("The monthly payment is " + monthlyPayment);
}

function runBMICalculator() {
  var measurement = getValidInput("measurement", "Measurement System");
  weight = getValidInput("number", "weight in " + measurement + " measurement");
  height = getValidInput("number", "height in " + measurement + " measurement");
  BMI = doBMICalculation(weight, height, measurement);
  alert("The BMI is " + BMI);
}

//end of main flows section//



//calculation logics section//
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


// the logic should be better structured for readability when time permits
function doMorgageCalculation (p, ir, n) {
  var m = p * ir * Math.pow( ( 1 + ir ), n )/( Math.pow( 1 + ir, n ) - 1);
  return m;
}

function doBMICalculation(w, h, m) {
  BMI = w/Math.pow(h,2);
  (m === "Imperial") ? BMI = (BMI * 703) : BMI;
  return BMI;
}
//end calculation logics section//



//get input and constraints section//

//better and clearer wording for user choices should be implemented if time permits
function getInput (inputName) {
  var userInput = prompt("Choose enter the " + inputName);
  return userInput;
}

function getValidInput (inputType, inputName) {
  var userInput = getInput(inputName);
  switch (inputType) {
    case "number":
    while ( isNaN(Number(userInput)) ) {
      userInput = prompt("Please enter an actual number!");
    }
    return Number(userInput);
    break;

    case "operator":
    while (validOperators.indexOf(userInput) === -1 ) {
      userInput = prompt("Please enter a valid operator!")
    }
    return userInput;
    break;

    case "feature":
    while (validFeatures.indexOf(userInput) === -1) {
      userInput = prompt("Please choose from " + validFeatures + "!");
    }
    return userInput;
    break;

    case "measurement":
    while (validMeasurements.indexOf(userInput) === -1) {
      userInput = prompt("Please choose from " + validMeasurements + "!");
    }
    return userInput;
    break;

    default:
    console.log("getValidInput has invalid arguments!");
  }
}
//end of get inputs and constraints section//

runCalculator();


// var operator = prompt("Please choose '+' for addition, '-' for subtraction")

// var validOperator = 

// var op = prompt('choose an operation');
// console.log('op', op)

// var num = prompt('choose a number');
// console.log('num', num)

// alert('Why is your console not open?');