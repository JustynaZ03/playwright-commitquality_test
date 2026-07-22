# Playwright QA Automation Project

## Project description

This repository contains automated tests created with Playwright.
The goal of this project is to testing site (https://commitquality.com/) and develop programming skills.

# Technologies

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Codex
## Test scope
The automated tests cover the following areas:
- User login
- Product search
-Checkout flow
- Basic functionalities
#Instalation
Clone the repository:
git clone https://github.com/JustynaZ03/playwright-commitquality_test.git
cd playwright-commitquality_test

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

st --headed

Run tests in UI mode:

npx playwright test --ui

Run a specific test file:

npx playwright test tests/add-product

## Test reports

After running tests, generate and open the HTML report:

npx playwright show-report

The report contains information about passed and failed tests, execution details, screenshots, videos, and traces if they are enabled in the configuration.

## Notes

This repository does not include sensitive data such as passwords, tokens, API keys, or .env files.

Generated folders such as node_modules, playwright-report, and test-results are excluded from Git and can be recreated locally or in CI.