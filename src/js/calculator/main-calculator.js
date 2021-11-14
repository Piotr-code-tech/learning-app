import { calculateValue } from "./calculate-value";
import { displayResult } from "./display-result";
import { reset } from "./reset-values";

const calculateButton = document.querySelector(".calculateButton");
const resetButton = document.querySelector(".resetButton");

const calculate = () => {
    let writtenValue = Number(document.querySelector("#writtenValue").value);
    let chosenRadioButton = document.querySelector('input[name="radioButton"]:checked').value;
    let resultValue = calculateValue(writtenValue, chosenRadioButton);
    displayResult(resultValue, writtenValue, chosenRadioButton);
}

calculateButton.addEventListener('click', calculate);
resetButton.addEventListener('click', reset);

