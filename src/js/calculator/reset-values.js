import { saveData } from '../localStorage-operations/storeData';

export const reset = () => {
    document.querySelector("#grossRadioButton").checked = false;
    document.querySelector("#netRadioButton").checked = false;
    document.querySelector(".grossValue").innerHTML = "";
    document.querySelector(".netValue").innerHTML = "";
    document.querySelector("#writtenValue").value = "";

    saveData(null,"app_earnedValue_data");
}
