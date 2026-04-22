# Learning Playwright Fundamentals

This project is dedicated to learning and practicing the fundamentals of end-to-end (E2E) testing using [Playwright](https://playwright.dev/). It contains a series of labs and exercises designed to build proficiency in automating browser interactions.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd LearningPlaywrightFundamentals
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

You can run the tests using the following commands:

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific folder (e.g., Basics)
```bash
npx playwright test tests/01_Basics
```

### Run tests in UI Mode
```bash
npx playwright test --ui
```

### View Test Report
After running tests, you can view the HTML report:
```bash
npx playwright show-report
```

## 📁 Project Structure
- `tests/`: Contains all test suites organized by module.
  - `01_Basics/`: Fundamental Playwright concepts and initial labs.
  - `02_First_Tests/`: Advanced browser context, page management and initial test execution.
- `playwright.config.ts`: Configuration for the Playwright test runner.
- `package.json`: Project dependencies and scripts.

## 🛠️ Configuration
The project is currently configured to run on **Chromium** (Desktop Chrome) by default. You can modify `playwright.config.ts` to enable other browsers (Firefox, WebKit) or mobile emulations.

## 📚 Learning Path
The tests are structured as labs (e.g., `Lab209.spec.ts`, `Lab210_Test_Annotations.spec.ts`) to provide a step-by-step approach to mastering Playwright.
