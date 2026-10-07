// Create a Promise that resolves with "Success".
const promise = new Promise((resolve, reject) => {
    resolve("Success");
});


promise.then(result => {
    console.log(result);
});