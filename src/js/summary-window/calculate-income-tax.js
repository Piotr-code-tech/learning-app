import { getData, storageKeys} from '../local-storage-operations/store-data';
import { calculateNetGrossCosts } from '../summary-window/calculate-net-gross-costs';
import { setAppState } from '../app-state/app-state';

export const getTaxValue = () => {
    let taxValueOption = document.querySelector(".incomeTax");
    const taxValue = taxValueOption.value;
    setAppState({
        taxationType: taxValue,
    });
    return taxValue;
}

const taxScale = {
    lumpSum: 0.15,
    taxScaleLow: 0.17,
    taxScaleHigh: 0.32,
    flatRateValue: 0.19,
    taxScaleThreshold: 85528,
    healthyContributionToDeduction: 275.51,

}

const getValuesToCalculation = () => {
    const income = getData(storageKeys.appEarnedValue);
        const {
            net,
        } = income;

        const zusContributions = getData(storageKeys.appZusContributions);
        const {
            retirement,
            socialSecurity,
            workAccident,
            sickness
        } = zusContributions;

        const sicknessButtonState = getData(storageKeys.appState);
        const {
            healthCareContribution
        } = sicknessButtonState;

        const {
            summaryGrossValue,
            summaryNetValue
        } = calculateNetGrossCosts()

        return {
            net,
            retirement,
            socialSecurity,
            workAccident,
            sickness,
            healthCareContribution,
            summaryNetValue
        }
}

const calculateLumpSum = () => {
    const {
        net,
        retirement,
        socialSecurity,
        workAccident,
        sickness,
        healthCareContribution,
    } = getValuesToCalculation();

    let socialContributions = retirement + socialSecurity+ workAccident;
    if(socialContributions){
        if(healthCareContribution) {
            socialContributions +=  sickness;
        }

        const taxBase = net - socialContributions;

        const tax = (taxBase * taxScale.lumpSum) - taxScale.healthyContributionToDeduction;
        console.log(tax);
        return tax;
    }
    else {
        const tax = net * taxScale.lumpSum;
        return tax;
    }
}

const calculateTaxScale = () => {
    const{
        net,
        summaryNetValue,
        retirement,
        socialSecurity,
        workAccident,
        sickness,
        healthCareContribution,

    } = getValuesToCalculation();

    let taxBase = net - summaryNetValue;
    taxBase = taxBase - retirement - socialSecurity - workAccident;
    if(taxBase){
        if(net*12 < taxScale.taxScaleThreshold){
            taxBase = taxBase * taxScale.taxScaleLow;
            taxBase = taxBase - taxScale.healthyContributionToDeduction;
            console.log(taxBase);
            return taxBase;
        }
        else{
            taxBase = taxBase * taxScale.taxScaleHigh;
            taxBase = taxBase - taxScale.healthyContributionToDeduction;
            console.log(taxBase);
            return taxBase;
        }
    }
    else {
        if(net*12 < taxScale.taxScaleThreshold){
            const incomeTax = (net - summaryNetValue) * taxScale.taxScaleLow;
            return incomeTax;
        }
        else{
            const incomeTax = (net - summaryNetValue) * taxScale.taxScaleHigh;
            return incomeTax;
        }
    }
}

const calculateFlatRateTax = () => {
    const{
        net,
        summaryNetValue,
        retirement,
        socialSecurity,
        workAccident,
        sickness,
        healthCareContribution,
    } = getValuesToCalculation();

     let taxBase = net - summaryNetValue;
     taxBase = taxBase - retirement - socialSecurity - workAccident;
     if(taxBase){
        taxBase = taxBase * taxScale.flatRateValue;
        if(healthCareContribution) {
             taxBase = taxBase - taxScale.healthyContributionToDeduction;
          }
         console.log(taxBase);
         return taxBase;
     }
     else{
        const incomeTax = (net - summaryNetValue) * taxScale.flatRateValue;
        return incomeTax;
     }
}

const calculateSecondTaxThreshold = () => {
     const{
            net,
            summaryNetValue,
            retirement,
            socialSecurity,
            workAccident,
            sickness,
            healthCareContribution,
     } = getValuesToCalculation();
     const firstThreshold = taxScale.taxScaleLow * taxScale.taxScaleThreshold;
     const secondThershold = taxScale.taxScaleHigh * ((net-summaryNetValue) - taxScale.taxScaleThreshold);
     if((net - summaryNetValue)  >= taxScale.taxScaleThreshold){
            let taxBase = (firstThreshold + secondThershold) - retirement - socialSecurity - workAccident;
            if(healthCareContribution){
                taxBase = taxBase - taxScale.healthyContributionToDeduction;
            }
            return taxBase;
     }
     else{
        let taxBase = firstThreshold + secondThershold;
        return taxBase;
     }
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

export const calculateIncomeTax = () => {
    const taxType = getTaxValue();
    return (incomeTaxType.get(taxType))();
}
