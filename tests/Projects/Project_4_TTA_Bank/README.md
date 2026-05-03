# Project 4: TTA Bank Automation

## Overview
This project focuses on automating the core banking functionalities of the **TTA Bank Digital** application. The primary goal is to verify the integrity of fund transfers and ensure that account balances are accurately updated.

## Test Scenario: Fund Transfer Verification
The project implements an end-to-end test to verify that the account balance is correctly reduced after a successful fund transfer.

**Test Steps:**
1. **Account Creation:** Navigate to the TTA Bank portal and sign up for a new account.
2. **Balance Validation:** Verify the initial opening balance is **$50,000.00**.
3. **Transfer Funds:** Navigate to the 'Transfer Funds' section and transfer **$5,000** to a specified account.
4. **Confirmation:** Review and confirm the transfer details.
5. **Final Balance Validation:** Return to the Dashboard and verify the balance has been reduced to **$45,000.00**.
6. **Session Termination:** Sign out of the application.

## Technical Implementation
- **Tooling:** Playwright
- **Language:** TypeScript
- **Key Locators:** Used `getByRole`, `getByPlaceholder`, and CSS selectors for balance validation.
- **Test File:** `tests/projects/project_4_TTA_Bank/TTA_Bank.spec.ts`

## Execution Results
The latest test run was successful.

- **Status:** ✅ Passed
- **Run ID:** `20260503_085450`
- **Duration:** 8s
- **Environment:** UAT (Chromium)

### Evidence
The latest run result and screenshots can be found in the report:
`tta-report/report_20260503_085450.html`

**Latest Screenshot:**
![TTA Bank Test Result]
<img width="1918" height="845" alt="image" src="https://github.com/user-attachments/assets/f9993c7d-16a1-405d-a1b3-a08f6e66b93f" />
