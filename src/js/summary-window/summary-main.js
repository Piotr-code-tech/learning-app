import {
    displayBasicInsurance,
    clearBasicInsurance,
    addSicknessInsurance,
    deleteSicknessInsurance,
    clearTotalValue,
    displayHTMLVat
} from "./displayHTML-summary";
import {returnButtonValue, calculateZUS} from "./calculate-ZUS";

const zusButtons = document.querySelectorAll(".zusType");
const sicknessButton = document.querySelector(".sickenssState");
const calculateButton = document.querySelector(".calculateButton");

zusButtons.forEach((input) => {
    let active = false;
    input.addEventListener('click', () => {
        const key = returnButtonValue(input);
        const valuesToDisplay = calculateZUS(key);
        let sicknessButtonState = false;
        sicknessButton.addEventListener("click",() => {
            if(!sicknessButtonState){
                addSicknessInsurance(valuesToDisplay);
                sicknessButtonState = !sicknessButtonState;
            }
            else{
                deleteSicknessInsurance(valuesToDisplay);
                sicknessButtonState = !sicknessButtonState;
            }
            }
        );

        if(!active) {
            input.classList.remove('zusButtonsOff');
            input.classList.add('zusButtonsOn');
            active = !active;
            displayBasicInsurance(valuesToDisplay);
            }
        else{
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