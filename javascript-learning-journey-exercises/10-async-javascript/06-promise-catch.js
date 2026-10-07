// Use .catch() to handle an error.

const promise = new Promise(function (resolve, reject) {
  reject("Failed");
});

promise.catch(function (error) {
  console.log(error);
});
