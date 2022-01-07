import { closeWindow, openWindow } from "./open-close-modal";
import { getNewItemValues, writeElementToTable, loadTable } from "./add-item";
import {getValueToCalculate, calculateNewItem, getCheckedInput, displayNewValue, disableElement} from "./calculate-new-item-value";
import { summarizeNetGrossValue, writeSummaryIntoTable} from "./summary-row";

const openWindowToAddItem = document.querySelector(".openWindowButton");
const closeWindowToAddItem = document.querySelector(".exitButton");
const addElement = document.querySelector(".confirmButton");
const writtenValueToCalculate = document.querySelectorAll('input[name="writtenNewValue"]');
const disableInputToWrite = document.querySelectorAll('input[name="checkValue"]');

const addNewItemEvent = () => {
    writeElementToTable(getNewItemValues());
}

const calculateNewValue = () => {
    let newValueItem = calculateNewItem(getValueToCalculate(), getCheckedInput());
    displayNewValue(newValueItem, getCheckedInput());
}

const disablePlaceToWrite = () => {
    disableElement(getCheckedInput());
}

openWindowToAddItem.addEventListener('click', openWindow);
closeWindowToAddItem.addEventListener('click', closeWindow);
addElement.addEventListener('click', addNewItemEvent);

writtenValueToCalculate.forEach((input) => {
    input.addEventListener('input', calculateNewValue);
});

disableInputToWrite.forEach((input) => {
input.addEventListener('input', disablePlaceToWrite);
});

window.addEventListener('load', () => {
    loadTable();
});