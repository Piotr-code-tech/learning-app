import { ZUS_TYPE } from "../summary-window/calculate-zus";
import { getData, saveData } from "../local-storage-operations/store-data";

const APP_STATE_KEY = 'APP_STATE';

export const appState = {
    vat: '0.23',
    taxationType: '1',
    zusStatus: ZUS_TYPE.RELIEF_TO_START,
    healthCareContribution: false,
}

export const setInitialAppState = () => {
    const storedAppState = getData(APP_STATE_KEY);
    const state = storedAppState ?? appState;

    saveData(state, APP_STATE_KEY);
}

export const setAppState = (partialState) => {
    const currentState = getData(APP_STATE_KEY);

    saveData({...currentState, ...partialState}, APP_STATE_KEY);
}

export const getAppState = () => {
    return getData(APP_STATE_KEY);
}