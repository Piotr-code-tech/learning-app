import { getData, storageKeys } from '../local-storage-operations/store-data';

export const calculateNetGrossCosts = () => {

    const actualTable = getData(storageKeys.appTableData);
    const defaultValues = { summaryGrossValue: 0, summaryNetValue: 0 };

    return actualTable.rows ? Object.values(actualTable.rows).map(({price: { net, gross }}) => {
        return {
            net,
            gross,
        };
    }).reduce(({ summaryGrossValue, summaryNetValue }, { gross, net } ) => {
        return {
            summaryGrossValue: summaryGrossValue + gross,
            summaryNetValue: summaryNetValue + net,
        }
    }, defaultValues) : defaultValues;
}

