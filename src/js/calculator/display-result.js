export const displayResult = (resultValue, writtenValue, choosedRadioButton) => {
    if (choosedRadioButton === document.querySelector('input[id="grossRadioButton"]').value) {
        document.querySelector(".grossValue").innerHTML = resultValue;
        document.querySelector(".netValue").innerHTML = writtenValue;
    }
    else if (choosedRadioButton === document.querySelector('input[id="netRadioButton"]').value) {
        document.querySelector(".netValue").innerHTML = resultValue;
        document.querySelector(".grossValue").innerHTML = writtenValue;
    }
}
