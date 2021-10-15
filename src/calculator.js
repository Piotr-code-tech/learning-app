//--------------------Global Variables--------------------
const calculateButton = document.querySelector(".calculateButton");
const resetButton = document.querySelector(".resetButton");
const taxValue = 0.23;
const openWindowToAddItem = document.querySelector(".openWindowButton");
const closeWindowToAddItem = document.querySelector(".exitButton");
const addElementToList = document.querySelector(".confirmButton");

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
//--------------------Function to open and close window to adding items to list-------------
const openWindow = () => {
    document.querySelector(".addWindow").style.display = "flex";
}

const closeWindow = () => {
    document.querySelector(".addWindow").style.display = "none";
}
//--------------------Function to add new items to list-------------
const getNewItemValues = () => {
    let nameValue = document.querySelector(".nameListElement").value;
    let categoryValue = document.querySelector(".categoryListElement").value;
    let netPriceValue = Number(document.querySelector(".netPriceListElement").value);
    let grossPriceValue = Number(document.querySelector(".grossPriceListElement").value);

    let elementListValue = {
        nameValue,
        categoryValue,
        netPriceValue,
        grossPriceValue
    }
    return elementListValue;
}
const writeElementToTable = (obj) => {
    let newRow = document.createElement("tr");
    let rowContent = obj;
    for(const property in rowContent){
        let newColumn = document.createElement("td");
        newColumn.innerHTML = rowContent[property];
        newRow.appendChild(newColumn);
    }

    let containerForButton = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteRowButton";
    deleteButton.innerHTML = "\u00D7";
    containerForButton.appendChild(deleteButton);
    newRow.appendChild(containerForButton);

    document.querySelector(".itemTable").appendChild(newRow);
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

const openWindowEvent = () => {
    openWindow();
}

const closeWindowEvent = () => {
    closeWindow();
}

const addNewItemEvent = () => {
    writeElementToTable(getNewItemValues());

}

//--------------------Event listeners--------------------
calculateButton.addEventListener('click', calculateEvent);
resetButton.addEventListener('click', resetEvent);
openWindowToAddItem.addEventListener('click', openWindowEvent);
closeWindowToAddItem.addEventListener('click', closeWindowEvent);
addElementToList.addEventListener('click', addNewItemEvent);