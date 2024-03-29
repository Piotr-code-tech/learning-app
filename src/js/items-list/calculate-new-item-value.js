const netValueOption = document.querySelector(".newNetValue");

export const availableNewItemVatOption = {
    destination: ".newItemVatContainer",
    selectClassName: "vatRate",
    headingName: "Select Vat",
    options : {
        "23%": 0.23,
        "8%": 0.08,
        "5%": 0.05,
        "0%": 0
    }
}

const getTaxValue = () => {
    let taxValueOption = document.querySelector(".vatRate");
    const vatValue = Number(taxValueOption.value);
    return vatValue;
}

export const getValueToCalculate = () => {

    let writtenNetValue = Number(document.querySelector("#netPriceListElement").value);
    let writtenGrossValue = Number(document.querySelector("#grossPriceListElement").value);

    return {
        writtenNetValue,
        writtenGrossValue,
    };
}

export const getCheckedInput = () => {
    let checkedValue = document.querySelector('input[name="checkValue"]:checked').value;
    return checkedValue;
}

export const calculateNewItem = (val, option) => {
    let result = 0;
    var dataArr = Object.values(val);
    const taxValue = getTaxValue();
    if(option === document.querySelector("#addNet").value) {
        let net = dataArr[0];
        result = net * (1 + taxValue);
        return result;
    }
    if(option === document.querySelector("#addGross").value) {
        let gross = dataArr[1];
        result = gross * (1 - taxValue);
        return result;
    }
}

export const displayNewValue = (val, option) => {
    if(option === document.querySelector("#addNet").value) {
        document.querySelector("#grossPriceListElement").value = val;
    }
    if(option === document.querySelector("#addGross").value) {
        document.querySelector("#netPriceListElement").value = val;
    }
}

export const disableElement = (option) => {
    if(option === document.querySelector("#addNet").value) {
        document.querySelector(".newNetValue").classList.remove("disableValue");
        document.querySelector(".newGrossValue").classList.add("disableValue");
        document.querySelector(".newNetValue").disabled = false;
        document.querySelector(".newGrossValue").disabled = true;
        document.querySelector("#netPriceListElement").value = "";
    }
    if(option === document.querySelector("#addGross").value) {
        document.querySelector(".newNetValue").classList.add("disableValue");
        document.querySelector(".newGrossValue").classList.remove("disableValue");
        document.querySelector(".newNetValue").disabled = true;
        document.querySelector(".newGrossValue").disabled = false;
        document.querySelector("#grossPriceListElement").value = "";
    }
}
netValueOption.addEventListener('oninput', () => {
    const taxValue = getTaxValue();
    const netGrossValue = getValueToCalculate();
    const checkedInputNetGross = getCheckedInput();
    let newValueItem = calculateNewItem(netGrossValue, checkedInputNetGross);
    displayNewValue(newValueItem, checkedInputNetGross);
});
