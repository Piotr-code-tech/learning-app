import { sumNetGrossValue } from "./calculate-netGross-sum";
import { getValue } from "../calculator/store-value";

export const calculateIncome = () => {

    const {
        summaryNetValue,
        summaryGrossValue,
    } = sumNetGrossValue();

    const {
        writtenIntoPlace,
        net,
        gross,
    } = getValue();

    const incomeNetValue = net - summaryNetValue;
    return incomeNetValue;
}