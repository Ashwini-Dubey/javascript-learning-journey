import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";
import { testData } from "../data/TestData.js";
import { printTestMessage } from "../utils/TestUtils.js";

function runLoginTests() {
  printTestMessage("Starting login test...");

  const loginPage = new LoginPage(testData.username, testData.password);

  console.log(loginPage.login());

  const homepage = new HomePage();

  console.log(homepage.welcome(testData.username));
}

export { runLoginTests };
