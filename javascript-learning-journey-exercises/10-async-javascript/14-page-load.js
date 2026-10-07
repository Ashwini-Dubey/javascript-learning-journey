// Simulate a test that waits for a page to load.

async function loadPage() {
  await new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Web Page is loading...Please wait.");
      resolve();
    }, 2000);
  });

  console.log("Page loaded successfully!");
}

loadPage();
