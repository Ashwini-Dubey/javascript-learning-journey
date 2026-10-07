// Create a Promise that rejects with "Failed".

const promise = new Promise(function (resolve, reject) {
  reject("Failed");
});
