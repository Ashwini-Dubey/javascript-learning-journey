// Copy an object using spread.

const testCase = {
  testCaseID: "TC01",
  title: "Login",
  status: "Pass",
};

const testCaseCopy = { ...testCase };

console.log(testCaseCopy);
