// Use some() to determine whether at least one test failed.

testResults = ["PASS","FAIL","PASS","PASS"]

console.log(testResults.some(testResult => testResult === "FAIL"));