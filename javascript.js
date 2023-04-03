let operandNumber = 1;
let symbolNumber = 0;
let firstOperand = "0";
let operator = "";
let secondOperand = "";
let clickedSymbol = "";

function showOnDisplay(){
    if (symbolNumber <= 8){ // All following presses still count for the final calculation, just doesn't display them past 8 to not go out of bounds
        displayText.textContent= firstOperand + operator + secondOperand;
    }
}

function numberIsClicked(clickedSymbol){
    if (operandNumber === 1){
        if (symbolNumber === 0){
            firstOperand = clickedSymbol; // Replace current symbol with the number clicked (as a string)
            symbolNumber++;
            showOnDisplay();
        } else {  
            firstOperand = firstOperand + clickedSymbol; // Add the number as a string to the current operator
            symbolNumber++;
            showOnDisplay();
        }
    } else {
        secondOperand = secondOperand + clickedSymbol;
        symbolNumber++;
        showOnDisplay();
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
        symbolNumber++;
        showOnDisplay();
    }

}

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

function calculate(){
    if (secondOperand !== "" || operator === "sqrt"){
        let result = 0;
        switch (operator){
            case ("sqrt"):
                break;
            case ("^"):
                console.log("pow");
                break;
            case ("*"):
                result = +firstOperand * +secondOperand;
                console.log(2 * 2);
                break;
            case ("/"):
                result = +firstOperand / +secondOperand;
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
        reset(result);
    }
}
function reset(result){
    operandNumber = 1;
    symbolNumber = result.toString().length;
    firstOperand = result.toString();
    operator = "";
    secondOperand = "";
    clickedSymbol = "";
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


// let percentageButton = document.querySelector("#percent");
// percentageButton.addEventListener('click', function() {
//     clickedSymbol = "%";
//     percentageIsClicked(clickedSymbol);
// })



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


 // Refreshes the page when clear button is clicked
 let clearButton = document.querySelector("#c");
 clearButton.addEventListener("click", function() {
        location.reload(true);
    });

let resultButton = document.querySelector("#equals");
resultButton.addEventListener("click", calculate);