import { calculateNetGrossCosts } from "./calculate-net-gross-costs";
import { getData } from '../local-storage-operations/store-data';

const getTaxIncome = () => {
    const taxPercent = Number(document.querySelector(".vatTax").value);
    return taxPercent;
}

const calculateVatFromIncome = (tax) => {
    const {
        writtenIntoPlace,
        net,
        gross,
    } = getData("app_earnedValue_data");

    const incomeVat = net * tax;
    return incomeVat;
}

const calculateVatFromCosts = () => {

    let costsVat = 0;
    const costsTable = getData('app_table_data');
    Object.values(costsTable.rows).forEach((row) => {
        const netValue = row.price.net;
        const grossValue = row.price.gross;
        const vat = grossValue - netValue;
        costsVat = costsVat + vat;
    });
    return costsVat;
}

export const calculateVat = () => {
    const vatIncome = calculateVatFromIncome(getTaxIncome());
    const vatCosts = calculateVatFromCosts();

    const vat = vatIncome - vatCosts;
    return vat;
}