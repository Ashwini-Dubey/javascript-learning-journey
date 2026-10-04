/* Filter failed tests from:

[
  "PASS",
  "FAIL",
  "PASS",
  "FAIL"
]

*/

const testResults = ["PASS", "FAIL", "PASS", "FAIL"]


console.log(testResults.filter(resultChecker => {return resultChecker === "FAIL"}))