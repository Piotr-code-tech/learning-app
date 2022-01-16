import { sumNetGrossValue } from "./calculate-netGross-sum";
import { getData } from '../localStorage-operations/storeData';

const getTaxIncome = () => {
    const taxPercent = Number(document.querySelector(".vatTax").value);
    return taxPercent;
}

export const calculateVatTaxOnIncome = () => {
    let vatTax = 0;
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

        const taxPercent = getTaxIncome();

        const taxValue  = incomeNetValue * taxPercent;
        return taxValue
}