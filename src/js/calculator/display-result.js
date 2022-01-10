import { getIncome } from "./store-income";

export const displayResult = () => {
    const incomeValues = getIncome();

    if(incomeValues){
        const {
            writtenIntoPlace,
            net,
            gross,
            } = incomeValues;

        let netHTML = document.querySelector(".netValue");
        let grossHTML = document.querySelector(".grossValue");
        let placeToWrite = document.querySelector("#writtenValue");
        netHTML.innerHTML = net;
        grossHTML.innerHTML = gross;
        placeToWrite.value = writtenIntoPlace;
    }

}
