import { ZUS_TYPE } from "../summary-window/calculate-ZUS";
import { getData, saveData, storageKeys} from "../local-storage-operations/store-data";

export const initialAppState = {
    income: 0,
    vat: '0.23',
    netGrossRadioButton: "gross",
    taxationType: 'LumpSum',
    zusStatus: ZUS_TYPE.RELIEF_TO_START,
    healthCareContribution: false,
}

export const setInitialAppState = () => {
    const storedAppState = getData(storageKeys.appState);
    const state = storedAppState ?? initialAppState;

    saveData(state, storageKeys.appState);
}

export const setAppState = (partialState) => {
    const currentState = getData(storageKeys.appState);

    saveData({...currentState, ...partialState}, storageKeys.appState);
}

export const getAppState = () => {
    return getData(storageKeys.appState);
}

export const setInputState = (appState) => {
    const {
        income,
        vat,
        netGrossRadioButton,
        taxationType,
        zusStatus,
        healthCareContribution
    } = appState;

    const placeToWriteIncome = document.querySelector(".writtenIncome");
    const vatOption = document.querySelector(".vatTax");
    const netGrossRadio = document.querySelectorAll('.radio');
    const incomeTaxOption = document.querySelector(".incomeTax");
    const zusButton = document.querySelectorAll(".zusType");
    let sicknessButton = document.querySelector(".sicknessState");

    placeToWriteIncome.value = income;
    vatOption.value = vat;


    netGrossRadio.forEach((radio) => {
        return radio.value == netGrossRadioButton ? radio.checked = true : null;
    });
    incomeTaxOption.value = taxationType;

    zusButton.forEach((radio) => {
        return radio.value == zusStatus ? radio.checked = true : null;
    });
    if(healthCareContribution){
        sicknessButton.checked = true;
    }
}