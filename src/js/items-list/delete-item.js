export const clearAllTable = () => {
    let table = document.querySelector('.itemTable');
    for(let i = table.rows.length -1; i >0; i--) {
        table.deleteRow(i);
    }
}