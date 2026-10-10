# 📘 JavaScript Learning Journey

A structured repository to learn and practice **JavaScript fundamentals, logic building, and core programming concepts** through hands-on examples, exercises and small projects, with a focus on **QA automation** (Playwright for Web & API testing).

---

## 🚀 About This Repository

This repository contains my JavaScript learning progress. It has two tracks that grow side by side:

| Track                    | Folder(s)                                                                           | What it is                                                                                |
| ------------------------ | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Lessons**              | `01_…` to `10_…` at the repo root                                                   | Concept-by-concept lesson files (`L01` to `L41`) plus a few small programs (`P01`, `P02`) |
| **Exercises & projects** | [`javascript-learning-journey-exercises/`](./javascript-learning-journey-exercises) | 11 modules of numbered practice exercises (158 files) and 5 mini projects                 |

It is continuously updated as I progress from basics to advanced topics.

---

## 🗂️ Repository Structure

```text
javascript-learning-journey/
├── 01_Basics_Variables_DataTypes/      # Lessons
├── 02_Operators/
├── 03_TypeConversions/
├── 04_ControlFlow/
├── 05_Loops/
├── 06_Functions/
├── 07_DataStructures/
├── 08_ErrorHandling/
├── 09_OOPS/
├── 10_AsyncJS/
└── javascript-learning-journey-exercises/
    ├── 01-javascript-introduction/     # Exercises, 11 modules
    ├── 02-data-types-variables/
    ├── 03-operators-expressions/
    ├── 04-control-flow/
    ├── 05-loops/
    ├── 06-functions/
    ├── 07-arrow-functions/
    ├── 08-arrays/
    ├── 09-objects/
    ├── 10-async-javascript/
    ├── 11-es6-features/
    └── projects/                       # Mini projects, 5 so far
```

---

## 📚 Lessons

Lesson files are named `L<number>_<Topic>.js`; small practice programs are named `P<number>_<Name>.js`.

| Folder                                                             | Topics                                                                                                                           | Status         |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| [`01_Basics_Variables_DataTypes`](./01_Basics_Variables_DataTypes) | Hello World, variables, data types                                                                                               | ✅ Done        |
| [`02_Operators`](./02_Operators)                                   | Arithmetic, assignment, logical, comparison, other operators, prefix/postfix; program: validate an API response                  | ✅ Done        |
| [`03_TypeConversions`](./03_TypeConversions)                       | Implicit and explicit type conversion                                                                                            | ✅ Done        |
| [`04_ControlFlow`](./04_ControlFlow)                               | `if`, `if-else`, `else-if`, `switch`; programs: grade calculator, HTTP status messages                                           | ✅ Done        |
| [`05_Loops`](./05_Loops)                                           | `for`, `while`, `for-of`, `for-in`                                                                                               | ✅ Done        |
| [`06_Functions`](./06_Functions)                                   | Declarations, expressions, arrow functions, parameters, return values, defaults                                                  | ✅ Done        |
| [`07_DataStructures`](./07_DataStructures)                         | Arrays, `push`/`pop`, `map`, `filter`, `reduce`, chaining, `Map`, objects, object methods, nested objects, destructuring, spread | ✅ Done        |
| [`08_ErrorHandling`](./08_ErrorHandling)                           | `try`/`catch` written; `catch`, `throw`, `finally` files created                                                                 | 🚧 In progress |
| [`09_OOPS`](./09_OOPS)                                             | Classes, constructor, inheritance (files created)                                                                                | ⏳ Planned     |
| [`10_AsyncJS`](./10_AsyncJS)                                       | Callbacks, Promises, `async`/`await`, Fetch API (files created)                                                                  | ⏳ Planned     |

> Async JavaScript and basic classes are already practised in the exercises track (modules 10 and 11 below). The lesson files for them will follow.

---

## 🧪 Exercises

Each module in [`javascript-learning-journey-exercises`](./javascript-learning-journey-exercises) holds small numbered files (`01-…`, `02-…`) that each solve one task. Many use QA-style examples such as test results, login validation, HTTP status codes and browser configuration.

| Module                                                                                             | Files | What it covers                                                                                        |
| -------------------------------------------------------------------------------------------------- | :---: | ----------------------------------------------------------------------------------------------------- |
| [`01-javascript-introduction`](./javascript-learning-journey-exercises/01-javascript-introduction) |  11   | `console.log`, strings, simple test-report output                                                     |
| [`02-data-types-variables`](./javascript-learning-journey-exercises/02-data-types-variables)       |  14   | `let` / `const`, `typeof`, type conversion and coercion                                               |
| [`03-operators-expressions`](./javascript-learning-journey-exercises/03-operators-expressions)     |  14   | Arithmetic, comparison, `===` vs `==`, `&&` / `\|\|`, pass percentage                                 |
| [`04-control-flow`](./javascript-learning-journey-exercises/04-control-flow)                       |  13   | `if` / `else`, `switch`, ternary, HTTP status checks                                                  |
| [`05-loops`](./javascript-learning-journey-exercises/05-loops)                                     |  14   | `for`, `while`, `break`, `continue`, retry loops                                                      |
| [`06-functions`](./javascript-learning-journey-exercises/06-functions)                             |  14   | Parameters, return values, login and email validation                                                 |
| [`07-arrow-functions`](./javascript-learning-journey-exercises/07-arrow-functions)                 |  12   | Arrow syntax and converting normal functions                                                          |
| [`08-arrays`](./javascript-learning-journey-exercises/08-arrays)                                   |  18   | `push`, `pop`, `includes`, `forEach`, `map`, `filter`, `find`, `every`, `some`, spread, `Set`, `sort` |
| [`09-objects`](./javascript-learning-journey-exercises/09-objects)                                 |  16   | Object literals, dot/bracket access, nesting, destructuring, `Date`                                   |
| [`10-async-javascript`](./javascript-learning-journey-exercises/10-async-javascript)               |  15   | `setTimeout`, Promises, `.then()` / `.catch()`, `async` / `await`, retry                              |
| [`11-es6-features`](./javascript-learning-journey-exercises/11-es6-features)                       |  17   | Template literals, destructuring, spread, modules, classes, a basic Page Object                       |

---

## 🛠️ Projects

Mini projects live in [`javascript-learning-journey-exercises/projects`](./javascript-learning-journey-exercises/projects). They combine several concepts into one small program.

| #   | Project                                                                                              | What it does                                                                                           | Status        |
| --- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------- |
| 01  | [Test Case Manager](./javascript-learning-journey-exercises/projects/01-test-case-manager)           | Stores test cases as objects; finds, filters and counts them; calculates pass percentage               | ✅ Done       |
| 02  | [Login Validator](./javascript-learning-journey-exercises/projects/02-login-validator)               | Validates username, password length, account status and credentials                                    | ✅ Done       |
| 03  | [API Response Validator](./javascript-learning-journey-exercises/projects/03-api-response-validator) | Builds a simulated API response and validates status, user ID, name and active flag in a mini API test | ✅ Done       |
| 04  | [Test Execution Report](./javascript-learning-journey-exercises/projects/04-test-execution-report)   | Counts results, pass percentage, failed tests, summary and report                                      | ⏳ Scaffolded |
| 05  | [Mini Page Object Model](./javascript-learning-journey-exercises/projects/05-mini-page-object-model) | `LoginPage` and `HomePage` page objects with test data, utilities and a test                           | ⏳ Scaffolded |

---

## 📚 Topics Covered

- Variables & Data Types, type conversion
- Operators (Arithmetic, Assignment, Logical, Comparison, Prefix/Postfix)
- Conditional Statements (`if`, `switch`, ternary)
- Loops (`for`, `while`, `for-of`, `for-in`)
- Functions (declarations, expressions, arrow functions)
- Arrays & Array Methods (`map`, `filter`, `reduce`, `find`, `every`, `some`)
- Objects, destructuring, spread, `Map` and `Set`
- Error handling (`try` / `catch`)
- Asynchronous JavaScript (timers, Promises, `async` / `await`)
- ES6 features (template literals, modules, classes)
- Problem Solving & Logic Building with QA-style scenarios

---

## 🧠 Purpose of This Repo

- Strengthen JavaScript fundamentals
- Improve logical thinking
- Build the JavaScript needed for **QA automation**: Playwright for Web & API testing
- Build coding confidence for interviews

---

## 🛠️ Tech Stack

- JavaScript (ES6+)
- Node.js (for running scripts locally)

---

## ▶️ How to Run

Run any JavaScript file using Node.js:

```bash
node filename.js
```

For example:

```bash
node 05_Loops/L14_Loop_For.js
node javascript-learning-journey-exercises/projects/03-api-response-validator/06-api-test.js
```

A few things to know:

- **ES modules:** the module files in `11-es6-features` (`07-math.js`, `08-app.js`, `15`, `16`, `17`) use `import` / `export`. They run directly on recent Node versions (tested on v22). On older versions, add a `package.json` containing `{ "type": "module" }` or rename the files to `.mjs`.
- **Timers:** `10-async-javascript/01-set-timeout.js` starts a `setInterval` that never ends. Press `Ctrl + C` to stop it.
- **Placeholders:** some lesson files in `08_ErrorHandling`, `09_OOPS` and `10_AsyncJS`, and the files in projects 04 and 05, are created but still empty.

---

## 📈 Progress Tracker

- [x] Basics
- [x] Operators
- [x] Type Conversions
- [x] Control Flow
- [x] Loops
- [x] Functions (normal & arrow)
- [x] Arrays & Array Methods
- [x] Objects & Data Structures
- [x] Asynchronous JavaScript basics (exercises track)
- [x] ES6 features basics (exercises track)
- [x] Mini projects 01 to 03
- [ ] Error Handling (in progress)
- [ ] OOP lessons: classes, constructor, inheritance
- [ ] Async lessons: callbacks, Promises, `async` / `await`, Fetch API
- [ ] Mini projects 04 and 05
- [ ] Advanced JavaScript Concepts

---

## 📌 Future Additions

- Finish error handling, OOP and async lessons
- Complete the Test Execution Report and Mini Page Object Model projects
- API calls using `fetch`
- Playwright basics: first UI test, locators, and an API test
- DOM Manipulation
- Interview coding questions

---

## 🤝 Contributions

This is a personal learning repository. Suggestions and feedback are welcome through issues or pull requests.
