/*
Goal: Combine the total, passed, failed, pass percentage, and fail percentage into one summary.
*/
const testResults = [
  { id: "TC001", title: "Valid Login", status: "PASS" },
  { id: "TC002", title: "Invalid Password", status: "FAIL" },
  { id: "TC003", title: "Valid API Response", status: "PASS" },
  { id: "TC004", title: "User Profile", status: "FAIL" },
  { id: "TC005", title: "Logout", status: "PASS" },
];

// 1. Count passed & failed tests

let passedTests = 0;
let failedTests = 0;
let skippedTests = 0;

testResults.forEach(function (testCase) {
  if (testCase.status === "PASS") {
    passedTests++;
  } else if (testCase.status === "FAIL") {
    failedTests++;
  } else {
    skippedTests++;
  }
});

// 2. Calculate pass & fail percentage

const totalTests = testResults.length;
const passPercentage = (passedTests / totalTests) * 100;
const failPercentage = (failedTests / totalTests) * 100;

// 3. Display the result
console.log("===== Test Execution Summary =====");
console.log("Total Tests:", totalTests);
console.log("Passed Tests:", passedTests);
console.log("Pass Percentage:", passPercentage + "%");
console.log("Failed Tests:", failedTests);
console.log("Fail Percentage:", failPercentage + "%");
console.log("Skipped/Blocked Tests:", skippedTests);
