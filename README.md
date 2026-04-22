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
```
LearningPlaywrightFundamentals/
├── tests/
│   ├── 01_Basics/
│   │   ├── Lab209.spec.ts
│   │   └── Lab210_Test_Annotations.spec.ts
│   └── 02_First_Tests/
│       ├── 211_First_Running_Test.spec.ts
│       ├── 212_Browser_Context_Pages.spec.ts
│       ├── 213_MultipleContext.spec.ts
│       ├── 214_Multiple_Pages.spec.ts
│       ├── 215_Test_PW.spec.ts
│       ├── 216_Manual_Context.spec.ts
│       ├── 217_Manual_Context_withOptions.spec.ts
│       ├── 218_Context_Reuse.spec.ts
│       └── Task/
│           ├── 01_OneBrowser_MultipleContext.spec.ts
│           ├── 02_OneBrowser_MultipleContext_MultiplePages.spec.ts
│           └── 03_OneContext_MultiplePages.spec.ts
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

### Directory Breakdown
- **`01_Basics/`**: Fundamental Playwright concepts and initial lab exercises covering basic browser automation.
- **`02_First_Tests/`**: Advanced browser context management, page handling, and practical test execution scenarios.
  - **`Task/`**: Practice tasks and hands-on exercises for applying learned concepts.

## 🛠️ Configuration

### TypeScript Configuration
The project uses **TypeScript** for type safety and better development experience:
- `tsconfig.json`: TypeScript compiler configuration
- `@types/node`: Type definitions for Node.js

### Playwright Configuration
The project is currently configured to run on **Chromium** (Desktop Chrome) by default. You can modify `playwright.config.ts` to enable other browsers (Firefox, WebKit) or mobile emulations.

### Dependencies
- **@playwright/test**: ^1.59.1 - Playwright test framework
- **@types/node**: ^25.6.0 - Node.js type definitions

## 📚 Learning Path
The tests are structured as labs (e.g., `Lab209.spec.ts`, `Lab210_Test_Annotations.spec.ts`) to provide a step-by-step approach to mastering Playwright.
