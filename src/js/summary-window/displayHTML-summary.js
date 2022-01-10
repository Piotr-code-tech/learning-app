import { sumNetGrossValue } from "./calculate-netGross-sum";
import { calculateIncome } from "./calculate-income";


export const displayHTMLSummary = () => {

    const {
        summaryNetValue,
        summaryGrossValue
    } = sumNetGrossValue();

    const incomeValue = calculateIncome();

    let netSumHTML = document.querySelector(".netSumValue");
    let grossSumHTML = document.querySelector(".grossSumValue");
    let incomeHTML = document.querySelector(".incomeValue");
    if(summaryGrossValue) {
        netSumHTML.innerHTML = summaryNetValue;
        grossSumHTML.innerHTML = summaryGrossValue;
        incomeHTML.innerHTML = incomeValue;
    }
    else{
        netSumHTML.innerHTML = 0;
        grossSumHTML.innerHTML = 0;
        incomeHTML.innerHTML = incomeValue;
    }
}