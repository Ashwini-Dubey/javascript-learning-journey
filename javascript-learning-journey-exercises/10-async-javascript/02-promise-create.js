// Create a Promise and store it in a variable
const promise = new Promise(function (resolve, reject) {
  // Simulate an asynchronous task
  setTimeout(function () {
    console.log("Async task is completed!");
    // Resolve the Promise after the task is completed
    resolve();
  }, 2000);
});
