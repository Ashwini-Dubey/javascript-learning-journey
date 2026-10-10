/*
Goal: Combine your results into a clean report and list the failed test cases.

Output Format:

===== TEST EXECUTION REPORT =====
Total Tests: 5
Passed Tests: 3
Failed Tests: 2
Pass Percentage: 60%
Fail Percentage: 40%

===== FAILED TEST CASES =====
TC002 - Invalid Password
TC004 - User Profile

Overall Result: FAIL
*/
const testResults = [
  { id: "TC001", title: "Valid Login", status: "PASS" },
  { id: "TC002", title: "Invalid Password", status: "FAIL" },
  { id: "TC003", title: "Valid API Response", status: "PASS" },
  { id: "TC004", title: "User Profile", status: "FAIL" },
  { id: "TC005", title: "Logout", status: "PASS" },
];

// 1. Initialize counters
let passedTests = 0;
let failedTests = 0;
let skippedTests = 0;

// 2. Count results
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

// 4. Print report header and metrics
console.log("===== TEST EXECUTION REPORT =====");
console.log("Total Tests:", totalTests);
console.log("Passed Tests:", passedTests);
console.log("Failed Tests:", failedTests);
console.log("Pass Percentage:", passPercentage + "%");
console.log("Fail Percentage:", failPercentage + "%");

// 5. List failed test cases
console.log("\n===== FAILED TEST CASES =====");

testResults.forEach(function (testCase) {
  if (testCase.status === "FAIL") {
    console.log(`${testCase.id} - ${testCase.title}`);
  }
});

// 6. Print final outcome
if (testResults.every((testResult) => testResult.status === "PASS")) {
  console.log("Overall Result: PASS");
} else {
  console.log("Overall Result: FAIL");
}
