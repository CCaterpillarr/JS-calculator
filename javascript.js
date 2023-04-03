let firstOperand = "0";  // Zero by default
let operator = "";
let secondOperand = "";

let displayedSymbols = 0;
let onFirstSymbol = true;  // First symbol of first or second operand
let clickedSymbol = "";
let operandNumber = 1;
let percentageOnOperand = 0;  // Which operand a percentage sign was used on
let dotOnOperand = 0;  // // Which operand(s) a dot sign was used on

function showOnDisplay(){
    if (displayedSymbols <= 9){ // All following presses still count for the final calculation, just doesn't display them past 9 to not go out of display bounds
        if (percentageOnOperand === 1){
            displayText.textContent= firstOperand + "%" + operator + secondOperand;
        } else if (percentageOnOperand === 2) {
            displayText.textContent= firstOperand + operator + secondOperand + "%";
        } else {
            displayText.textContent= firstOperand + operator + secondOperand;
        }
    }
}

function numberIsClicked(clickedSymbol){
    if (operandNumber === 1){  // Works on first operand
        if (onFirstSymbol === true){
            firstOperand = clickedSymbol; // Replace current symbol with the number clicked (as a string)
            displayedSymbols++;
            onFirstSymbol = false;
            showOnDisplay();
        } else {  // Works on second operand
            firstOperand = firstOperand + clickedSymbol; // Add the clicked number as a string to the current operator
            displayedSymbols++;
            showOnDisplay();
        }
    } else {
        secondOperand = secondOperand + clickedSymbol;
        displayedSymbols++;
        showOnDisplay();
        onFirstSymbol = false;
    }
} 

function operatorIsClicked(clickedSymbol){
    if (operandNumber === 2){
        // Does nothing
        showOnDisplay();
    } else if (clickedSymbol === "√") {
        operator = clickedSymbol;
        calculate();
    } else {
        operandNumber++;
        operator = clickedSymbol;
        displayedSymbols++;
        onFirstSymbol = true;  // Now on first symbol of the second operand
        showOnDisplay();
    }

}

function percentageIsClicked(clickedSymbol){
    if (percentageOnOperand === 0){  // Allows to add percentage sign only once
        displayedSymbols++;
        percentageOnOperand = operandNumber;
        showOnDisplay();
    }
}

function dotIsClicked(clickedSymbol){
    if (onFirstSymbol === false && dotOnOperand !== operandNumber){  // Blocks adding a dot if on first symbol of either operand or if given operand already has a dot added
        if (operandNumber === 1){
            firstOperand = firstOperand + clickedSymbol;
            displayedSymbols++;
            dotOnOperand = 1;
            showOnDisplay();
        } else if (operandNumber === 2) {
            secondOperand = secondOperand + clickedSymbol;
            displayedSymbols++;
            showOnDisplay();
            dotOnOperand = 2;
        }
    }
}


function calculate(){
    if (secondOperand !== "" || operator === "√"){  // Works only if 2 operands are entered or sqrt was clicked
        let result = 0;
        if (percentageOnOperand !== 0) {  // Does this if there was a percentage sign
            if (operator === "*"){  // Works only on multiplication
                if (percentageOnOperand === 2){
                    result = (+firstOperand / 100) * +secondOperand;
                } else {  // percentageOnOperand === 1
                    result = (+secondOperand / 100) * +firstOperand;
                }
            } else {
                result = NaN;  // Doesn't calculate things like 20 + 5%
            }
        } else {
            switch (operator){
                case ("√"):
                    result = Math.sqrt(+firstOperand);
                    break;
                case ("^"):
                    result = +firstOperand;
                    if (+secondOperand === 0){
                        result = 1;
                    } else {
                        for (let i = 1; i < +secondOperand; i++){
                            result = result * +firstOperand;
                        }
                    }
                    break;
                case ("*"):
                    result = +firstOperand * +secondOperand;
                    break;
                case ("/"):
                    if (+secondOperand === 0){
                        result = NaN;  // Can't divide by 0
                    } else {
                        result = +firstOperand / +secondOperand;
                    }
                    break;
                case ("-"):
                    result = +firstOperand - +secondOperand;
                    break;
                case ("+"):
                    result = +firstOperand + +secondOperand;
                    break;
                default:
                    break;
            }
        }
        reset(result);
    }
}
function reset(result){
    operandNumber = 1;
    displayedSymbols = result.toString().length;
    onFirstSymbol = true;
    operator = "";
    secondOperand = "";
    clickedSymbol = "";
    percentageOnOperand = 0;
    firstOperand = result.toString();  // Shows result by displaying firstOperand in showOnDisplay
    showOnDisplay();
}


const displayText = document.querySelector("#displayText");
displayText.textContent = "0";  // Shows 0 by default

// Gives EvenListeners for all number buttons and sets clickedSymbol to a given number when clicked  
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) =>
  button.addEventListener('click', function() {
    clickedSymbol = button.textContent;
    numberIsClicked(clickedSymbol);
  }));

// Gives EvenListeners for all operator buttons and sets clickedSymbol to a given operator when clicked  
  const operatorButtons = document.querySelectorAll(".operator");
  operatorButtons.forEach((button) =>
  button.addEventListener('click', function() {
    clickedSymbol = button.textContent;
    operatorIsClicked(clickedSymbol);
  }));
 
const percentageButton = document.querySelector("#percent");
percentageButton.addEventListener('click', function() {
    clickedSymbol = "%";
    percentageIsClicked(clickedSymbol);
})

const dotButton = document.querySelector("#dot");
dotButton.addEventListener('click', function() {
    clickedSymbol = ".";
    dotIsClicked(clickedSymbol);
})

 const clearButton = document.querySelector("#c");
 clearButton.addEventListener("click", function() {
        location.reload(true);  // Refreshes the page when clear button is clicked
    });

const resultButton = document.querySelector("#equals");
resultButton.addEventListener("click", calculate);