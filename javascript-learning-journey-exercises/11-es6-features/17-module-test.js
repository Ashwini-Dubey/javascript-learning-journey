// Import those modules into a test file.

import { generateTestId } from "./utilities.js";
import { username, password } from "./testData.js";

login(username, password);

console.log("Test ID:", generateTestId());
