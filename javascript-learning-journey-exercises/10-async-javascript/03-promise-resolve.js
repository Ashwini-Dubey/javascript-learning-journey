
// Create a Promise that resolves with "Success" using function.

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task3 is completed.");
    resolve("Success");
  }, 2000);
});

promise2.then(function (result) {
  console.log(result);
});

/////////////////////////////////////////////////////////////////////////////

// Create a Promise that resolves with "Success" using arrow function.

const promise3 = new Promise((resolve, reject) => {
  resolve("Success");
});

promise2.then((result) => {
  console.log(result);
});
