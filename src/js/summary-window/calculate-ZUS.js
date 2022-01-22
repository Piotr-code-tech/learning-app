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
    zusContributions.retirement = 0;
    zusContributions.socialSecurity = 0;
    zusContributions.workAccident = 0;
    zusContributions.sickness = 0;
    return zusContributions;
}

const reducedZus = () => {
    const zusContributions = setZusContributions();
    zusContributions.retirement = 163.97;
    zusContributions.socialSecurity = 67.20;
    zusContributions.workAccident = 14.03;
    zusContributions.healthy = 381.81;
    zusContributions.sickness = 20.58;
    return zusContributions;
}

const noRelief = () => {
    const zusContributions = setZusContributions();
    zusContributions.retirement = 615.93;
    zusContributions.socialSecurity = 252.43;
    zusContributions.workAccident = 52.70;
    zusContributions.healthy = 381.81;
    zusContributions.sickness = 77.31;
    return zusContributions;
}

export const calculateTotalZus = (obj) => {
    let totalZus = 0;
    Object.values(obj).forEach((value) => {
        totalZus += value;
    });
    return totalZus;
}

const zusType = new Map([
    [1,reliefToStart],
    [2,reducedZus],
    [3,noRelief]
]);

export const returnButtonValue = (button) => {
    return Number(button.value);
}
export const calculateZUS = (key) => {
    let calculate = zusType.get(key);
    return calculate();
}