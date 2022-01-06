const TABLE_KEY = 'app_table_data';

export const saveTable = (table) => {
    const stringifyTable = JSON.stringify(table);

    localStorage.setItem(TABLE_KEY, stringifyTable);
};

export const getTable = () => {
    const stringifyTable = localStorage.getItem(TABLE_KEY);

    try {
        return JSON.parse(stringifyTable);
    } catch (e) {
        return null;
    }
}