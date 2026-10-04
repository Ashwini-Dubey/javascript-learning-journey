// Combine two arrays using spread.

const testCases = ["TC01","TC02","TC03","TC04","TC05"]
console.log("Test Cases: ",testCases)
const testScenarios = ["TS01","TS02","TS03","TS04","TS05"]
console.log("Test Scenarios",testScenarios)
const testPlan = [...testCases,...testScenarios]
console.log("Test Plan: ", testPlan)