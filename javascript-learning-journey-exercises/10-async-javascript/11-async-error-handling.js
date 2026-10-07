// Handle an asynchronous error using try/catch.

async function handleOps() {
  try {
    await new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Waited 2 seconds");
        reject("Operation Failed");
      }, 2000);
    });
  } catch (error) {
    console.log(error);
  }
}

handleOps();
