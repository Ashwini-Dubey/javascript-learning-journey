const testCases = [
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
];

// Display all test cases

function displayAllTests() {
  testCases.forEach(function (testCase) {
    console.log(testCase);
  });
}

displayAllTests();

// Find a specific test case using its `id`.

console.log(testCases.find((testCase) => testCase.id === "TC001"));

// Return all test cases where the status is `"FAIL"`.

const failedTests = testCases.filter((testCase) => testCase.status === "FAIL");

// Count the number of test cases with status `"PASS"`.

const passedTests = testCases.filter((testCase) => testCase.status === "PASS");

const passedTestsCount = passedTests.length;
console.log("Number of test cases with status as PASS: ", passedTestsCount);

// Count the number of test cases with status `"FAIL"`.

const failedTestsCount = failedTests.length;

console.log("Number of test cases with status as FAIL: ", failedTestsCount);

// Calculate the percentage of test cases that passed.

const totalTestsCount = testCases.length;
console.log("Total Tests: ", totalTestsCount);

const passPercentOfTests = (passedTestsCount / totalTestsCount) * 100;
console.log("Percentage of test cases that Passed: ", passPercentOfTests, "%");
