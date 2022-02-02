import {
    displayBasicInsurance,
    clearBasicInsurance,
    addSicknessInsurance,
    deleteSicknessInsurance,
    clearTotalValue,
    displayHTMLVat
} from "./display-html-summary";
import {returnButtonValue, calculateZus} from "./calculate-zus";
import { saveData, storageKeys } from '../local-storage-operations/store-data';
import { getAppState, setAppState } from "../app-state/app-state";
import { calculateVat } from "./calculate-Vat";
import {calculateIncomeTax} from "./calculate-income-tax";

const zusButtons = document.querySelectorAll(".zusType");
const sicknessButton = document.querySelector(".sicknessState");
const vatSelector = document.querySelector(".vatTax");

sicknessButton.addEventListener("click",() => {
        const {
            healthCareContribution,
            zusStatus: currentZusType
        } = getAppState();

        const valuesToDisplay = calculateZus(currentZusType);
        if (getAppState().healthCareContribution) {
            addSicknessInsurance(valuesToDisplay);
            setAppState({
                healthCareContribution: !healthCareContribution,
            });
        } else {
            deleteSicknessInsurance(valuesToDisplay);
            setAppState({
                healthCareContribution: !healthCareContribution,
            });
        }
    }
);

zusButtons.forEach((input) => {
    let active = false;
    input.addEventListener('click', () => {
        const key = returnButtonValue(input);
        const valuesToDisplay = calculateZus(key);
        if (!active) {
            active = !active;
            setAppState({
                zusStatus: key,
            });
            saveData(valuesToDisplay,storageKeys.appZusContributions);
            displayBasicInsurance(valuesToDisplay);
        } else {
            input.checked = false;
            active = !active;
            setAppState({
                zusStatus: "",
            });
            saveData("",storageKeys.appZusContributions);
            clearBasicInsurance();
            clearTotalValue();
        }
    });
})