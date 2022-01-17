import { calculateNetGrossCosts } from "./calculate-netGross-costs";
import { calculateIncome } from "./calculate-income";
import { calculateVat } from "./calculate-Vat";

export const getSummaryValues = () => {
    const {
        summaryNetValue,
        summaryGrossValue
    } = calculateNetGrossCosts();

    const incomeValue = calculateIncome();
    const vatValue = calculateVat();

    return {
        summaryNetValue,
        summaryGrossValue,
        incomeValue,
        vatValue,
    };
}

export const displayHTMLSummary = () => {
    const {
        summaryNetValue,
        summaryGrossValue,
        incomeValue,
        vatValue,
    } = getSummaryValues();

    let netCostsHTML = document.querySelector(".costsNetValue");
    let grossCostsHTML = document.querySelector(".costsGrossValue");
    let incomeHTML = document.querySelector(".incomeValue");
    let vatHTML = document.querySelector(".vatValue");

    if(calculateNetGrossCosts()||calculateIncome()) {
        netCostsHTML.innerHTML = summaryNetValue;
        grossCostsHTML.innerHTML = summaryGrossValue;
        incomeHTML.innerHTML = incomeValue;
        vatHTML.innerHTML = vatValue;
    }
    else{
        netCostsHTML.innerHTML = 0;
        grossCostsHTML.innerHTML = 0;
        incomeHTML.innerHTML = incomeValue;
        vatHTML.innerHTML = 0;
    }
}