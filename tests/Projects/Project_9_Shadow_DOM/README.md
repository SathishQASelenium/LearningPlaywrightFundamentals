# Project 9: Shadow DOM Handling

This project demonstrates how to interact with elements located within a Shadow DOM using Playwright.

## Overview

The goal of this project is to practice locating and interacting with elements that are encapsulated within Shadow DOMs. One of the primary advantages of Playwright is that its locators are designed to automatically pierce through Shadow DOMs, meaning you can interact with shadow elements as if they were in the regular DOM.

## Project Structure

- `SelectorsHub_Shadow_DOM.spec.ts`: A Playwright test file that interacts with the SelectorsHub Shadow DOM practice page.

## Code Explanation

The test script `SelectorsHub_Shadow_DOM.spec.ts` performs the following steps:

1. **Navigation**: It navigates to the SelectorsHub XPath practice page: `https://selectorshub.com/xpath-practice-page/`.
2. **Interacting with Shadow Elements**:
    - **Username Field**: Uses `page.getByTitle('user name field')` to locate and fill the username textbox.
    - **Pizza Name Field**: Uses `page.getByPlaceholder('Enter pizza name')` to locate and fill the pizza name textbox.
    - **Password Field**: Uses `page.getByPlaceholder('enter password')` to locate and fill the password textbox.

### Key Concept: Shadow DOM Piercing

In many other automation tools (like Selenium), interacting with elements inside a Shadow DOM requires special handling (e.g., using JavaScript executors or navigating the shadow root). However, Playwright's locators (such as `getByTitle`, `getByPlaceholder`, `locator()`, etc.) automatically search through all shadow roots in the page, making the tests cleaner and more maintainable.

## How to Run

To run the tests in this project, use the following command:

```bash
npx playwright test tests/Projects/Project_9_Shadow_DOM/SelectorsHub_Shadow_DOM.spec.ts
```
