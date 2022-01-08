import { getValue } from "./store-value";
export const displayResult = () => {
    const {
        writtenIntoPlace,
        net,
        gross,
    } = getValue();
    let netHTML = document.querySelector(".netValue");
    let grossHTML = document.querySelector(".grossValue");
    let placeToWrite = document.querySelector("#writtenValue");
    netHTML.innerHTML = net;
    grossHTML.innerHTML = gross;
    placeToWrite.value = writtenIntoPlace;
}
