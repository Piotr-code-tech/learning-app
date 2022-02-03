import { calculateNetGrossCosts } from "./calculate-net-gross-costs";
import { calculateTotalZus } from "./calculate-ZUS";
import { calculateIncomeTax } from "./calculate-income-tax";
import { calculateVat } from "./calculate-Vat";
import { calculateIncome } from "./calculate-income";
import { calculateTotalTax } from "./calculate-total-taxes";
export const displayHTMLIncome = () => {

    let incomeHTML = document.querySelector(".incomeValue");
    const incomeToDisplay = calculateIncome();
    incomeHTML.innerHTML = incomeToDisplay;
}

export const displayHTMLCosts = () => {
    const {
            summaryNetValue,
            summaryGrossValue
    } = calculateNetGrossCosts();

    let netCostsHTML = document.querySelector(".costsNetValue");
    let grossCostsHTML = document.querySelector(".costsGrossValue");

    if(summaryNetValue && summaryGrossValue){
        netCostsHTML.innerHTML = summaryNetValue;
        grossCostsHTML.innerHTML = summaryGrossValue;
    }
    else{
        netCostsHTML.innerHTML = "";
        grossCostsHTML.innerHTML = "";
    }
}

export const displayHTMLVat = () => {
    let vatHTML = document.querySelector(".vatValue");
    const vatToDisplay = calculateVat();
    vatHTML.innerHTML = vatToDisplay;

}

export const displayHTMLIncomeTax = () => {
    let incomeTaxHTML = document.querySelector(".incomeTaxValue");
    const taxToDisplay = calculateIncomeTax();
    incomeTaxHTML.innerHTML = taxToDisplay;
}

export const displayHTMLAmountTax = () => {
    let totalTaxHTML = document.querySelector(".taxSumValue");
    const taxToDisplay = calculateTotalTax();
    totalTaxHTML.innerHTML = taxToDisplay;
}

export const displayBasicInsurance = (obj) => {
    const {
        retirement,
        socialSecurity,
        workAccident,
        healthy,
    } = obj;

    let retirementHTML = document.querySelector(".retirement");
    let socialSecurityHTML = document.querySelector(".socialSecurity");
    let workAccidentHTML = document.querySelector(".workAccident");
    let healthyHTML = document.querySelector(".healthy");
    let totalZusHTML = document.querySelector(".totalZus");
    const totalValue = calculateTotalZus({
        retirement,
        socialSecurity,
        workAccident,
        healthy
    });

    totalZusHTML.innerHTML = totalValue;
    retirementHTML.innerHTML = retirement;
    socialSecurityHTML.innerHTML = socialSecurity;
    workAccidentHTML.innerHTML = workAccident;
    healthyHTML.innerHTML = healthy;
}

export const clearBasicInsurance = () => {
    let retirementHTML = document.querySelector(".retirement");
    let socialSecurityHTML = document.querySelector(".socialSecurity");
    let workAccidentHTML = document.querySelector(".workAccident");
    let healthyHTML = document.querySelector(".healthy");
    let totalZusHTML = document.querySelector(".totalZus");

    retirementHTML.innerHTML = "";
    socialSecurityHTML.innerHTML = "";
    workAccidentHTML.innerHTML = "";
    healthyHTML.innerHTML = "";
    totalZusHTML.innerHTML = "";
}
export const addSicknessInsurance = (obj) => {
    const {
        retirement,
        socialSecurity,
        workAccident,
        healthy,
        sickness,
    } = obj;

    const totalValue = calculateTotalZus({
        retirement,
        socialSecurity,
        workAccident,
        healthy,
        sickness
    });

    let totalZusHTML = document.querySelector(".totalZus");
    let sicknessHTML = document.querySelector(".sickness");
    sicknessHTML.innerHTML = sickness;
    totalZusHTML.innerHTML = totalValue;

}

export const deleteSicknessInsurance = (obj) => {
    const {
        retirement,
        socialSecurity,
        workAccident,
        healthy,
    } = obj;

    const totalValue = calculateTotalZus({
        retirement,
        socialSecurity,
        workAccident,
        healthy
    });
    let sicknessHTML = document.querySelector(".sickness");
    let totalZusHTML = document.querySelector(".totalZus");
    sicknessHTML.innerHTML = "";
    totalZusHTML.innerHTML = totalValue;
}
export const clearTotalValue = () => {
    let totalZusHTML = document.querySelector(".totalZus");
    totalZusHTML.innerHTML = "";
}