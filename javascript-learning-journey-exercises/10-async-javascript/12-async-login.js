/*
Create:

async function login()
*/

async function login() {
  const result = await new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Login Successful!");
      resolve("Success");
    }, 2000);
  });

  console.log(result);
}

login();
