/*
Task

Validate the userId from the response.

For example:

Expected User ID: 101
Actual User ID:   101
*/

const response = {
  status: 200,
  body: {
    userId: 101,
    name: "Ashwini",
    active: true,
  },
};

const expectedUserId = 102;

if (response.body.userId === expectedUserId) {
  console.log("Test Passed.");
} else {
  console.log("Test Failed.");
}
