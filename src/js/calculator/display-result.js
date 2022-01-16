import { getData } from '../localStorage-operations/storeData';

export const displayResult = () => {

    if(getData("app_earnedValue_data")){
        const {
            writtenIntoPlace,
            net,
            gross,
        } = getData("app_earnedValue_data");

        let netHTML = document.querySelector(".netValue");
        let grossHTML = document.querySelector(".grossValue");
        let placeToWrite = document.querySelector("#writtenValue");
        netHTML.innerHTML = net;
        grossHTML.innerHTML = gross;
        placeToWrite.value = writtenIntoPlace;
    }

}
