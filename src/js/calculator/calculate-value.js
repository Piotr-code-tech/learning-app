const taxValue = 0.23;

export const calculateValue = (writtenValue, choseRadioButton) => {
    let calculatedValue = 0;
    if (choseRadioButton === document.querySelector('input[id="grossRadioButton"]').value) {
        calculatedValue = writtenValue * (1 + taxValue);
    }
    else if (choseRadioButton === document.querySelector('input[id="netRadioButton"]').value) {
        calculatedValue = writtenValue * (1 - taxValue);
    }
    return calculatedValue;
}