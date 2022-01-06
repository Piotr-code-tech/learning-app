import { saveTable } from "./store-table";
import { loadTable } from "./add-item";
import { clearHtmlTable } from "./delete-item";

export const CommonRowActions = {
    DELETE: 1,
}

export const rowActions = {
    [CommonRowActions.DELETE]: {
        action: ({id, table}) => {
            delete table.rows[id];
            saveTable(table);
            clearHtmlTable();
            loadTable();
        },
        className: 'deleteRowButton',
        innerText: 'Delete',
    },
};
