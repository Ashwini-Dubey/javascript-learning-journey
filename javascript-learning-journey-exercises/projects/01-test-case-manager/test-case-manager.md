# Test Case Manager

## Task

Create a `testCases` array containing test case objects:

```javascript
const testCases = [
  {
    id: "TC001",
    title: "Valid Login",
    status: "PASS",
  },
  {
    id: "TC002",
    title: "Invalid Password",
    status: "FAIL",
  },
];
```

## Implement Functions

Create functions to perform the following operations:

1. **Display all tests**
   - Display all test cases.

2. **Find a test**
   - Find a specific test case using its `id`.

3. **Filter failed tests**
   - Return all test cases where the status is `"FAIL"`.

4. **Count PASS**
   - Count the number of test cases with status `"PASS"`.

5. **Count FAIL**
   - Count the number of test cases with status `"FAIL"`.

6. **Calculate pass percentage**
   - Calculate the percentage of test cases that passed.

### Expected Concepts

Practice using:

- Arrays
- Objects
- Functions
- `find()`
- `filter()`
- `length`
- `forEach()`
- Basic calculations
- Template literals
