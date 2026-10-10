/*
Goal: Calculate the percentage of tests that passed.
*/
const testResults = [
  { id: "TC001", title: "Valid Login", status: "PASS" },
  { id: "TC002", title: "Invalid Password", status: "FAIL" },
  { id: "TC003", title: "Valid API Response", status: "PASS" },
  { id: "TC004", title: "User Profile", status: "FAIL" },
  { id: "TC005", title: "Logout", status: "PASS" },
];

// 1. Count passed tests
let passedTests = 0;
console.log("Passed Test Cases:");

testResults.forEach(function (testCase) {
  if (testCase.status === "PASS") {
    passedTests++;
  }
});

// 2. Calculate pass percentage
const totalTests = testResults.length;
const passPercentage = (passedTests / totalTests) * 100;

// 3. Display the result
console.log("Total Tests:", totalTests);
console.log("Passed Tests:", passedTests);
console.log("Pass Percentage:", passPercentage + "%");
