// Create a program to calculate test pass percentage.

totalTestCases = 120;
passedTestCases = 74;
failedTestCases = totalTestCases - passedTestCases;

passPercentage = (passedTestCases / totalTestCases) * 100;

console.log("Pass Percentage: " + passPercentage + "%");