import { calculateNetGrossCosts } from "./calculate-net-gross-costs";
import { getData, storageKeys } from '../local-storage-operations/store-data';
import { setAppState } from "../app-state/app-state";

export const getVatValue = () => {
    let taxValueOption = document.querySelector(".vatTax");
    const vatValue = Number(taxValueOption.value);
    setAppState({
            vat: vatValue,
    });
    return vatValue;
}

export const availableVatOption = {
    destination: ".vatTaxContainer",
    selectClassName: "vatTax",
    headingName: "Select VAT",
    options : {
        "23%": 0.23,
        "8%": 0.08,
        "5%": 0.05,
        "0%": 0
    }
};

const calculateVatFromIncome = (tax) => {
    const {
        writtenIntoPlace,
        net,
        gross,
    } = getData(storageKeys.appEarnedValue);

    const incomeVat = net * tax;
    return incomeVat;
}

const calculateVatFromCosts = () => {

    let costsVat = 0;
    const costsTable = getData(storageKeys.appTableData);
    Object.values(costsTable.rows).forEach((row) => {
        const netValue = row.price.net;
        const grossValue = row.price.gross;
        const vat = grossValue - netValue;
        costsVat = costsVat + vat;
    });
    return costsVat;
}

export const calculateVat = () => {
    const vatPercent = getVatValue();
    const vatIncome = calculateVatFromIncome(vatPercent);
    const vatCosts = calculateVatFromCosts();

    const vat = vatIncome - vatCosts;
    return vat;
}