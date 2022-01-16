import { sumNetGrossValue } from "./calculate-netGross-sum";
import { calculateIncome } from "./calculate-income";
import { calculateVatTaxOnIncome } from "./calculate-Vat";


export const displayHTMLSummary = () => {

    const {
        summaryNetValue,
        summaryGrossValue
    } = sumNetGrossValue();

    const incomeValue = calculateIncome();
    const vatValue = calculateVatTaxOnIncome();

    let netSumHTML = document.querySelector(".netSumValue");
    let grossSumHTML = document.querySelector(".grossSumValue");
    let incomeHTML = document.querySelector(".incomeValue");
    let vatHTML = document.querySelector(".vatValue");

    if(sumNetGrossValue()) {
        netSumHTML.innerHTML = summaryNetValue;
        grossSumHTML.innerHTML = summaryGrossValue;
        incomeHTML.innerHTML = incomeValue;
        vatHTML.innerHTML = vatValue;
    }
    else{
        netSumHTML.innerHTML = 0;
        grossSumHTML.innerHTML = 0;
        incomeHTML.innerHTML = incomeValue;
        vatHTML.innerHTML = 0;
    }
}