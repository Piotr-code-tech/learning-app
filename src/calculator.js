const buttons = [document.querySelector(".btn-submit"), document.querySelector(".btn-reset")];

function sub_event(){
alert('Submit button was clicked');
}

function rst_event(){
alert('Reset button was clicked');
}

buttons[0].addEventListener('click', sub_event);
buttons[1].addEventListener('click', rst_event);

