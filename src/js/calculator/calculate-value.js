import { saveData,  storageKeys} from '../local-storage-operations/store-data';
import { getVatValue } from '../summary-window/calculate-Vat';
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
            returnValue = calculateNetValue(writtenValue, getVatValue());
            const valuesToSave = {
                writtenIntoPlace: writtenValue ?? 0,
                net: writtenValue ?? 0,
                gross: returnValue ?? 0,
            }
            saveData(valuesToSave,storageKeys.appEarnedValue);
        }
        else if (choseRadioButton === document.querySelector('input[id="netRadioButton"]').value) {
            returnValue = calculateGrossValue(writtenValue, getVatValue());
            const valuesToSave = {
                writtenIntoPlace: writtenValue ?? 0,
                net: returnValue ?? 0,
                gross: writtenValue ?? 0,
            }
            saveData(valuesToSave,storageKeys.appEarnedValue);
        }
    }
}