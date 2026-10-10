/*
Goal: Calculate the percentage of tests that failed.
*/
const testResults = [
  { id: "TC001", title: "Valid Login", status: "PASS" },
  { id: "TC002", title: "Invalid Password", status: "FAIL" },
  { id: "TC003", title: "Valid API Response", status: "PASS" },
  { id: "TC004", title: "User Profile", status: "FAIL" },
  { id: "TC005", title: "Logout", status: "PASS" },
];

// 1. Count failed tests

let failedTests = 0;
console.log("Failed Test Cases:");

testResults.forEach(function (testCase) {
  if (testCase.status === "FAIL") {
    failedTests++;
    console.log(testCase.id, "-", testCase.title);
  }
});

// 2. Calculate fail percentage

const totalTests = testResults.length;
const failPercentage = (failedTests / totalTests) * 100;

// 3. Display the result
console.log("Total Tests:", totalTests);
console.log("Failed Tests:", failedTests);
console.log("Fail Percentage:", failPercentage + "%");
