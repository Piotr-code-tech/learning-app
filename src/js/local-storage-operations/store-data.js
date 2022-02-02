export const saveData = (value,key) => {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
};

export const getData = (key) => {
    const stringifyValue = localStorage.getItem(key);

    try {
        return JSON.parse(stringifyValue);
    } catch (e) {
        return null;
    }
};

export const storageKeys = {
    appEarnedValue: "app-earned-value-data",
    appTableData: "app-table-data",
    appZusContributions: "app-zus-contributions",
    appState: "app-state"
}