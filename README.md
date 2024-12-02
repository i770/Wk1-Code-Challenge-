Code Challenges
Table of Contents
Speed Detector
Net Salary Calculator
Student Grade
Extra: Bubble Sort
Extra: Staircase
Extra: Volume of a Cylinder
Speed Detector
Description
A program that takes the speed of a car as input. If the speed is less than 70, it prints “Ok”. For every 5 km/s above the speed limit (70), 
it gives the driver one demerit point and prints the total number of demerit points. If the driver gets more than 12 points, the program prints “License suspended”.

Usage

const speed = 80;
speedDetector(speed);

Net Salary Calculator
Description
A program that calculates an individual’s Net Salary by getting the inputs of basic salary and benefits. 
It calculates the payee (Tax), NHIF deductions, NSSF deductions, gross salary, and net salary based on the provided rates.

Usage

const basicSalary = 50000; 
const benefits = 10000;
const calculator = new SalaryCalculator(basicSalary, benefits);
calculator.printDetails();


Student Grade
Description
A program that prompts the user to input student marks (0-100) and outputs the corresponding grade:

A: 80-100
B: 60-79
C: 50-59
D: 40-49
E: 0-39

