import { getData } from '../local-storage-operations/store-data';

const getTaxType = () => {
    const taxPercent = Number(document.querySelector(".incomeTax").value);
    return taxPercent;
}

const calculateLumpSum = () => {
    console.log("Lump sum");
}

const calculateTaxScale = () => {
    console.log("Tax Scale");
}

const calculateFlatRateTax = () => {
    console.log("Flat rate tax");
}

const calculateSecondTaxThreshold = () => {
    console.log("Second tax threshold");
}

const incomeTaxType = new Map([
    [1,calculateLumpSum],
    [2,calculateTaxScale],
    [3,calculateFlatRateTax],
    [4,calculateSecondTaxThreshold]
]);

export const calculateIncomeTax = () => {
    const key = getTaxType();
    const calculate = incomeTaxType.get(key);
    calculate();
}
