import { saveIncome } from "./store-income";

const taxValue = 0.23;

export const calculateNetValue = (value,tax) => {
    let calculatedValue = 0;
    calculatedValue = value * (1 + tax);
    return calculatedValue;
}

export const calculateGrossValue = (value,tax) => {
    let calculatedValue = 0;
    calculatedValue = value * (1 - tax);
    return calculatedValue;
}

export const calculateValue = (writtenValue, choseRadioButton) => {
    let returnValue = 0;
    if(writtenValue){
        if (choseRadioButton === document.querySelector('input[id="grossRadioButton"]').value) {
            returnValue = calculateNetValue(writtenValue, taxValue);
            const valuesToSave = {
                writtenIntoPlace: writtenValue ?? 0,
                net: writtenValue ?? 0,
                gross: returnValue ?? 0,
            }
            saveIncome(valuesToSave);
        }
        else if (choseRadioButton === document.querySelector('input[id="netRadioButton"]').value) {
            returnValue = calculateGrossValue(writtenValue, taxValue);
            const valuesToSave = {
                writtenIntoPlace: writtenValue,
                net: returnValue,
                gross: writtenValue,
            }
            saveIncome(valuesToSave);
        }
    }
}