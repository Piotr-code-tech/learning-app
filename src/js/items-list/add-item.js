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
    let newRow = document.createElement("tr");

    Object.values(obj).map((value) => {
        let newColumn = document.createElement("td");
        newColumn.innerHTML = value;
        newRow.appendChild(newColumn);
    });

    let containerForButton = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteRowButton";
    deleteButton.innerHTML = "\u00D7";

    deleteButton.addEventListener('click', () => {
        newRow.remove();
    });

    containerForButton.appendChild(deleteButton);
    newRow.appendChild(containerForButton);
    document.querySelector(".itemTable").appendChild(newRow);
}

