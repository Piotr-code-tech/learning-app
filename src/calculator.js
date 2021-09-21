const submitButton = document.querySelector(".calculate");
const resetButton = document.querySelector(".resetButton");

const calculateValue = (writtenValue, option) => {
    var valueAfterCalculation;
    if(option === "grossValue") {
        valueAfterCalculation = writtenValue * 1.23;
        console.log(valueAfterCalculation);
        document.querySelector(".gross").innerHTML = valueAfterCalculation;
        document.querySelector(".net").innerHTML = writtenValue;
    }
    else if (option === "netValue") {
         valueAfterCalculation = writtenValue * 0.77;
         console.log(valueAfterCalculation);
         document.querySelector(".gross").innerHTML = writtenValue;
         document.querySelector(".net").innerHTML = valueAfterCalculation;
    }
 }

// const reset = () => {
//     clears value, result and gross/net selection to defaults
//
//     return void;
// }

const submitEvent = () => {
    var valueToCalculate;
    var choosedOption;
    valueToCalculate = document.querySelector("#value").value;
    console.log(valueToCalculate);
    choosedOption = document.querySelector('input[name="out_value"]:checked');
    console.log(choosedOption.value);
    calculateValue(Number(valueToCalculate),choosedOption.value);
}

const resetEvent = () => {
    // call reset
    alert('Reset button was clicked');
}

submitButton.addEventListener('click', submitEvent);
resetButton.addEventListener('click', resetEvent);

