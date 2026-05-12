# Project 8: Flipkart SVG Search

This project demonstrates how to interact with SVG elements and perform search-based automation on Flipkart using Playwright.

## Purpose
The primary goal of this project is to automate the process of finding the cheapest Mac mini on Flipkart. It specifically showcases how to handle SVG icons as clickable elements and how to sort search results to identify the lowest price.

## Implementation Details

### Test Scenario: `Flipkart_Macmini_Search.spec.ts`
The test performs the following steps:
1. **Search Initiation**: Navigates to the Flipkart search page and enters "macmini" into the search input.
2. **SVG Interaction**: Instead of clicking a traditional button, the test identifies and clicks the search icon (an `<svg>` element).
3. **Sorting**: Interacts with the "Price -- Low to High" sorting option to ensure the cheapest products appear first.
4. **Data Extraction**:
   - Locates the first product in the sorted list using an XPath selector that filters for products containing "CPU" in their data ID.
   - Validates the visibility of the product title and price.
   - Logs the title and the price of the cheapest Mac mini to the console.

## Key Techniques Used
- **SVG Locators**: Using `page.locator('svg')` to interact with vector graphics elements.
- **Dynamic Waiting**: Using `waitForLoadState('networkidle')` to ensure results are fully loaded before proceeding.
- **XPath Selection**: Using complex XPath selectors to target specific product elements within the Flipkart search results grid.
- **Sorting**: Simulating user interaction to organize data by price.

## Reporting and Artifacts
The project includes a custom reporting mechanism located in the `tta-report` directory.

- **Execution Reports**: Detailed HTML reports (`index.html` and timestamped reports) provide a comprehensive view of the test execution.
- **Visual Evidence**:
  - **Screenshots**: Captured images of the page state during execution are stored in the `screenshots/` folder.
  - **Videos**: Full video recordings of the test execution are available in the `videos/` folder for playback and debugging.
  - **Traces**: Playwright traces for deep-dive analysis are stored in the `traces/` folder.

## How to Run
Run the test using the Playwright test runner:
```bash
npx playwright test tests/Projects/Project_8_Flipkart_SVG/Flipkart_Macmini_Search.spec.ts
```
