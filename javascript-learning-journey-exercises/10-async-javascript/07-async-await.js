// Convert a Promise-based function into async/await.

// Create a function that returns a Promise
function getResult() {
  // Create a new Promise
  return new Promise(function (resolve) {
    // Resolve the Promise with a successful result
    resolve("Success");
  });
}

// Create an async function to consume the Promise
async function consumeResult() {
  // Wait for the Promise to resolve and store the result
  const result = await getResult();

  // Print the resolved result
  console.log(result);
}

// Call the async function
consumeResult();
