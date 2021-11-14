import { closeWindow, openWindow } from "./open-close-modal";
import { getNewItemValues, writeElementToTable } from "./add-item";

const openWindowToAddItem = document.querySelector(".openWindowButton");
const closeWindowToAddItem = document.querySelector(".exitButton");
const addElement = document.querySelector(".confirmButton");

const addNewItemEvent = () => {
    writeElementToTable(getNewItemValues());
}

openWindowToAddItem.addEventListener('click', openWindow);
closeWindowToAddItem.addEventListener('click', closeWindow);
addElement.addEventListener('click', addNewItemEvent);