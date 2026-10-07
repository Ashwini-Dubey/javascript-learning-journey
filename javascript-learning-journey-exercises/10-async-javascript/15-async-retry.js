// Create a retry mechanism using async/await.
async function retryOps() {
  let attempts = 1;
  let maxAttempts = 3;

  while (attempts <= maxAttempts) {
    try {
      await new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log("Retry Attempt:", attempts);
          reject("Failed");
        }, 2000);
      });
      break;
    } catch (error) {
      console.log(error);
    }
    attempts++;
  }
}

retryOps();
