const readlineSync = require('readline-sync');

class SalaryCalculator {
    constructor(basicSalary, benefits) {
        this.basicSalary = basicSalary;
        this.benefits = benefits;
        this.grossSalary = this.calculateGrossSalary();
        this.nhifDeduction = this.calculateNHIFDeduction();
        this.nssfDeduction = this.calculateNSSFDeduction();
        this.taxableIncome = this.calculateTaxableIncome();
        this.payee = this.calculatePAYE();
        this.netSalary = this.calculateNetSalary();
    }

    calculateGrossSalary() {
        return this.basicSalary + this.benefits;
    }

    calculateNHIFDeduction() {
        const grossSalary = this.grossSalary;
        if (grossSalary <= 5999) return 150;
        if (grossSalary <= 7999) return 300;
        if (grossSalary <= 11999) return 400;
        if (grossSalary <= 14999) return 500;
        if (grossSalary <= 19999) return 600;
        if (grossSalary <= 24999) return 750;
        if (grossSalary <= 29999) return 850;
        if (grossSalary <= 34999) return 900;
        if (grossSalary <= 39999) return 950;
        if (grossSalary <= 44999) return 1000;
        if (grossSalary <= 49999) return 1100;
        if (grossSalary <= 59999) return 1200;
        if (grossSalary <= 69999) return 1300;
        if (grossSalary <= 79999) return 1400;
        if (grossSalary <= 89999) return 1500;
        if (grossSalary <= 99999) return 1600;
        return 1700;
    }

    calculateNSSFDeduction() {
        const grossSalary = this.grossSalary;
        const tier1 = Math.min(grossSalary, 6000) * 0.06;
        const tier2 = Math.max(0, Math.min(grossSalary - 6000, 12000)) * 0.06;
        return tier1 + tier2;
    }

    calculateTaxableIncome() {
        return this.grossSalary - this.nssfDeduction;
    }

    calculatePAYE() {
        const monthlyTaxablePay = this.taxableIncome;
        let paye = 0;
        
        if (monthlyTaxablePay <= 24000) {
            paye = monthlyTaxablePay * 0.1;
        } else if (monthlyTaxablePay <= 32333) {
            paye = 24000 * 0.1 + (monthlyTaxablePay - 24000) * 0.25;
        } else if (monthlyTaxablePay <= 500000) {
            paye = 24000 * 0.1 + (32333 - 24000) * 0.25 + (monthlyTaxablePay - 32333) * 0.3;
        } else if (monthlyTaxablePay <= 800000) {
            paye = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (monthlyTaxablePay - 500000) * 0.325;
        } else {
            paye = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (800000 - 500000) * 0.325 + (monthlyTaxablePay - 800000) * 0.35;
        }

        return paye;
    }

    calculateNetSalary() {
        return this.grossSalary - this.nhifDeduction - this.nssfDeduction - this.payee;
    }

    printDetails() {
        console.log(`Basic Salary: Ksh ${this.basicSalary}`);
        console.log(`Benefits: Ksh ${this.benefits}`);
        console.log(`Gross Salary: Ksh ${this.grossSalary}`);
        console.log(`NHIF Deduction: Ksh ${this.nhifDeduction}`);
        console.log(`NSSF Deduction: Ksh ${this.nssfDeduction}`);
        console.log(`PAYE (Tax): Ksh ${this.payee}`);
        console.log(`Net Salary: Ksh ${this.netSalary}`);
    }
}

// Getting user inputs
let basicSalary = parseFloat(readlineSync.question('Enter your basic salary: '));
let benefits = parseFloat(readlineSync.question('Enter your benefits: '));

// Create an instance of the SalaryCalculator class
const salaryCalculator = new SalaryCalculator(basicSalary, benefits);

// Print the details
salaryCalculator.printDetails();
