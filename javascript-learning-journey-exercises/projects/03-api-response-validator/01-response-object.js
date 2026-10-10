/*
Task

Create a simulated API response object.

It should contain:

HTTP status
Response body
User ID
User name
Active status

Practice

Try accessing:

response.status
response.body
response.body.userId
response.body.name
response.body.active
*/

const response = {
  status: 200,
  body: {
    userId: 101,
    name: "Ashwini",
    active: true,
  },
};

// Complete Response
console.log("Response: ", response);

// Extraction of Status from Response
console.log("HTTP Status: ", response.status);

// Extraction of body from Response
console.log("Response Body: ", response.body);

// Extraction of user id from Response
console.log("User ID: ", response.body.userId);

// Extraction of name from Response
console.log("Name: ", response.body.name);

// Extraction of active status from Response
console.log("Active Status: ", response.body.active);
