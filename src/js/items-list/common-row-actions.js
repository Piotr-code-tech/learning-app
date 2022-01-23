import { saveData } from '../local-storage-operations/store-data';
import { clearHtmlTable } from "./delete-item";
import { loadTable } from "./add-item";

export const CommonRowActions = {
    DELETE: 1,
}

export const rowActions = {
    [CommonRowActions.DELETE]: {
        action: ({id, table}) => {
            delete table.rows[id];
            saveData(table,'app_table_data');
            clearHtmlTable();
            loadTable();
        },
        className: 'deleteRowButton',
        innerText: 'Delete',
    },
};
