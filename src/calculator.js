const submitButton = document.querySelector(".btn-submit");
const resetButton = document.querySelector(".btn-reset");

const submitEvent = () =>
{
alert('Submit button was clicked');
}

const resetEvent = () =>
{
alert('Reset button was clicked');
}

submitButton.addEventListener('click', submitEvent);
resetButton.addEventListener('click', resetEvent);

