import { sumNetGrossValue } from "./calculate-netGross-sum";
import { getIncome } from "../calculator/store-income";

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

    const incomeValues = getIncome();

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