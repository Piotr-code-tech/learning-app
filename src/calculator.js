//--------------------Global Variables--------------------
const calculateButton = document.querySelector(".calculateButton");
const resetButton = document.querySelector(".resetButton");
const taxValue = 0.23;

//--------------------Functions to calculations features--------------------
const calculateValue = (writtenValue, choosedRadioButton) => {
    let calculatedValue = 0;
    if (choosedRadioButton === document.querySelector('input[id="grossRadioButton"]').value) {
        calculatedValue = writtenValue * (1 + taxValue);
    }
    else if (choosedRadioButton === document.querySelector('input[id="netRadioButton"]').value) {
         calculatedValue = writtenValue * (1 - taxValue);
    }
    return calculatedValue;
 }

const displayResult = (resultValue, writtenValue, choosedRadioButton) => {
   if (choosedRadioButton === document.querySelector('input[id="grossRadioButton"]').value) {
        document.querySelector(".grossValue").innerHTML = resultValue;
        document.querySelector(".netValue").innerHTML = writtenValue;
   }
   else if (choosedRadioButton === document.querySelector('input[id="netRadioButton"]').value) {
        document.querySelector(".netValue").innerHTML = resultValue;
        document.querySelector(".grossValue").innerHTML = writtenValue;
   }
}

//--------------------Functions to reset features--------------------
 const reset = () => {
    document.querySelector("#grossRadioButton").checked = false;
    document.querySelector("#netRadioButton").checked = false;
    document.querySelector(".grossValue").innerHTML = "";
    document.querySelector(".netValue").innerHTML = "";
    document.querySelector("#writtenValue").value = "";
 }
//--------------------Events from event listeners--------------------
const calculateEvent = () => {
let writtenValue = Number(document.querySelector("#writtenValue").value);
let choosedRadioButton = document.querySelector('input[name="radioButton"]:checked').value;
let resultValue = calculateValue(writtenValue, choosedRadioButton);
displayResult(resultValue, writtenValue, choosedRadioButton);
}

const resetEvent = () => {
    reset();
}

//--------------------Event listeners--------------------
calculateButton.addEventListener('click', calculateEvent);
resetButton.addEventListener('click', resetEvent);