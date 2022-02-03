import { calculateNetGrossCosts } from "./calculate-net-gross-costs";
import { getData, storageKeys } from '../local-storage-operations/store-data';
import { calculateIncomeTax } from "./calculate-income-tax";
import { calculateTotalZus } from "./calculate-ZUS";

export const calculateIncome = () => {
    let incomeNetValue = 0;
    let netEarnings = 0;
    let netCosts = 0;

    const netGrossCosts = calculateNetGrossCosts();

    if(netGrossCosts) {
        const {
            summaryNetValue,
            summaryGrossValue,
        } = netGrossCosts;

        netCosts = summaryNetValue;
    }

    const incomeValues = getData(storageKeys.appEarnedValue);

    if(incomeValues) {
        const {
            writtenIntoPlace,
            net,
            gross,
        } = incomeValues;

        netEarnings = net;
    }

    const incomeTax = calculateIncomeTax();
    const zusContributions = getData(storageKeys.appZusContributions);
    const zus = calculateTotalZus(zusContributions);
    incomeNetValue = netEarnings - netCosts - incomeTax - zus;
    console.log(incomeNetValue);
    return incomeNetValue;
}