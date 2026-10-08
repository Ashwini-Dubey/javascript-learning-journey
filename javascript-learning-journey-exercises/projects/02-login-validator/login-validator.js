const username = "ashwinidubey";
const password = "password123";
const accountStatus = "ACTIVE";
const expectedUsername = "ashwinidubey";
const expectedPassword = "password123";

// Validate Username exists

if (username === "") {
  console.log("Username is empty.");
} else {
  console.log("Username is not empty.");
}

// Validate Password length

if (password.length >= 8) {
  console.log("Password is compliant.");
} else {
  console.log("Password must be 8-characters long.");
}

// Validate accountStatus is Active

if (accountStatus === "ACTIVE") {
  console.log("Account is active.");
} else {
  console.log("Account is not active.");
}

// Validate that the Credentials are valid.

if (username === expectedUsername && password === expectedPassword) {
  console.log("Credentials are valid.");
} else {
  console.log("Credentials are invalid.");
}

function login() {
  if (
    username != "" &&
    password.length >= 8 &&
    accountStatus === "ACTIVE" &&
    username === expectedUsername &&
    password === expectedPassword
  ) {
    return "Login Successful!";
  } else {
    return "Login Failed";
  }
}

console.log(login());
