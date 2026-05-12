# Mastery of Playwright: A Learning Journey

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![Playwright Version](https://img.shields.io/badge/Playwright-v1.59.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.0+-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

Welcome to my digital laboratory for End-to-End (E2E) testing. This repository is a documented journey of mastering **Playwright**, progressing from foundational browser interactions to complex context management, precision locators, and advanced DOM handling.

---

## The Learning Roadmap

I've structured this project as a structured curriculum. Each module represents a specific skill set acquired during the learning process.

### 🟢 Stage 1: The Foundations (`01_Basics`)
*Focusing on the core mechanics of how Playwright interacts with the web.*
- **Key Labs**:
  - `Lab209.spec.ts`: Core interaction patterns.
  - `Lab210_Test_Annoations.spec.ts`: Mastering test annotations for better suite organization.
- **Tooling**: Includes `Util.ts` for shared helper logic.

### 🔵 Stage 2: Context & State (`02_First_Tests`)
*Moving beyond a single page to simulate multi-user scenarios and isolated environments.*
- **Core Concepts**: `BrowserContext`, multi-page handling, and manual context configuration.
- **Practical Application**:
  - `211` through `218`: Progressing from first runs to advanced context reuse.
  - **Tasks**: Deep dives into `OneBrowser_MultipleContext` and `OneContext_MultiplePages` scenarios.

### 🔴 Stage 3: Precision & Scale (`03_Locators_Commands`)
*The art of writing robust selectors and mastering navigation commands.*
- **Core Concepts**: Advanced Locators, `goto` commands, and real-world automation.
- **Applied Projects**:
  - `219` to `222`: Testing diverse sites including `automation.vwo.com` and `Command IQ`.
  - `223`: Mastering XPath for complex DOM traversal.
  - `224`: Using `getByRole` for accessible and robust element targeting.
  - `225`: CSS selectors for precision targeting.
  - `226`: Interaction patterns with `pressSequentially`.
  - `227`: Managing browser cookies and state.
  - **Capstone Projects**: 
    - `Project2_Cura_Navigation.spec.ts` — a complete automation flow for Cura Healthcare.
    - `Project3_App.vwo.com.spec.ts` — comprehensive testing for app.vwo.com.
    - `Project3_vwo.com_FreeTrailInvalidEmail.spec.ts` — specialized edge-case testing for VWO.

### 🟠 Stage 4: Session & State Persistence (`04_Session_Storage`)
*Deep dive into maintaining user sessions and persisting state across test runs.*
- **Core Concepts**: Session storage, state saving/loading, and authenticated flows.
- **Practical Application**:
  - `228`: Session management fundamentals.
  - `229`: Applying session persistence to `app.vwo.com`.

### 🟤 Stage 5: Advanced Reporting (`05_Allure_Reporting`)
*Mastering professional reporting and comprehensive project automation.*
- **Reporting Framework**: Integration of **Allure Reporting** for detailed test visibility and stakeholder communication.
- **Custom Tooling**: Implementation of `utils/CustomTTAReporter.ts` to enhance report metadata.
- **Artifacts**: Automated generation of screenshots, videos, and trace files for every test execution.

### ⚪ Stage 6: Multiple Elements (`06_Multiple_Element`)
*Mastering handling of multiple similar elements with dynamic handling patterns.*
- **Core Concepts**: Handling arrays of elements, dynamic element waiting, and batch operations.
- **Practical Application**:
  - `231`: Working with multiple elements efficiently.

### 🩷 Stage 7: Web Tables (`07_WebTables`)
*Deep dive into table interactions including dynamic content and data extraction.*
- **Core Concepts**: Table parsing, cell navigation, and dynamic row handling.
- **Practical Application**:
  - `232`: Basic web table interactions and data extraction.
  - `233`: Advanced dynamic table handling with real-time data validation.

### ⚪ Stage 8: Frames & Iframes (`08_Web_Select_Frames_Iframe`)
*Mastering frame and iframe interactions for complex web applications.*
- **Core Concepts**: Frame handling, iframe navigation, and multi-context frame switching.
- **Practical Application**:
  - `234`: Frame selection and interaction basics.
  - `235`: Working with web frames on various sites.
  - `236`: Advanced frame handling techniques.
  - `237`: Pro-level frame selection strategies.
  - `238`: Advanced frame handling v2 with complex scenarios.

### 🟣 Stage 9: Frame & Iframe Deep Dive (`09_Frame_Iframe`)
*Advanced exploration of complex iframe nesting and multi-frame synchronization.*
- **Core Concepts**: Nested iframes, multi-frame transitions, and recursive frame traversal.
- **Practical Application**:
  - `239`: Iframe interaction fundamentals.
  - `240`: Handling multiple frames concurrently.
  - `241`: Navigating nested iframes (Iframe within Iframe).

### 🟡 Stage 10: Keyboard, Hover, Drag & Drop (`10_Keyboard_Hover_Drag_Drop`)
*Mastering advanced input interactions beyond simple clicks and typing.*
- **Core Concepts**: Keyboard events, hover actions, drag-and-drop, and right-click context menus.
- **Practical Application**:
  - `242`: Keyboard interaction fundamentals.
  - `243`: JS Alerts handling.
  - `244`: Hover interactions on SpiceJet.
  - `245`: Basic drag-and-drop operations.
  - `246`: Advanced drag-and-drop with complex targets.
  - `247`: Right-click context menu automation.

### 🟣 Stage 12: Handle SVG (`12_Handle_SVG`)
*Mastering interaction with Scalable Vector Graphics (SVG) elements.*
- **Core Concepts**: SVG locators, interacting with vector shapes, and precision targeting of SVG paths.
- **Practical Application**:
  - `248_SVG_Project.spec.ts`: SVG automation project.
  - `249_SVG_Practice.spec.ts`: SVG interaction practice.
  - `250_Advance_SVG_Project.spec.ts`: Advanced SVG handling scenarios.

---

## Capstone Projects

### Project 4: TTA Bank
- `TTA_Bank.spec.ts`: End-to-end automation of fund transfers, balance validation, and account management.
- Location: `tests/Projects/Project_4_TTA_Bank/`

### Project 5: QA Portfolio
- `QA_Profile_Form.spec.ts`: Comprehensive form automation testing.
- Location: `tests/Projects/Project_5_QA_Portfolio/`

### Project 6: Web Table Automation
- `WebTable.spec.ts`: Automation of search and selection in dynamic web tables.
- Location: `tests/Projects/Project_6_Web_Table/`

### Project 6: Nested Iframes
- `Nested_Iframes.spec.ts`: Traversal of three levels of nested iframes with input field interactions.
- Location: `tests/Projects/Project_6_Iframe/`

### Project 7: Hover Menu
- `Hover.spec.ts`: Hover-based menu interaction to reveal and click hidden submenu items.
- Location: `tests/Projects/Project_7_Hover/`

### Project 8: Flipkart SVG
- `Flipkart_Macmini_Search.spec.ts`: Automation of SVG-based elements and search flows on Flipkart.
- Location: `tests/Projects/Project_8_Flipkart_SVG/`

---

## Engineering Architecture

The project follows a modular design to ensure that each learning milestone can be tested and debugged in isolation.

### High-Level Design
```
Playwright Test Runner
    │
    ▼
Config: playwright.config.ts
    │
    ├──► 01_Basics: Foundations (DOM Interaction)
    ├──► 02_First_Tests: State Management (Multi-Context Strategy)
    ├──► 03_Locators_Commands: Robustness (Production-Grade Locators)
    ├──► 04_Session_Storage: State Persistence (Auth Flows)
    ├──► 05_Allure_Reporting: Advanced Reporting
    ├──► 06_Multiple_Element: Batch Operations
    ├──► 07_WebTables: Dynamic Table Handling
    ├──► 08_Web_Select_Frames_Iframe: Frame & Iframe Interactions
    ├──► 09_Frame_Iframe: Advanced Iframe Deep Dive
    ├──► 10_Keyboard_Hover_Drag_Drop: Advanced Input Interactions
    ├──► 11_JS_Alerts: Native Dialog Handling
    └──► 12_Handle_SVG: SVG Element Interactions
              │
              ▼
    HTML Reports & Trace Analysis
```

---

## Repository Blueprint

```
LearningPlaywrightFundamentals/
├── .github/                    # CI/CD Workflows (GitHub Actions)
├── tests/                      # The Laboratory
│   ├── 01_Basics/              # Foundations
│   │   ├── Lab209.spec.ts
│   │   ├── Lab210_Test_Annoations.spec.ts
│   │   └── Util.ts
│   ├── 02_First_Tests/         # Context & Page Management
│   │   ├── Task/
│   │   │   ├── 01_OneBrowser_MultipleContext.spec.ts
│   │   │   ├── 02_OneBrowser_MutipleContext_MultiplePages.spec.ts
│   │   │   └── 03_OneContext_MultiplePages.spec.ts
│   │   └── [211-218].spec.ts
│   ├── 03_Locators_Commands/   # Precision Targeting
│   │   ├── Task/
│   │   │   ├── Project2_Cura_Navigation.spec.ts
│   │   │   ├── Project3_App.vwo.com.spec.ts
│   │   │   └── Project3_vwo.com_FreeTrailInvalidEmail.spec.ts
│   │   ├── index.html
│   │   └── [219-227].spec.ts
│   ├── 04_Session_Storage/     # Session & State Persistence
│   │   ├── 228_Session.spec.ts
│   │   └── 229.TestVWo.spec.ts
│   ├── 05_Allure_Reporting/    # Advanced Reporting
│   │   └── 230_Login.spec.ts
│   ├── 06_Multiple_Element/    # Multiple Elements Handling
│   │   └── 231_Multiple_Elements.spec.ts
│   ├── 07_WebTables/           # Web Table Interactions
│   │   ├── 232_WebTable_Basic.spec.ts
│   │   └── 233_WebTable_Dyanamic.spec.ts
│   ├── 08_Web_Select_Frames_Iframe/  # Frame & Iframe Handling
│   │   ├── 234_Web.spec.ts
│   │   ├── 235_Select_FramesWeb.spec.ts
│   │   ├── 236_Advance_Select_Frames2.spec.ts
│   │   ├── 237_Advance_Select_Pro.spec.ts
│   │   ├── 238_Advance_Select_Pro_v2.spec.ts
│   │   └── util.ts
│   ├── 09_Frame_Iframe/              # Advanced Frame Deep Dive
│   │   ├── 239_iframe.spec.ts
│   │   ├── 240_Multi_Frame.spec.ts
│   │   └── 241_Iframe_Within_Iframe.spec.ts
│   ├── 10_Keyboard_Hover_Drag_Drop/ # Keyboard, Hover, Drag & Drop
│   │   ├── 242_Keyboard.spec.ts
│   │   ├── 244_SpiceJet_Hover.spec.ts
│   │   ├── 245_Drag_Drop.spec.ts
│   │   ├── 246_Drag_Drop_Advance.spec.ts
│   │   ├── 247_RightClick.spec.ts
│   │   ├── A.png
│   │   ├── ArrowLeft.png
│   │   └── Shift+O.png
│   ├── 11_JS_Alerts/                # Native JS Dialog Handling
│   │   └── 243_JS_Alerts.spec.ts
│   ├── 12_Handle_SVG/                  # SVG Element Interactions
│   │   ├── 248_SVG_Project.spec.ts
│   │   ├── 249_SVG_Practice.spec.ts
│   │   └── 250_Advance_SVG_Project.spec.ts
│   ├── TTA_PracticePages/            # Practice Labs for Core Skills
│   │   ├── 01_Selectors_and_Locators/
│   │   │   ├── 01_Multiple_Elemenet_Filter_Login.spec.ts
│   │   │   └── 02_Web_Table_Employee_Directory.spec.ts
│   │   └── 02_Tables_and_Forms/
│   └── Projects/
│       ├── Project_4_TTA_Bank/
│       │   ├── TTA_Bank.spec.ts
│       │   ├── README.md
│       │   └── image.png
│       ├── Project_5_QA_Portfolio/
│       │   ├── QA_Profile_Form.spec.ts
│       │   ├── README.md
│       │   └── screenshot.png
│       ├── Project_6_Web_Table/
│       │   ├── WebTable.spec.ts
│       │   ├── README.md
│       │   └── screenshot.png
│       ├── Project_6_Iframe/
│       │   ├── Nested_Iframes.spec.ts
│       │   └── README.md
│       ├── Project_7_Hover/
│       │   ├── Hover.spec.ts
│       │   └── README.md
│       └── Project_8_Flipkart_SVG/
│           ├── Flipkart_Macmini_Search.spec.ts
│           └── README.md
├── tta-report/                 # Custom Automation Reports
├── playwright-report/          # Results & Insights
├── test-results/               # Evidence (Screenshots & Videos)
├── playwright.config.ts        # Global Configuration
└── package.json                # Project Dependencies
```

---

## Quick Start Guide

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd LearningPlaywrightFundamentals

# Setup the environment
npm install
npx playwright install
```

### Running the Labs
| Goal | Command |
| :--- | :--- |
| **Full Suite Audit** | `npx playwright test` |
| **Focus on Basics** | `npx playwright test tests/01_Basics` |
| **Context Deep Dive** | `npx playwright test tests/02_First_Tests` |
| **Locator Project** | `npx playwright test tests/03_Locators_Commands` |
| **Session Persistence** | `npx playwright test tests/04_Session_Storage` |
| **Advanced Reporting** | `npx playwright test tests/05_Allure_Reporting` |
| **Multiple Elements** | `npx playwright test tests/06_Multiple_Element` |
| **Web Tables** | `npx playwright test tests/07_WebTables` |
| **Frames & Iframes** | `npx playwright test tests/08_Web_Select_Frames_Iframe` |
| **Advanced Iframes** | `npx playwright test tests/09_Frame_Iframe` |
| **Keyboard, Hover & Drag** | `npx playwright test tests/10_Keyboard_Hover_Drag_Drop` |
| **JS Alerts** | `npx playwright test tests/11_JS_Alerts` |
| **SVG Elements** | `npx playwright test tests/12_Handle_SVG` |
| **Practice Labs** | `npx playwright test tests/TTA_PracticePages` |
| **Capstone Projects** | `npx playwright test tests/Projects` |
| **Interactive Debugging** | `npx playwright test --ui` |
| **Analyze Results** | `npx playwright show-report` |

---

## CI/CD: The Quality Gate

Integrated GitHub Actions ensure that every new lab added maintains the stability of the existing suite.

**The Pipeline Logic:**
`Push` → `Install Deps` → `Browser Setup` → `Headless Execution` → `Artifact Upload`

---

## Technical Stack

- **Language**: TypeScript (Strict mode)
- **Framework**: Playwright Test
- **Reporting**: HTML Reports & Allure
- **CI**: GitHub Actions
- **Analysis**: Playwright Trace Viewer (Retained on failure)