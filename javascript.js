let operandNumber = 1;
let displayedSymbols = 0;
let onFirstSymbol = true;
let firstOperand = "0";
let operator = "";
let secondOperand = "";
let clickedSymbol = "";
let percentageOnOperand = 0;
let dotOnOperand = 0;

function showOnDisplay(){
    if (displayedSymbols <= 9){ // All following presses still count for the final calculation, just doesn't display them past 8 to not go out of bounds
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
    if (operandNumber === 1){
        if (onFirstSymbol === true){
            firstOperand = clickedSymbol; // Replace current symbol with the number clicked (as a string)
            displayedSymbols++;
            onFirstSymbol = false;
            showOnDisplay();
        } else {  
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
        onFirstSymbol = true;
        showOnDisplay();
    }

}

function percentageIsClicked(clickedSymbol){
    if (percentageOnOperand === 0){
        displayedSymbols++;
        percentageOnOperand = operandNumber;
        showOnDisplay();
    }
}

function dotIsClicked(clickedSymbol){
    if (onFirstSymbol === false && dotOnOperand !== operandNumber){
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
    if (secondOperand !== "" || operator === "√"){
        let result = 0;
        if (percentageOnOperand !== 0) {
            if (operator === "*"){
                if (percentageOnOperand === 2){
                    result = (+firstOperand / 100) * +secondOperand;
                } else {
                    result = (+secondOperand / 100) * +firstOperand;
                }
            } else {
                result = NaN;
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
                        result = NaN;
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
    console.log(result.toString());
    operandNumber = 1;
    displayedSymbols = result.toString().length;
    onFirstSymbol = true;
    firstOperand = result.toString();
    operator = "";
    secondOperand = "";
    clickedSymbol = "";
    percentageOnOperand = 0;
    showOnDisplay();
}


const displayText = document.querySelector("#displayText");
displayText.textContent = "0";

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) =>
  button.addEventListener('click', function() {
    clickedSymbol = button.textContent;
    numberIsClicked(clickedSymbol);
  }));

  const operatorButtons = document.querySelectorAll(".operator");
  operatorButtons.forEach((button) =>
  button.addEventListener('click', function() {
    clickedSymbol = button.textContent;
    operatorIsClicked(clickedSymbol);
  }));


//-------------------

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

 //-------------------------

 const clearButton = document.querySelector("#c");
 clearButton.addEventListener("click", function() {
        location.reload(true);  // Refreshes the page when clear button is clicked
    });

const resultButton = document.querySelector("#equals");
resultButton.addEventListener("click", calculate);