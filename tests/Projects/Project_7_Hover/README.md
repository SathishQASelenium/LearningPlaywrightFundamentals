# Project 7: Hover Menu Automation

Automates hover-based menu interactions on The Testing Academy platform, validating that submenu items become accessible after hovering over a parent menu.

## Test: `Hover.spec.ts`

- **URL**: `https://app.thetestingacademy.com/playwright/widgets/hover-menu`
- **Objective**: Hover over the **Add-ons** menu and click the **Wi-Fi** submenu item.

### Flow

```
Navigate ──► Hover on "Add-ons" (data-testid="nav-add-ons")
                │
                ▼
         Click "Wi-Fi" (data-testid="test-id-Wifi")
                │
                ▼
         Assert output contains "Wi-Fi"
```

### Validation

- Hover action on `[data-testid="nav-add-ons"]` reveals hidden submenu
- Clicks `[data-testid="test-id-Wifi"]` via `dispatchEvent` to bypass visibility checks
- Asserts `#output` text contains `"Wi-Fi"`

### Run

```bash
npx playwright test tests/Projects/Project_7_Hover
```
