import { calculateIncomeTax } from './calculate-income-tax';
import { calculateVat } from './calculate-Vat';

export const calculateTotalTax = () => {
    const incomeTax = calculateIncomeTax();
    const vatTax = calculateVat();
    const totalTax = incomeTax + vatTax;
    return totalTax;
}