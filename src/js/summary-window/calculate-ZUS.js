export const ZUS_TYPE = {
    RELIEF_TO_START: 'RELIEF_TO_START',
    REDUCED_ZUS: 'REDUCED_ZUS',
    NO_RELIEF: 'NO_RELIEF',
}

const reliefToStart = {
    healthy: 381.81,
    retirement: 0,
    socialSecurity: 0,
    workAccident: 0,
    sickness: 0,
}

const reducedZus = {
    retirement: 163.97,
    socialSecurity: 67.20,
    workAccident: 14.03,
    healthy: 381.81,
    sickness: 20.58,
}

const noRelief = {
    retirement: 615.93,
    socialSecurity: 252.43,
    workAccident: 52.70,
    healthy: 381.81,
    sickness: 77.31,
}

export const calculateTotalZus = (obj) => {
    let totalZus = 0;
    Object.values(obj).forEach((value) => {
        totalZus += value;
    });
    return totalZus;
}

const zusType = new Map([
    [ZUS_TYPE.RELIEF_TO_START, reliefToStart],
    [ZUS_TYPE.REDUCED_ZUS, reducedZus],
    [ZUS_TYPE.NO_RELIEF, noRelief]
]);

export const returnButtonValue = (button) => {
    const value = button.value;
    return value;
}
export const calculateZus = (key) => {
    const zusContributions = zusType.get(key);
    return zusContributions;
}