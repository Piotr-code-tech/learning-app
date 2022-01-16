import { getData } from '../localStorage-operations/storeData';

export const sumNetGrossValue = () => {

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

