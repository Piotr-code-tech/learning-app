import { ZUS_TYPE } from "../summary-window/calculate-ZUS";
import { getData, saveData, storageKeys} from "../local-storage-operations/store-data";

export const initialAppState = {
    vat: '0.23',
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