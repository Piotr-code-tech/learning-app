import { calculateValue } from "./calculate-value";
import { displayResult } from "./display-result";
import { reset } from "./reset-values";
import { } from "../summary-window/displayHTML-summary";

const calculateButton = document.querySelector(".calculateButton");
const resetButton = document.querySelector(".resetButton");

const calculate = () => {
    let writtenValue = document.querySelector("#writtenValue").value;
    let choosedRadioButton = document.querySelector('input[name="radioButton"]:checked').value;
    let resultValue = calculateValue(writtenValue, choosedRadioButton);
    displayResult();

}

calculateButton.addEventListener('click', calculate);
resetButton.addEventListener('click', () => {
    reset();

});

window.addEventListener('load', () => {
    displayResult();

});

