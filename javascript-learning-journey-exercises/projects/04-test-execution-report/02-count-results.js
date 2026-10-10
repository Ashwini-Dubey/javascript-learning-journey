/*
Goal: Calculate the total number of tests, passed tests, and failed tests.
*/

// 1. Create the test results array
const testResults = [
  {
    id: "TC001",
    title: "Valid Login",
    status: "PASS",
  },
  {
    id: "TC002",
    title: "Invalid Password",
    status: "FAIL",
  },
  {
    id: "TC003",
    title: "Valid API Response",
    status: "PASS",
  },
  {
    id: "TC004",
    title: "User Profile",
    status: "FAIL",
  },
  {
    id: "TC005",
    title: "Logout",
    status: "PASS",
  },
];

// 1.Count total tests.
const totalTests = testResults.length;

// 2. Count passed tests
let passedTests = 0;
let failedTests = 0;
testResults.forEach(function (testCase) {
  if (testCase.status === "PASS") {
    passedTests++;
  } else {
    failedTests++;
  }
});

// 3. Display the summary
console.log("Total Tests: ", totalTests);
console.log("Passed Tests: ", passedTests);
console.log("Failed Tests: ", failedTests);
