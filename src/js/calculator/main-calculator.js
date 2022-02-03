import { calculateValue } from "./calculate-value";
import { reset } from "./reset-values";
import { setInitialAppState } from "../app-state/app-state";
import { availableVatOption } from "../summary-window/calculate-Vat";
import { availableIncomeTaxOption } from "../summary-window/calculate-income-tax"
import { addOption } from '../html-operation/adding-select-option';
import { availableNewItemVatOption } from "../items-list/calculate-new-item-value";
import{ calculateIncomeTax } from "../summary-window/calculate-income-tax";
import { displayHTMLVat, displayHTMLIncomeTax, displayHTMLIncome } from "../summary-window/display-html-summary";


const calculateButton = document.querySelector(".calculateButton");
const resetButton = document.querySelector(".resetButton");

const calculate = () => {
    let writtenValue = document.querySelector("#writtenValue").value;
    let choosedRadioButton = document.querySelector('input[name="radioButton"]:checked').value;
    let resultValue = calculateValue(writtenValue, choosedRadioButton);
}

window.addEventListener('load', () => {
    const vatOptions = availableVatOption;
    addOption(vatOptions);

    const incomeTaxOption = availableIncomeTaxOption;
    addOption(incomeTaxOption);

    const newItemVatOption = availableNewItemVatOption;
    addOption(newItemVatOption);

    setInitialAppState();
    // setInputValues();
    // 1. getAppState from storage
    // 2. Find all required button/inputs
    // 3. Set buttons/inputs state based on app state from storage

    // calculateResults();
    // 1. calculate summary based on data from storage
    // - app state
    // - table data
});

calculateButton.addEventListener('click', () => {
    calculate();
    displayHTMLVat();
    displayHTMLIncomeTax();
    displayHTMLIncome();
});
resetButton.addEventListener('click', () => {
    reset();
});
