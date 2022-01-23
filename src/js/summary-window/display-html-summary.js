import { calculateNetGrossCosts } from "./calculate-net-gross-costs";
import { calculateTotalZus } from "./calculate-zus";

const getIncomeValue = () => {
    //const incomeValue = calculateIncome();
    //return incomeValue;
}

const getNetGrossCosts = () => {
    const {
        summaryNetValue,
        summaryGrossValue
    } = calculateNetGrossCosts();

    return {
        summaryNetValue,
        summaryGrossValue
    };
}

export const displayHTMLIncome = () => {

    //let incomeHTML = document.querySelector(".incomeValue");
    //incomeHTML.innerHTML = incomeValue;
}

export const displayHTMLCosts = () => {
    const {
        summaryNetValue,
        summaryGrossValue
    } = getNetGrossCosts();

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

export const displayHTMLVat = (vat) => {
    let vatHTML = document.querySelector(".vatValue");
    vatHTML.innerHTML = vat;
}

export const displayHTMLIncomeTax = () => {

}

export const displayHTMLAmountTax = () => {

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