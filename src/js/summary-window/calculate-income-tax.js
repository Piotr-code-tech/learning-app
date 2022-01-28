import { getData, storageKeys} from '../local-storage-operations/store-data';

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
    ["LumpSum",calculateLumpSum],
    ["taxScale",calculateTaxScale],
    ["flatRateTax",calculateFlatRateTax],
    ["secondTaxThreshold",calculateSecondTaxThreshold]
]);

export const availableIncomeTaxOption = {
    destination: ".incomeTaxContainer",
    selectClassName: "incomeTax",
    headingName: "Form of taxation",
    options : {
        "Lump sum 15%": "LumpSum",
        "Tax scale 17%/32%": "taxScale",
        "Flat rate tax 19%": "flatRateTax",
        "Second tax treshold 32%": "secondTaxThreshold"
    }
}

export const calculateIncomeTax = (taxType) => {
    const calculate = incomeTaxType.get(taxType);
    calculate();
}
