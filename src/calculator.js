const submitButton = document.querySelector(".btn-submit");
const resetButton = document.querySelector(".btn-reset");

// const calculateValue = (value, option) => {
//     return result number
// }

// const reset = () => {
//     clears value, result and gross/net selection to defaults
//
//     return void;
// }

const submitEvent = () => {
    // call calculateValue
    alert('Submit button was clicked');
}

const resetEvent = () => {
    // call reset
    alert('Reset button was clicked');
}

submitButton.addEventListener('click', submitEvent);
resetButton.addEventListener('click', resetEvent);

