/*
This is your mini API test.

Now combine everything you've learned.

Your simulated test should have:
Status Validation: PASS
User ID Validation: PASS
Name Validation: PASS
Active Status Validation: PASS
Overall API Test: PASS

const response = {
    status: 200,
    body: {
        userId: 101,
        name: "Ashwini",
        active: true
    }
};
*/

// 1. Simulated API response
const response = {
  status: 200,
  body: {
    userId: 101,
    name: "Ashwini",
    active: true,
  },
};
// 2. Expected Values
const expectedStatus = 200;
const expectedUserId = 101;
const expectedName = "Ashwini";
const expectedActiveStatus = true;

// 3. Validate response status

function validateStatus() {
  if (response.status === expectedStatus) {
    return true;
  } else {
    return false;
  }
}

console.log(`Status Validation: ${validateStatus() ? "PASS" : "FAIL"}`);

// 4. Validate user ID

function validateUserID() {
  if (response.body.userId === expectedUserId) {
    return true;
  } else {
    return false;
  }
}

console.log(`User ID Validation: ${validateUserID() ? "PASS" : "FAIL"}`);

// 5. Validate name

function validateName() {
  if (response.body.name === expectedName) {
    return true;
  } else {
    return false;
  }
}

console.log(`Name Validation: ${validateName() ? "PASS" : "FAIL"}`);

// 6. Validate active status

function validateActiveStatus() {
  if (response.body.active === expectedActiveStatus) {
    return true;
  } else {
    return false;
  }
}

console.log(
  `Active Status Validation: ${validateActiveStatus() ? "PASS" : "FAIL"}`,
);

// 7. Run all validations and determine the overall result

function validateAPITest() {
  if (
    validateStatus() &&
    validateUserID() &&
    validateName() &&
    validateActiveStatus()
  ) {
    console.log("Overall API Test: PASS");
  } else {
    console.log("Overall API Test: FAIL");
  }
}

// 8. Execute the API test
validateAPITest();
