import {
    displayBasicInsurance,
    clearBasicInsurance,
    addSicknessInsurance,
    deleteSicknessInsurance,
    clearTotalValue,
    displayHTMLVat
} from "./display-html-summary";
import {returnButtonValue, calculateZus} from "./calculate-zus";
import { getAppState, setAppState } from "../app-state/app-state";
import { calculateVat } from "./calculate-Vat";
import {calculateIncomeTax} from "./calculate-income-tax";

const zusButtons = document.querySelectorAll(".zusType");
const sicknessButton = document.querySelector(".sicknessState");
const calculateButton = document.querySelector(".calculateButton");
const vatSelector = document.querySelector(".vatTax");
const incomeTaxSelector = document.querySelector(".incomeTax");

sicknessButton.addEventListener("click",() => {
        const {
            healthCareContribution,
            zusStatus: currentZusType
        } = getAppState();

        const valuesToDisplay = calculateZus(currentZusType);
        setAppState({
            healthCareContribution: !healthCareContribution,
        });

        if (getAppState().healthCareContribution) {
            addSicknessInsurance(valuesToDisplay);
        } else {
            deleteSicknessInsurance(valuesToDisplay);
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
            displayBasicInsurance(valuesToDisplay);
        } else {
            input.checked = false;
            active = !active;
            setAppState({
                zusStatus: "",
            });
            clearBasicInsurance();
            clearTotalValue();
        }
    });
});

vatSelector.addEventListener('change',() => {
    const vatTaxPercent = Number(document.querySelector(".vatTax").value);
    setAppState({
        vat: vatTaxPercent,
    });
    const vat = calculateVat(vatTaxPercent);
    displayHTMLVat(vat);
});

incomeTaxSelector.addEventListener("change", () => {
    const incomeTaxType = Number(document.querySelector(".incomeTax").value)
    setAppState({
        taxationType: incomeTaxType,
    });
    calculateIncomeTax(incomeTaxType);
});