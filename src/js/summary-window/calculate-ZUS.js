zusButtons = document.querySelectorAll(".zusType");

const reliefToStart = () => {
    console.log("Relief to start");
}

const reducedZus = () => {
    console.log("Reduced zus");
}

const noRelief = () => {
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
const calculateVAT = (key) => {
    const calculate = zusType.get(key);
    calculate();
}

zusButtons.forEach((input) => {
    input.addEventListener('click', () => {
        const key = returnButtonValue(input);
        calculateVAT(key);
    });
});