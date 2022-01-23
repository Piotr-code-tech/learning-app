import { getData } from '../local-storage-operations/store-data';

export const calculateNetGrossCosts = () => {

    const actualTable = getData('app_table_data');
    let summaryNetValue = 0;
    let summaryGrossValue = 0;
    if(actualTable.rows) {
        Object.values(actualTable.rows).forEach((row) => {
            const netValue = row.price.net;
            const grossValue = row.price.gross;

            summaryNetValue = summaryNetValue + netValue;
            summaryGrossValue = summaryGrossValue + grossValue;
        });
    }
    return {
        summaryNetValue,
        summaryGrossValue,
    };
}
