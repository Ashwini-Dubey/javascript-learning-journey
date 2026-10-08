/*
Create a basic Page Object containing:

username
password
loginButton
*/

class LoginPage {
  constructor() {
    this.username = "This is username";
    this.password = "This is password";
    this.loginButton = "This is login button";
  }
}

const loginPage = new LoginPage();
console.log(loginPage.username);
console.log(loginPage.password);
console.log(loginPage.loginButton);
