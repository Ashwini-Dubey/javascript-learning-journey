/*
Goal: Create an array containing five test cases. Each test case should have an id, a title, and a status.

Requirements:
- Create five test cases.
- Each test case must contain:
  id, title, status.
- Use PASS or FAIL for status.

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

console.log("Test Execution Results:");

testResults.forEach(function (testCase) {
  console.log(testCase);
});
