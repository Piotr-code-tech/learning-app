import { calculateValue } from "./calculate-value";
import { reset } from "./reset-values";
import { setInitialAppState, setAppState, getAppState, setInputState } from "../app-state/app-state";
import { availableVatOption } from "../summary-window/calculate-Vat";
import { availableIncomeTaxOption } from "../summary-window/calculate-income-tax"
import { addOption } from '../html-operation/adding-select-option';
import { availableNewItemVatOption } from "../items-list/calculate-new-item-value";
import{ calculateIncomeTax } from "../summary-window/calculate-income-tax";
import { displayHTMLVat, displayHTMLIncomeTax, displayHTMLIncome, displayHTMLAmountTax, displayBasicInsurance } from "../summary-window/display-html-summary";
import { displayHealthyContribution } from"../summary-window/summary-main";
import { storageKeys, getData } from "../local-storage-operations/store-data";
import { updateChart, displayChart } from "../chart/chart";

const calculateButton = document.querySelector(".calculateButton");
const resetButton = document.querySelector(".resetButton");

const calculate = () => {
    let writtenValue = document.querySelector("#writtenValue").value;
    setAppState({
        income: writtenValue,
    });
    let choosedRadioButton = document.querySelector('input[name="radioButton"]:checked').value;
    setAppState({
        netGrossRadioButton: choosedRadioButton,
    });
    let resultValue = calculateValue(writtenValue, choosedRadioButton);
    updateChart();
}

window.addEventListener('load', () => {
    const vatOptions = availableVatOption;
    addOption(vatOptions);

    const incomeTaxOption = availableIncomeTaxOption;
    addOption(incomeTaxOption);

    const newItemVatOption = availableNewItemVatOption;
    addOption(newItemVatOption);

    setInitialAppState();
    const appStateFromLocalStorage = getAppState();

    setInputState(appStateFromLocalStorage);
    calculate();
    displayHTMLVat();
    displayHTMLIncomeTax();
    displayHTMLIncome();
    displayHTMLAmountTax();
    const basicInsurance = getData(storageKeys.appZusContributions);
    if(basicInsurance){
        displayBasicInsurance(basicInsurance);
        displayHealthyContribution();
    }
    updateChart();
});

calculateButton.addEventListener('click', () => {
    calculate();
    displayHTMLVat();
    displayHTMLIncomeTax();
    displayHTMLIncome();
    displayHTMLAmountTax();
});
resetButton.addEventListener('click', () => {
    reset();
});
