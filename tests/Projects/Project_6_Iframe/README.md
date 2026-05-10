# Project 6: Nested Iframes Automation

Automates nested iframe traversal on The Testing Academy platform, demonstrating recursive frame navigation across three levels of iframe nesting.

## Test: `Nested_Iframes.spec.ts`

- **URL**: `https://app.thetestingacademy.com/playwright/frames/nested-iframes`
- **Objective**: Navigate three nested iframes and interact with input fields at each level.

### Structure

```
Page ──► iframe#pact1 ──► iframe#pact2 ──► iframe#pact3
  │            │                │                │
  │       #inp_val.fill()   #jex.fill()     #glaf.fill()
  │
  └── h3 (header text from page)
```

### Validation

- Fills `#inp_val` inside `iframe#pact1` (1st level)
- Fills `#jex` inside `iframe#pact2` (2nd level)
- Fills `#glaf` inside `iframe#pact3` (3rd level)
- Logs the page-level `h3` header text to console

### Run

```bash
npx playwright test tests/Projects/Project_6_Iframe
```
