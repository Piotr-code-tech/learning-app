import { getTable, saveTable} from "./store-table";
import { addRow } from "./add-item";

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

export const displayHTMLSummary = (obj) => {

    const {
        summaryNetValue,
        summaryGrossValue,
    } = obj;

    if(summaryGrossValue != 0) {
        let summaryRow = document.createElement("tr");

        const netHeadColumn = document.createElement("td");
        const netSum = document.createElement("td");
        const grossHeadColumn = document.createElement("td");
        const grossSum = document.createElement("td");

        netHeadColumn.innerHTML = "Net sum : ";
        netSum.innerHTML = summaryNetValue;
        grossHeadColumn.innerHTML = "Gross sum : ";
        grossSum.innerHTML = summaryGrossValue;

        summaryRow.appendChild(netHeadColumn);
        summaryRow.appendChild(netSum);
        summaryRow.appendChild(grossHeadColumn);
        summaryRow.appendChild(grossSum);

        document.querySelector(".itemTableRows").appendChild(summaryRow);
    }
}

