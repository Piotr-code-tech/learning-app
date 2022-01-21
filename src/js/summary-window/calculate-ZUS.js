const zusButtons = document.querySelectorAll(".zusType");
const sicknessButton = document.querySelector(".sickenssState");

const setZusContributions = () => {
    return {
        retirement: 0,
        socialSecurity: 0,
        workAccident: 0,
        sickness: 0,
        healthy: 0
    };

}

const reliefToStart = () => {
    const zusContributions = setZusContributions();
    zusContributions.healthy = 381.81;
    console.log(zusContributions);
    console.log("Relief to start");
}

const reducedZus = () => {
    const zusContributions = setZusContributions();
    zusContributions.retirement = 163.97;
    zusContributions.socialSecurity = 67.20;
    zusContributions.workAccident = 14.03;
    zusContributions.healthy = 381.81;
    console.log(zusContributions);
    console.log("Reduced zus");
}

const noRelief = () => {
    const zusContributions = setZusContributions();
    zusContributions.retirement = 615.93;
    zusContributions.socialSecurity = 252.43;
    zusContributions.workAccident = 52.70;
    zusContributions.healthy = 381.81;
    console.log(zusContributions);
    console.log("No relief");
}

const zusType = new Map([
    [1,reliefToStart],
    [2,reducedZus],
    [3,noRelief]
]);

const returnButtonValue = (button) => {
    console.log(button.value);
    return Number(button.value);
}
const calculateZUS = (key) => {
    const calculate = zusType.get(key);
    calculate();
}

var active = false;

const toggle = (button) => {
    if(!active) {
    button.
    active = !active;
    }
    else{

    }
}

zusButtons.forEach((input) => {
    let active = false;
    input.addEventListener('click', () => {
        const key = returnButtonValue(input);
        calculateZUS(key);
        if(!active) {
            input.classList.remove('zusButtonsOff');
            input.classList.add('zusButtonsOn');
            active = !active;
            }
        else{
            input.classList.remove('zusButtonsOn');
            input.classList.add('zusButtonsOff');
            active = !active;
        }
        console.log(input);
    });
});



sicknessButton.addEventListener("click",() => {
    console.log("Sickness clicked!");
    }
);