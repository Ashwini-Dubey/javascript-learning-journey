// Create three asynchronous operations.

async function waitTime1() {
  await new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Waited 2 seconds.");
      resolve("Success!");
    }, 2000);
  });
}

async function waitTime2() {
  await new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Waited 3 seconds.");
      resolve("Success!");
    }, 3000);
  });
}

async function waitTime3() {
  await new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Waited 4 seconds.");
      resolve("Success!");
    }, 4000);
  });
}

waitTime1();
waitTime2();
waitTime3();
