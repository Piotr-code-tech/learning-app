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

const zusButtons = document.querySelectorAll(".zusType");
const sicknessButton = document.querySelector(".sicknessState");
const calculateButton = document.querySelector(".calculateButton");


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
            input.classList.remove('zusButtonsOff');
            input.classList.add('zusButtonsOn');
            active = !active;
            displayBasicInsurance(valuesToDisplay);
        } else {
            input.classList.remove('zusButtonsOn');
            input.classList.add('zusButtonsOff');
            active = !active;
            clearBasicInsurance();
            clearTotalValue();
        }
    });
});

calculateButton.addEventListener('click', () => {
    displayHTMLVat();
});