import { getData, storageKeys} from '../local-storage-operations/store-data';

export const displayResult = () => {
    const earnedValueData = getData(storageKeys.appEarnedValue);

    if(earnedValueData){
        const {
            writtenIntoPlace,
            net,
            gross,
        } = earnedValueData;

        let netHTML = document.querySelector(".netValue");
        let grossHTML = document.querySelector(".grossValue");
        let placeToWrite = document.querySelector("#writtenValue");
        netHTML.innerHTML = net;
        grossHTML.innerHTML = gross;
        placeToWrite.value = writtenIntoPlace;
    }

}
