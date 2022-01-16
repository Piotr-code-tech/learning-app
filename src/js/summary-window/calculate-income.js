import { sumNetGrossValue } from "./calculate-netGross-sum";
import { getData } from '../localStorage-operations/storeData';

export const calculateIncome = () => {
    let incomeNetValue = 0;
    let netIncome = 0;
    let netSpendings = 0;

    const netGrossValues = sumNetGrossValue();

    if(netGrossValues) {
        const {
            summaryNetValue,
            summaryGrossValue,
        } = netGrossValues;

        netSpendings = summaryNetValue;
    }

    const incomeValues = getData("app_earnedValue_data");

    if(incomeValues) {
        const {
            writtenIntoPlace,
            net,
            gross,
        } = incomeValues;

        netIncome = net;
    }

    incomeNetValue = netIncome - netSpendings;

    return incomeNetValue;
}