/*
Logical Operators:
1. && (Logical AND)
2. || (Logical OR)
3. ! (Logical NOT)
*/


// Sample test data (like UI/API conditions)
let isLoginSuccessful = true;
let isDashboardLoaded = true;

let statusCode = 200;
let responseTime = 1800;

let isUserBlocked = false;

// 1. && (Logical AND)
// Both conditions must be TRUE
console.log("AND (&&):", isLoginSuccessful && isDashboardLoaded);
// true → both are true, so test passes

// Real QA usage example
if (statusCode === 200 && responseTime < 2000) {
    console.log("API Test Passed (AND condition)");
}

// 2. || (Logical OR)
// At least one condition must be TRUE
let isMobile = false;
let isDesktop = true;

console.log("OR (||):", isMobile || isDesktop);
// true → one is true

// Real QA usage example
if (statusCode === 200 || statusCode === 201) {
    console.log("API accepted response");
}

// 3. ! (Logical NOT)
// Reverses the condition

console.log("NOT (!):", !isUserBlocked);
// true → because false becomes true

// Real QA usage example
if (!isUserBlocked) {
    console.log("User is allowed to login");
}