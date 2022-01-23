import { calculateValue } from "./calculate-value";
import { displayResult } from "./display-result";
import { reset } from "./reset-values";
import { setInitialAppState } from "../app-state/app-state";

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
    setInitialAppState();
    // setInputValues();
    // 1. getAppState from storage
    // 2. Find all required button/inputs
    // 3. Set buttons/inputs state based on app state from storage

    // calculateResults();
    // 1. calculate summary based on data from storage
    // - app state
    // - table data

    displayResult();
});

