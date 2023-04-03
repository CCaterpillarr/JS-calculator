let operandNumber = 1;
let symbolNumber = 0;
let firstOperand = "0";
let operator = "";
let secondOperand = "";
let clickedSymbol = "";

function showOnDisplay(){
    displayText.textContent= firstOperand + operator + secondOperand;
}

function numberIsClicked(clickedSymbol){
    if (operandNumber === 1 && symbolNumber === 0){
        firstOperand = clickedSymbol; // Replace current symbol with the number clicked (as a string)
        showOnDisplay();
        symbolNumber++;
    } else {  
        firstOperand = firstOperand + clickedSymbol; // Add the number as a string to the current operator
        showOnDisplay();
        symbolNumber++;
    }
} 

function operatorIsClicked(clickedSymbol){
    if (operandNumber === 2){
        // Does nothing
    } else {
        switch (clickedSymbol){
            case ("sqrt"):
                break;
            case ("^"):
                break;
            case ("x"):
                break;
            case ("/"):
                break;
            case ("-"):
                break;
            case ("+"):
                break;
            default:
                break;
        }
    }

}

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
zero.addEventListener('click', function() {
    clickedSymbol = "0";
    numberIsClicked(clickedSymbol);
  });
let one = document.querySelector("#one");
one.addEventListener('click', function() {
    clickedSymbol = "1";
    numberIsClicked(clickedSymbol);
  });
let two = document.querySelector("#two");
two.addEventListener('click', function() {
    clickedSymbol = "2";
    numberIsClicked(clickedSymbol);
  });
let three = document.querySelector("#three");
three.addEventListener('click', function() {
    clickedSymbol = "3";
    numberIsClicked(clickedSymbol);
  });
let four = document.querySelector("#four");
four.addEventListener('click', function() {
    clickedSymbol = "4";
    numberIsClicked(clickedSymbol);
  });
let five = document.querySelector("#five");
five.addEventListener('click', function() {
    clickedSymbol = "5";
    numberIsClicked(clickedSymbol);
  });
let six = document.querySelector("#six");
six.addEventListener('click', function() {
    clickedSymbol = "6";
    numberIsClicked(clickedSymbol);
  });
let seven = document.querySelector("#seven");
seven.addEventListener('click', function() {
    clickedSymbol = "7";
    numberIsClicked(clickedSymbol);
  });
let eight = document.querySelector("#eight");
eight.addEventListener('click', function() {
    clickedSymbol = "8";
    numberIsClicked(clickedSymbol);
  });
let nine = document.querySelector("#nine");
nine.addEventListener('click', function() {
    clickedSymbol = "9";
    numberIsClicked(clickedSymbol);
  });


let percentageButton = document.querySelector("#percent");
percentageButton.addEventListener('click', function() {
    clickedSymbol = "%";
    operatorIsClicked(clickedSymbol);
})

// let percentageButton = document.querySelector("#percent");
// percentageButton.addEventListener('click', function() {
//     clickedSymbol = "%";
//     percentageIsClicked(clickedSymbol);
// })

 let addButton = document.querySelector("#add");
 addButton.addEventListener('click', function() {
     clickedSymbol = "+";
     operatorIsClicked(clickedSymbol);
 })