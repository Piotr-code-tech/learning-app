//Added EventListener for now this returns alert on the page
document.getElementById("btn-submit").addEventListener("click", alertSubmit);
document.getElementById("btn-reset").addEventListener("click", alertReset);

function alertSubmit() {
alert ("You clicked submit button");
}

function alertReset() {
alert ("You clicked reset button");
}