// Create an async function that waits for 2 seconds.
async function waitTime() {
  // Wait for the Promise to resolve
  await new Promise(function (resolve) {
    // Resolve the Promise after 2 seconds
    setTimeout(function () {
      resolve("Success");
    }, 2000);
  });

  // This runs after the 2-second wait
  console.log("Waited for 2 seconds.");
}

waitTime();
