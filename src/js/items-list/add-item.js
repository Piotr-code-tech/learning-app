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

export const writeElementToTable = (obj) => {
    const id = uuid();

    const {
        nameValue: name,
        categoryValue: category,
        netPriceValue: net,
        grossPriceValue: gross
    } = obj;

    addRow({
        id,
        name,
        category,
        price: {
            net,
            gross,
        },
        actions: {
            delete: function () {
                console.log('delete action triggered');
            }
        }
    });
    saveTable(table);
}

export const displayHTMLTable = () => {

    const createTableColumn = (value) => {
        let newHTMLTableColumn = document.createElement("td");
        newHTMLTableColumn.innerHTML = value;

        return newHTMLTableColumn;
    }

    Object.values(table.rows).forEach((value) => {
        const { name, category, price, } = value;
        let newHTMLRow = document.createElement("tr");
        const nameColumn = createTableColumn(name);
        const categoryColumn = createTableColumn(category);
        const netColumn = createTableColumn(price?.net ?? 0);
        const grossColumn = createTableColumn(price?.gross ?? 0);

        newHTMLRow.appendChild(nameColumn);
        newHTMLRow.appendChild(categoryColumn);
        newHTMLRow.appendChild(netColumn);
        newHTMLRow.appendChild(grossColumn);

        let containerForButton = document.createElement("td");
        //handle delete action add
        newHTMLRow.appendChild(containerForButton);
        document.querySelector(".itemTable").appendChild(newHTMLRow);
    });
}
// Create delete function to delete all rows into table