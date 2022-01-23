import { calculateNetGrossCosts } from "./calculate-net-gross-costs";
import { getData } from '../local-storage-operations/store-data';

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

    const incomeValues = getData("app_earnedValue_data");

    if(incomeValues) {
        const {
            writtenIntoPlace,
            net,
            gross,
        } = incomeValues;

        netEarnings = net;
    }

    incomeNetValue = netEarnings - netCosts;

    return incomeNetValue;
}