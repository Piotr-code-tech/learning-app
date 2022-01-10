const TABLE_KEY = 'app_earnedValue_data';

export const saveIncome = (value) => {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(TABLE_KEY, stringifyValue);
};

export const getIncome = () => {
    const stringifyValue = localStorage.getItem(TABLE_KEY);

    try {
        return JSON.parse(stringifyValue);
    } catch (e) {
        return null;
    }
}