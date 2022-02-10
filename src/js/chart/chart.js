import { getData, storageKeys } from '../local-storage-operations/store-data';
import { calculateIncome } from "../summary-window/calculate-income";
import { calculateNetGrossCosts } from "../summary-window/calculate-net-gross-costs";
import { calculateTotalZus } from "../summary-window/calculate-ZUS";
import { calculateVat } from "../summary-window/calculate-Vat";
import { calculateIncomeTax } from "../summary-window/calculate-income-tax";

const getEarnedValue = () => {
    const earnedValues = getData(storageKeys.appEarnedValue);
    const {
        writtenIntoPlace,
        net,
        gross,
    } = earnedValues;
    return net;
}

const calculateIncomePercent = () => {
    const net = getEarnedValue();
    const incomeValues = calculateIncome();

    const incomePercent = Number.parseFloat((incomeValues/net)*100).toFixed(2);
    return incomePercent;
}

const calculateCostsPercent = () => {
    const net = getEarnedValue();
    const {
        summaryNetValue
    } = calculateNetGrossCosts();
    const costsPercent = Number.parseFloat((summaryNetValue/net)*100).toFixed(2);
    return costsPercent;
}

const calculateZusPercent = () => {
    const net = getEarnedValue();
    const zusContributions = getData(storageKeys.appZusContributions);
    const totalZus = calculateTotalZus(zusContributions);
    const zusPercent = Number.parseFloat((totalZus/net)*100).toFixed(2);
    return zusPercent;
}

const calculateVatPercent = () => {
    const net = getEarnedValue();
    const vat = calculateVat();
    const vatPercent = Number.parseFloat((vat/net)*100).toFixed(2);
    return vatPercent;
}

const calculateIncomeTaxPercent = () => {
    const net = getEarnedValue();
    const incomeTax = calculateIncomeTax();
    const incomeTaxPercent = Number.parseFloat((incomeTax/net)*100).toFixed(2);
    return incomeTaxPercent;
}

export const updateChart = () => {
    const chart = Highcharts.chart('chartContainer', {
            chart: {
                backgroundColor: null,
                type: 'pie'
            },
            title: {
                text: 'Spendings chart',
                style: {
                    color: "#768293",
                    fontSize: "24px",
                }
            },

            accessibility: {
                announceNewData: {
                    enabled: true
                },
                point: {
                    valueSuffix: '%'
                }
            },

            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}: {point.y:.1f}%'
                    }
                }
            },
            series: [
                {
                    data: []
                }
            ]
    });

    const dataPercent = [
        {
            name: "Income",
            y: Number(calculateIncomePercent())
        },
        {
            name: "Costs",
            y: Number(calculateCostsPercent())
        },
        {
            name: "Zus",
            y: Number(calculateZusPercent())
        },
        {
            name: "Vat",
            y: Number(calculateVatPercent())
        },
        {
            name: "Income Tax",
            y: Number(calculateIncomeTaxPercent())
        }
    ];
    dataPercent.forEach(data => {
        if(data.y > 0){
            chart.series[0].addPoint({
                y: data.y,
                name: data.name
            });
        }
    });
}