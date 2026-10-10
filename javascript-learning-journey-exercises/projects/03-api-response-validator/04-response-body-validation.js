/*
Validate:

userId
name
active
*/

const response = {
  status: 200,
  body: {
    userId: 101,
    name: "Ashwini",
    active: true,
  },
};

const expectedName = "Ashwini";
const expectedUserId = 101;
const expectedActiveStatus = true;

if (
  response.body.userId === expectedUserId &&
  response.body.name === expectedName &&
  response.body.active === expectedActiveStatus
) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
