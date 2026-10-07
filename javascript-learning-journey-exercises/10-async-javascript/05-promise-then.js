// Use .then() to consume a Promise.

// Create a Promise and store it in a variable
const promise = new Promise(function (resolve, reject) {
  // Simulate an asynchronous task
  setTimeout(function () {
    console.log("Async task is completed!");
    // Resolve the Promise after the task is completed
    resolve();
  }, 2000);
});

// Consume the Promise using .then()
promise.then(function () {
  // This runs after the Promise is resolved
  console.log("Promise Consumed!");
});

/////////////////////////////////////////////////////////////////////////////

// Create and consume a Promise without storing it in a variable
new Promise(function (resolve, reject) {
  // Simulate another asynchronous task
  setTimeout(function () {
    console.log("Async task2 is completed.");
    // Resolve the Promise after the task is completed
    resolve();
  }, 2000);
}).then(function () {
  // This runs after the second Promise is resolved
  console.log("Promise2 Consumed!");
});
