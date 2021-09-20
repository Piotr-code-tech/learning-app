const submitButton = document.querySelector(".calculate");
const resetButton = document.querySelector(".resetButton");
var valueToCalculate = 0;
var choosedOption;
//const calculateValue = () => {
//
// }

// const reset = () => {
//     clears value, result and gross/net selection to defaults
//
//     return void;
// }

const submitEvent = () => {
    valueToCalculate = document.querySelector("#value").value;
    console.log(valueToCalculate);
    choosedOption = document.querySelector('input[name="out_value"]:checked');
    console.log(choosedOption.value);
}

const resetEvent = () => {
    // call reset
    alert('Reset button was clicked');
}

submitButton.addEventListener('click', submitEvent);
resetButton.addEventListener('click', resetEvent);

