import { TableBuilder } from "./Table";
import { TableRowBuilder } from "./TableRow";
import { v4 as uuid } from "uuid";
import { getTable, saveTable } from "./store-table";

export const createTable = () => {
    const tableFromStorage = getTable();
    const rows = tableFromStorage?.rows;
    const table = new TableBuilder();
    return table
        .setRows(rows)
        .build();
};

const table = createTable();

// 1. build table on page load.
// 2. add delete item action (by id).
console.log('created table from storage', table);

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
    let nameValue = document.querySelector(".nameListElement").value;
    let categoryValue = document.querySelector(".categoryListElement").value;
    let netPriceValue = Number(document.querySelector("#netPriceListElement").value);
    let grossPriceValue = Number(document.querySelector("#grossPriceListElement").value);

    return {
        nameValue,
        categoryValue,
        netPriceValue,
        grossPriceValue
    };
}

export const displayHTMLRow = (obj) => {

    const createTableColumn = (value) => {
        let newHTMLTableColumn = document.createElement("td");
        newHTMLTableColumn.innerHTML = value;
        return newHTMLTableColumn;
    }

    const {id,name, category, price, actions} = obj;
    let newHTMLRow = document.createElement("tr");
    const nameColumn = createTableColumn(name);
    const categoryColumn = createTableColumn(category);
    const netColumn = createTableColumn(price.net ?? 0);
    const grossColumn = createTableColumn(price.gross ?? 0);

    newHTMLRow.appendChild(nameColumn);
    newHTMLRow.appendChild(categoryColumn);
    newHTMLRow.appendChild(netColumn);
    newHTMLRow.appendChild(grossColumn);

    const containerForButton = document.createElement("td");
    //handle delete action add
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteRowButton";
    deleteButton.innerHTML = "\u00D7";
    deleteButton.onclick = () => {
       table.rows[id].actions.delete();
       newHTMLRow.remove();
    }
    containerForButton.appendChild(deleteButton);
    newHTMLRow.appendChild(containerForButton);
    document.querySelector(".itemTable").appendChild(newHTMLRow);
}

export const writeElementToTable = (obj) => {
    const id = uuid();

    const {
        nameValue: name,
        categoryValue: category,
        netPriceValue: net,
        grossPriceValue: gross
    } = obj;

    const newRow = {
        id,
        name,
        category,
        price: {
            net,
            gross,
        },
        actions: {
            delete : function () {
                delete table.rows[id];
                saveTable(table);
            }
        }
    }

    addRow(newRow);
    console.log("Table is : ",table);
    displayHTMLRow(newRow);
    saveTable(table);
}

export const uploadTable = () => {
    Object.values(table.rows).forEach((value) => {
        displayHTMLRow(value);
    });
}