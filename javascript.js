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
    if (displayedSymbols <= 8){ // All following presses still count for the final calculation, just doesn't display them past 8 to not go out of bounds
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
    } else if (clickedSymbol === "sqrt") {
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
    if (secondOperand !== "" || operator === "sqrt"){
        let result = 0;
        if (percentageOnOperand !== 0) {
            if (operator === "*"){
                if (percentageOnOperand === 2){
                    result = (100 / +firstOperand) * +secondOperand;
                } else {
                    result = (100 / +secondOperand) * +firstOperand;
                }
            } else {
                result = NaN;
            }
        } else {
            switch (operator){
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
                case ("sqrt"):
                    break;
                case ("^"):
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
    percentageIsClicked(clickedSymbol);
})

let dotButton = document.querySelector("#dot");
dotButton.addEventListener('click', function() {
    clickedSymbol = ".";
    dotIsClicked(clickedSymbol);
})


let sqrtButton = document.querySelector("#sqrt");
sqrtButton.addEventListener('click', function() {
    clickedSymbol = "sqrt";
    operatorIsClicked(clickedSymbol);
})

let expButton = document.querySelector("#exp");
expButton.addEventListener('click', function() {
    clickedSymbol = "^";
    operatorIsClicked(clickedSymbol);
})

let multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener('click', function() {
    clickedSymbol = "*";
    operatorIsClicked(clickedSymbol);
})

let divideButton = document.querySelector("#divide");
divideButton.addEventListener('click', function() {
    clickedSymbol = "/";
    operatorIsClicked(clickedSymbol);
})

let subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener('click', function() {
    clickedSymbol = "-";
    operatorIsClicked(clickedSymbol);
})

 let addButton = document.querySelector("#add");
 addButton.addEventListener('click', function() {
     clickedSymbol = "+";
     operatorIsClicked(clickedSymbol);
 })

 let clearButton = document.querySelector("#c");
 clearButton.addEventListener("click", function() {
        location.reload(true);  // Refreshes the page when clear button is clicked
    });

let resultButton = document.querySelector("#equals");
resultButton.addEventListener("click", calculate);