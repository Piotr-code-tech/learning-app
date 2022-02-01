import { saveData, storageKeys} from '../local-storage-operations/store-data';
import { clearHtmlTable } from "./delete-item";
import { loadTable } from "./add-item";

export const CommonRowActions = {
    DELETE: "deleteItemFromTable",
}

export const rowActions = {
    [CommonRowActions.DELETE]: {
        action: ({id, table}) => {
            delete table.rows[id];
            saveData(table,storageKeys.appTableData);
            clearHtmlTable();
            loadTable();
        },
        className: 'deleteRowButton',
        innerText: 'Delete',
    },
};
