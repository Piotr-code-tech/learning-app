import { getData } from '../local-storage-operations/store-data';

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

export const calculateIncomeTax = (taxType) => {
    const calculate = incomeTaxType.get(taxType);
    calculate();
}
