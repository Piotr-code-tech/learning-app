import { getTable } from "../items-list/store-table";

export const sumNetGrossValue = () => {

    const actualTable = getTable();
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

