import { closeWindow, openWindow } from "./open-close-modal";
import { getNewItemValues, writeElementToTable } from "./add-item";
import {getValueToCalculate, calculateNewItem, getCheckedInput, displayNewValue, disableElement} from "./calculate-new-item-value";

var spendingListItem = {};
var spendingItemCounter = 0;

const openWindowToAddItem = document.querySelector(".openWindowButton");
const closeWindowToAddItem = document.querySelector(".exitButton");
const addElement = document.querySelector(".confirmButton");
const writtenValueToCalculate = document.querySelectorAll('input[name="writtenNewValue"]');
const disableInputToWrite = document.querySelectorAll('input[name="checkValue"]');

const addNewItemEvent = () => {
    writeElementToTable(getNewItemValues());
    spendingListItem[spendingItemCounter] = getNewItemValues();
    spendingItemCounter++;
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