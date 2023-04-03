let operandNumber = 1;
let operandSymbolNumber = 1;
let firstOperand = "0";
let operator = "";
let secondOperand = "";
let clickedNumber = "";

function showOnDisplay(){
    displayText.textContent= firstOperand + operator + secondOperand;
}

// 0123456789 clicked:
function numberIsClicked(clickedNumber){
    // IF on first operand AND on first symbol:
    if (operandNumber === 1 && operandSymbolNumber === 1){
        firstOperand = clickedNumber;
        showOnDisplay();
        operandSymbolNumber++;
    } else {
        firstOperand = firstOperand + clickedNumber;
        showOnDisplay();
        operandSymbolNumber++;
    }
} 


//  -replace current symbol with the number clicked (as a string)
// ELSE:
//  -add the number as a string to the current operator

// operator clicked:
// IF on second operand:
//  -do nothing
// ELSE:
//  -convert first operator to a number and store it as an object property
//  -store the function tied to the given operator as an object property
//  -switch to second operator

// % clicked:
// add "%" to the string
// -block adding .0123456789 to the current operand
// [block incompatible things like + 20%]

// . clicked:
// IF on first operand AND on first symbol:
//  -do nothing
// ELSE:
//  -add "." to the string
//  -block adding . again to the current operand

// = clicked:
// IF second operand empty
//  -do nothing
// ELSE:
//  -convert second operator to a number and store it as an object property
//  -calculate the given operands and operator (stored as object properties)
//  -return to first operand
//  -set first operand to the result(converted to a string)
//  -set second operand to an empty string

// C clicked:
// -delete second operand
// -return to first operand
// -set first operand to 0

// length limit

let display = document.querySelector(".display");
let displayText = document.querySelector("#displayText");
displayText.textContent = "0";

//[more efficient way of getting every button in a loop]

let zero = document.querySelector("#zero");
zero.addEventListener('click', function(number) {
    clickedNumber = "0";
    numberIsClicked(clickedNumber);
  });
let one = document.querySelector("#one");
one.addEventListener('click', function(number) {
    clickedNumber = "1";
    numberIsClicked(clickedNumber);
  });
let two = document.querySelector("#two");
two.addEventListener('click', function(number) {
    clickedNumber = "2";
    numberIsClicked(clickedNumber);
  });
let three = document.querySelector("#three");
three.addEventListener('click', function(number) {
    clickedNumber = "3";
    numberIsClicked(clickedNumber);
  });
let four = document.querySelector("#four");
four.addEventListener('click', function(number) {
    clickedNumber = "4";
    numberIsClicked(clickedNumber);
  });
let five = document.querySelector("#five");
five.addEventListener('click', function(number) {
    clickedNumber = "5";
    numberIsClicked(clickedNumber);
  });
let six = document.querySelector("#six");
six.addEventListener('click', function(number) {
    clickedNumber = "6";
    numberIsClicked(clickedNumber);
  });
let seven = document.querySelector("#seven");
seven.addEventListener('click', function(number) {
    clickedNumber = "7";
    numberIsClicked(clickedNumber);
  });
let eight = document.querySelector("#eight");
eight.addEventListener('click', function(number) {
    clickedNumber = "8";
    numberIsClicked(clickedNumber);
  });
let nine = document.querySelector("#nine");
nine.addEventListener('click', function(number) {
    clickedNumber = "9";
    numberIsClicked(clickedNumber);
  });