import { saveData } from '../local-storage-operations/store-data';

const getTaxValue = () => {
    const taxValue = Number(document.querySelector(".vatTax").value);
    return taxValue;
}

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
            returnValue = calculateNetValue(writtenValue, getTaxValue());
            const valuesToSave = {
                writtenIntoPlace: writtenValue ?? 0,
                net: writtenValue ?? 0,
                gross: returnValue ?? 0,
            }
            saveData(valuesToSave,"app_earnedValue_data");
        }
        else if (choseRadioButton === document.querySelector('input[id="netRadioButton"]').value) {
            returnValue = calculateGrossValue(writtenValue, getTaxValue());
            const valuesToSave = {
                writtenIntoPlace: writtenValue ?? 0,
                net: returnValue ?? 0,
                gross: writtenValue ?? 0,
            }
            saveData(valuesToSave,"app_earnedValue_data");
        }
    }
}