import { TableBuilder } from "./Table";
import { TableRowBuilder } from "./TableRow";
import { v4 as uuid } from "uuid";
import { saveData, getData } from '../localStorage-operations/storeData';
import { CommonRowActions, rowActions } from "./common-row-actions";
import { clearHtmlTable } from "./delete-item";
import {displayHTMLSummary } from "../summary-window/displayHTML-summary";

export const createTable = () => {
    const tableFromStorage = getData('app_table_data');
    const rows = tableFromStorage?.rows;
    const table = new TableBuilder();
    return table
        .setRows(rows)
        .build();
};

const table = createTable();

export const createRow = ({ id, name, category, price, actions }) => {
    const tableRow = new TableRowBuilder();

    return tableRow
        .setId(id)
        .setName(name)
        .setCategory(category)
        .setPrice(price)
        .setActions(actions)
        .build();
}

export const addRow = ({ id, name, category, price, actions }) => {
    const row = createRow({ id, name, category, price, actions });
    table.addRow(row);
}

export const getNewItemValues = () => {
    let nameColumnValue = document.querySelector(".nameListElement").value;
    let categoryColumnValue = document.querySelector(".categoryListElement").value;
    let netPriceColumnValue = Number(document.querySelector("#netPriceListElement").value);
    let grossPriceColumnValue = Number(document.querySelector("#grossPriceListElement").value);

    return {
        nameColumnValue,
        categoryColumnValue,
        netPriceColumnValue,
        grossPriceColumnValue
    };
}

export const displayHTMLRow = (row, table) => {

    const createTableColumn = (value) => {
        let newHTMLTableColumn = document.createElement("td");
        newHTMLTableColumn.innerHTML = value;
        return newHTMLTableColumn;
    }

    const { id, name, category, price, actions } = row;
    let newHTMLRow = document.createElement("tr");
    const nameColumn = createTableColumn(name);
    const categoryColumn = createTableColumn(category);
    const netColumn = createTableColumn(price.net ?? 0);
    const grossColumn = createTableColumn(price.gross ?? 0);

    newHTMLRow.appendChild(nameColumn);
    newHTMLRow.appendChild(categoryColumn);
    newHTMLRow.appendChild(netColumn);
    newHTMLRow.appendChild(grossColumn);

    const rowActions = getRowActions({actions, id, table});

    newHTMLRow.appendChild(rowActions);
    document.querySelector(".itemTableRows").appendChild(newHTMLRow);
}

const getRowActions = ({actions, id, table}) => {
    const containerForButton = document.createElement("td");

    actions.forEach((action) => {
        const currentAction = rowActions[action];

        if (currentAction) {
            const actionButton = document.createElement('button');
            actionButton.className = currentAction.className;
            actionButton.innerHTML = currentAction.innerText;

            actionButton.addEventListener('click', () => {
                currentAction.action({id, table});
            });

            containerForButton.appendChild(actionButton);
        }
    });

    return containerForButton;
}

export const loadTable = () => {
    clearHtmlTable();
    const freshTableData = getData('app_table_data');
    Object.values(freshTableData.rows).forEach((row) => {
        displayHTMLRow(row, table);
    });
    displayHTMLSummary();
}

export const writeElementToTable = (obj) => {
    const id = uuid();

    const {
        nameColumnValue: name,
        categoryColumnValue: category,
        netPriceColumnValue: net,
        grossPriceColumnValue: gross
    } = obj;

    const newRow = {
        id,
        name,
        category,
        price: {
            net,
            gross,
        },
        actions: [CommonRowActions.DELETE],
    }

    addRow(newRow);
    saveData(table,'app_table_data');
    loadTable();
}