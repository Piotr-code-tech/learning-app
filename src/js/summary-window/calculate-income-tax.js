import { getData, storageKeys} from '../local-storage-operations/store-data';
//import { returnButtonValue, calculateZus} from './calculate-ZUS';
import { calculateNetGrossCosts } from '../summary-window/calculate-net-gross-costs'

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

    if(healthCareContribution) {
        socialContributions +=  sickness;
    }

    const taxBase = net - socialContributions;

    const tax = (taxBase * taxScale.lumpSum) - healthyContributionToDeduction;
    console.log(tax);
    return tax;

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
     taxBase = taxBase * taxScale.flatRateValue;
     if(healthCareContribution) {
        taxBase = taxBase - taxScale.healthyContributionToDeduction;
     }
    console.log(taxBase);
    return taxBase;
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
     if((net - summaryNetValue)  >= taxScale.taxScaleThreshold){
            const firstThreshold = taxScale.taxScaleLow * taxScale.taxScaleThreshold;
            const secondThershold = taxScale.taxScaleHigh * ((net-summaryNetValue) - taxScale.taxScaleThreshold);
            let taxBase = (firstThreshold + secondThershold) - retirement - socialSecurity - workAccident - taxScale.healthyContributionToDeduction;
            if(healthCareContribution){
                taxBase = taxBase - taxScale.healthyContributionToDeduction;
            }
            console.log(taxBase);
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

export const calculateIncomeTax = (taxType) => {
    return incomeTaxType.get(taxType);
}
