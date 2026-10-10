class LoginPage {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  login() {
    return `Login Attempted for ${this.username}`;
  }
}

export { LoginPage };
